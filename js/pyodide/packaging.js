var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="packaging.data";var REMOTE_PACKAGE_BASE="packaging.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","packaging-21.0-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","packaging",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:63454,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1099,2322,3556,4814,5919,7146,8504,9920,10856,12146,13234,14607,15951,17392,18676,19937,20702,21929,22809,24264,25709,26751,28051,29084,29978,31279,32375,33198,34512,35757,36750,37800,38884,40112,41026,42072,42965,44206,45119,46069,47325,48545,49448,50581,51647,53100,54429,55719,56802,57964,59137,60067,61191,62430],sizes:[1099,1223,1234,1258,1105,1227,1358,1416,936,1290,1088,1373,1344,1441,1284,1261,765,1227,880,1455,1445,1042,1300,1033,894,1301,1096,823,1314,1245,993,1050,1084,1228,914,1046,893,1241,913,950,1256,1220,903,1133,1066,1453,1329,1290,1083,1162,1173,930,1124,1239,1024],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_packaging.data")}Module["addRunDependency"]("datafile_packaging.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/top_level.txt",start:0,end:10,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/SOURCES.txt",start:10,end:1764,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/PKG-INFO",start:1764,end:15147,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/requires.txt",start:15147,end:15164,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/dependency_links.txt",start:15164,end:15165,audio:0},{filename:"/lib/python3.9/site-packages/packaging/markers.py",start:15165,end:23640,audio:0},{filename:"/lib/python3.9/site-packages/packaging/py.typed",start:23640,end:23640,audio:0},{filename:"/lib/python3.9/site-packages/packaging/__about__.py",start:23640,end:24301,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_musllinux.py",start:24301,end:28679,audio:0},{filename:"/lib/python3.9/site-packages/packaging/requirements.py",start:28679,end:33343,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_structures.py",start:33343,end:34972,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_manylinux.py",start:34972,end:46460,audio:0},{filename:"/lib/python3.9/site-packages/packaging/version.py",start:46460,end:61125,audio:0},{filename:"/lib/python3.9/site-packages/packaging/specifiers.py",start:61125,end:92089,audio:0},{filename:"/lib/python3.9/site-packages/packaging/tags.py",start:92089,end:107803,audio:0},{filename:"/lib/python3.9/site-packages/packaging/__init__.py",start:107803,end:108300,audio:0},{filename:"/lib/python3.9/site-packages/packaging/utils.py",start:108300,end:112500,audio:0}],remote_package_size:67550,package_uuid:"34543113-8a81-431b-b109-0dd624ee34e8"})})();