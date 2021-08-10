import js
import asyncio
import builtins
import traceback

def dummy():
	return

# order of import and queue creation is important!
builtins.POWACONSOLE_CMD_QUEUE_IN = asyncio.Queue()
builtins.POWACONSOLE_CMD_QUEUE_OUT = asyncio.Queue()
builtins.global_wsnet_dispatch_table = {}
builtins.global_current_websocket = []
builtins.POWACONSOLE_UPDATE_FILES = dummy
builtins.POWACONSOLE_CONSOLES = {} #consoleid -> console


from wsnet.protocol import *
from wsnet.pyodide.client import *

class PyFileStreamer:
	def __init__(self, jsfilestreamer):
		self.jsfilestreamer = jsfilestreamer
	
	async def seek(self, pos, whence = 0):
		await self.jsfilestreamer.seek(pos, whence)
	
	async def read(self, n):
		data_proxy = await self.jsfilestreamer.read(n)
		res = bytes(data_proxy.to_py())

		#temp = await self.jsfilestreamer.read(4)
		#await self.seek(-4, 1)
		if len(res) != n:
			print('READ WARNING!')
			print(len(res))
			print(n)
			print(data_proxy)
			print(type(res))
			print(res)
		return res
	
	def tell(self):
		data_proxy = self.jsfilestreamer.tell()
		return data_proxy #thi si int, no conversion needed
	
	async def close(self):
		await self.jsfilestreamer.close()

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

async def parse_ntds_process(in_q):
	try:
		while True:
			secret, total, err, finish = await in_q.get()
			if err is not None:
				try:
					raise err
				except Exception as e:
					traceback.print_exc()

			if finish is True:
				print('Finished!')


	except Exception as e:
		traceback.print_exc()
	
async def parseNTDS(bootkey, ntdsfilestream):
	try:
		print("Loading virtual filestream wrapper...")
		bootkeystream = PyFileStreamer(bootkey)
		ntdsfile = PyFileStreamer(ntdsfilestream)

		print("Setting up parser...")
		from aesedb.examples.ntdsparse import NTDSParserConsole
		ntdscon = NTDSParserConsole(
			bootkeystream,
			ntdsfile,
			show_progress = True,
			outfile = None,
			ext_result_q = None
		)
		print("Starting up parser...")
		_, err = await ntdscon.run()
		if err is not None:
			raise err
	except Exception as e:
		traceback.print_exc()

def addconsole(consoletype, consoleid):
	consoletype = js.getAnchor()
	if consoletype is None:
		consoletype = 'smb'

	if consoletype == 'smb':
		from powa.console.smb import POWASMBConsole
		console = POWASMBConsole(consoleid)
	elif consoletype == 'ldap':
		from powa.console.ldap import POWALDAPConsole
		console = POWALDAPConsole(consoleid)
	else:
		raise Exception('Unknown console type requested in anchor!')

	builtins.POWACONSOLE_CONSOLES[consoleid] = console
	asyncio.create_task(console.run())