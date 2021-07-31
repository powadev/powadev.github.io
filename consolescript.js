const packages = [
	'asn1crypto', 'wcwidth', 'asysocks', 'winacl',
	'tqdm', 'minikerberos', 'prompt-toolkit', 'aiosmb',
	'msldap', 'wsnet', 'sqlalchemy', 'jackdaw', 'powa',
	'websockets', 'pypykatz'
  ];

var runCmd = null;

function getAnchor() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
}
  
  // FOR TESTING
  function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const queuereadtest = async (pyodide) => {
	  while(true){
		  let result = await pyodide.globals.get('builtins').POWACONSOLE_CMD_QUEUE_OUT.get();
		  //console.log(result);
		  if(result.toJs){
			  // if we get a proxy we need to do the conversion here
			  // faster than using json
			  let jsresult = result.toJs();
			  result.destroy();
			  result = jsresult;
		  };
		  document.getElementById("consoleoutput").value += result;
	  }
		  
  };
  
  const queuemonitor = async (pyodide) => {
	console.log("queuemonitor started");
	queuereadtest(pyodide);

	runCmd = async () => {
		// KEEP THE WSNET PARAMETER NAME EVEN IF YOU MODIFY THE URL!!!!
		// PROXY WILL NOT WORK OTHERWISE
		//let x = JSON.parse(JSON.stringify(document.getElementById("consoleinput").value.toString()));
		await pyodide.globals.get('builtins').POWACONSOLE_CMD_QUEUE_IN.put(document.getElementById("consoleinput").value);
	  
	  }
  };
  
  const fetchPyCode = (path) => fetch(`${window.location.origin}/${path}`).then(async res => {
	const txt = await res.text();
	return txt;
  });
  
  const loadPackages = (pyodide) => {
	pyodide.loadPackage(packages).then(async () => {
	  console.log('Packages loaded!');
  
	  const pyCode = await fetchPyCode('consolecode.py');
  
	  pyodide.runPythonAsync(pyCode).then(() => {
		// the python code above doesnt block
		// this is the main communication function
		document.getElementById("commandButton").disabled = false; 
		document.getElementById("statusButton").value = "RUNNING";
		let dunno = {
			send : (data) => {
				let res = data.toJs();
				//console.log(res);
				wsnet.send(res);
			}
		};

		const refreshfiles = () => {
			console.log("refreshfiles called!");
		};

		pyodide.globals.get('builtins').POWACONSOLE_UPDATE_FILES=refreshfiles;
		pyodide.globals.get('builtins').global_current_websocket.append(dunno);
		wsnet.onclose = function(event) {
			pyodide.globals.get('builtins').wsnet_onclosed_callback(event);
			document.getElementById("statusButton").value = "DISCONNECTED";
		}
			
		wsnet.onmessage = function(event) {
			//console.log(event.data);
			event.data.arrayBuffer().then(buffer => {
					//console.log(buffer);
					pyodide.globals.get('wsnet_onmessage_callback')(buffer);
				}
			);
		}

		queuemonitor(pyodide);
	  });
	});
  };
  
  const main = async () => {
	const pyodide = await loadPyodide({ indexURL: "/js/pyodide/" });
	// Pyodide is now ready to use...
  
	//setting up virtual filesystem
	console.log('Setting up virtual filesystem...');
  
	BrowserFS.configure({ fs: "LocalStorage" }, (e) => {
	  if (e) {
		// An error happened!
		throw e;
	  }
  
	  // var fs = BrowserFS.BFSRequire('fs');
	  const FS = pyodide._module.FS;
	  const PATH = pyodide._module.PATH;
	  const BFS = new BrowserFS.EmscriptenFS(FS, PATH);
  
	  FS.mkdir('/data');
	  FS.mount(BFS, { root: '/' }, '/data');
  
	  console.log('Virtual filesystem OK!');


	  
  
	  //Loading python packages...
	  console.log('Loading packages...');
  
	  loadPackages(pyodide);
	});
  };
  
  
  const start = () => {
	// KEEP THE WSNET PARAMETER NAME EVEN IF YOU MODIFY THE URL!!!!
	// PROXY WILL NOT WORK OTHERWISE
	var proxyurl = document.getElementById("proxyurl").value;
	wsnet = new WebSocket(proxyurl);
	wsnet.onopen = function (event) {
	  document.getElementById("statusButton").value = "CONNECTED, LOADING PYODIDE...";
	  console.log("WebSocket is open now.");
	};

  
	main();
  
  }

  let saveHistory = () => {
	let data = document.getElementById("consoleoutput").value;
	
	// Convert the text to BLOB.
	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = 'cmdhistory.txt';	   // The file to save the data.

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	}
	else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click(); 
}