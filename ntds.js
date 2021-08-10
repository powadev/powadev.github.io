const packages = [
	'wcwidth', 'tqdm', 'minikerberos', 
	'prompt-toolkit', 'powa', 'aesedb'
  ];

var runCmd = null;
var refreshfiles = null;
var addConsole = null;
var currentConsoleId = 0;
var parseNTDS = null;


const fetchPyCode = (path) => fetch(`${window.location.origin}/${path}`).then(async res => {
	const txt = await res.text();
	return txt;
  });


	const queuemonitor = async (pyodide) => {
		var ntdsfile = document.getElementById("ntdsfile").files[0];
		console.log(ntdsfile);
		var ntdsfilestream = new FileStreamer(ntdsfile);

		var sysregfile = document.getElementById("sysregfile").files[0];
		console.log(sysregfile);
		var sysregfilestream = new FileStreamer(sysregfile);

		await pyodide.globals.get("parseNTDS")(sysregfilestream, ntdsfilestream);
	}
  
  const loadPackages = (pyodide) => {
	pyodide.loadPackage(packages).then(async () => {
	  console.log('Packages loaded!');
  
	  const pyCode = await fetchPyCode('consolecode.py');
  
	  pyodide.runPythonAsync(pyCode).then(() => {
		// the python code above doesnt block
		// this is the main communication function

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
	main();
  }


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

