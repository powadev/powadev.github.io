import js
import asyncio
import builtins

# order of import and queue creation is important!
builtins.POWACONSOLE_CMD_QUEUE_IN = asyncio.Queue()
builtins.POWACONSOLE_CMD_QUEUE_OUT = asyncio.Queue()
builtins.global_wsnet_dispatch_table = {}
builtins.global_current_websocket = []


from wsnet.protocol import *
from wsnet.pyodide.client import *

def wsnet_onclosed_callback(evt):
	try:
		err = Exception('JS weboscket channel closed! Code: %s Reason: %s' % (evt.code, evt.reason))
		for token in builtins.global_wsnet_dispatch_table:
			builtins.global_wsnet_dispatch_table[token].put_nowait((None, err))
	
	except Exception as e:
		print('wsnet_onclosed_callback crashed! Reason: %s' % e)

def wsnet_onmessage_callback(data):
	try:
		data = data.to_py() # data here will be a memoryview class, need to convert it to bytes
		#print('here %s ' % data)
		#print('onmessage')
		cmd = CMD.from_bytes(data)
		#print('here cmd %s' % cmd)
		builtins.global_wsnet_dispatch_table[cmd.token].put_nowait((cmd, None))
	except Exception as e:
		print('wsnet_onmessage_callback crashed! Reason: %s' % e)

consoletype = js.getAnchor()
if consoletype is None:
	consoletype = 'smb'

if consoletype == 'smb':
	from powa.console.smb import POWASMBConsole
	console = POWASMBConsole()
elif consoletype == 'ldap':
	from powa.console.ldap import POWALDAPConsole
	console = POWALDAPConsole()
else:
	raise Exception('Unknown console type requested in anchor!')

asyncio.create_task(console.run())
await asyncio.sleep(0)