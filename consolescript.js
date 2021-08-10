const packages = [
	'asn1crypto', 'wcwidth', 'asysocks', 'winacl',
	'tqdm', 'minikerberos', 'prompt-toolkit', 'aiosmb',
	'msldap', 'wsnet', 'sqlalchemy', 'jackdaw', 'powa',
	'websockets', 'pypykatz', 'aesedb'
  ];

var runCmd = null;
var refreshfiles = null;
var addConsole = null;
var currentConsoleId = 0;
var parseNTDS = null;

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

	addConsole = (ctype) => {
		// add text
		console.log(ctype);
		let cid = currentConsoleId.toString();
		pyodide.globals.get("addconsole")(ctype, cid);
	}

	parseNTDS = async () => {
		var ntdsfile = document.getElementById("ntdsfile").files[0];
		console.log(ntdsfile);
		var ntdsfilestream = new FileStreamer(ntdsfile);

		var sysregfile = document.getElementById("sysregfile").files[0];
		console.log(sysregfile);
		var sysregfilestream = new FileStreamer(sysregfile);

		await pyodide.globals.get("parseNTDS")(sysregfilestream, ntdsfilestream);

	}

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
	wsnet.onerror = function(event) {
		console.error("WebSocket error observed:", event);
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

/*
const fileStreamer = new FileStreamer(aFile);
while (!fileStreamer.isEndOfFile()) {
  const data = await fileStreamer.readBlockAsText();
  console.log(data);
}
*/

class FileStreamer {
    constructor(file) {
        this.file = file;
        this.offset = 0;
    }
    isEndOfFile() {
        return this.offset >= this.getFileSize();
    }
	seek = async (n, whence = 0) =>  {
		//console.log("SEEK N" + n);
		//console.log("WHNECE " + whence)
		//n = parseInt(n);
		whence = parseInt(whence);
		if(whence == 0){
			this.offset = n;
			return;
		}
		if(whence == 1){
			this.offset += n;
			return;
		}
		if(whence == 2){
			// n must be negative
			this.offset = this.getFileSize() +  n;
			return;
		}
	}
	tell() {
		return this.offset;
	}
	close = async () => {
		return;
	}

    read(length) {
		//console.log("LEN: " + length);
		//console.log("OFF: " + this.offset);
		//console.log("END: " + (this.offset + length));
		//length = parseInt(length);
        const fileReader = new FileReader();
        const blob = this.file.slice(this.offset, this.offset + length);
        return new Promise((resolve, reject) => {
            fileReader.onloadend = (event) => {
                const target = (event.target);
                if (target.error == null) {
                    const result = target.result;
					//console.log("RESULT :" + result);
					//console.log("RES LEN: " + result.length);

                    this.offset += result.byteLength;
                    //this.testEndOfFile();
                    resolve(result);
                }
                else {
                    reject(target.error);
                }
            };
            fileReader.readAsArrayBuffer(blob);
			//fileReader.readAsBinaryString(blob);
        });
    }
    testEndOfFile() {
        if (this.isEndOfFile()) {
            console.log('Done reading file');
        }
    }
    getFileSize() {
        return this.file.size;
    }
}

parseNTDS = async () => {
	var file = document.getElementById("ntdsfile").files[0];
	console.log(file);
	var filestreamer = new FileStreamer(file);
	await filestreamer.seek(0x100);
	var result = await filestreamer.read(0x100);
	console.log(result)
	await filestreamer.seek(0x1000);
	var result = await filestreamer.read(0x5);
	console.log(result)
	await filestreamer.seek(0x0ADA);
	var result = await filestreamer.read(0xAD);
	console.log(result)
	await filestreamer.seek(0x100);
	var result = await filestreamer.read(0x22);
	console.log(result)
	var result = await filestreamer.read(32);
	console.log(result)
	var result = await filestreamer.read(16);
	console.log(result)

}
