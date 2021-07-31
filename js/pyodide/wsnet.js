var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="wsnet.data";var REMOTE_PACKAGE_BASE="wsnet.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","wsnet-0.0.2-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","wsnet",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","utils",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","operator",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","agent",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","protocol",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet/protocol","authentication",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet/protocol","common",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet/protocol","connection",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","pyodide",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","router",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/wsnet","server",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:26300,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,914,2335,3224,4437,5610,6835,7788,8791,9713,10540,11359,12048,12936,13747,14778,15750,16463,17289,18502,19345,20581,21834,23095,24322,25495],sizes:[914,1421,889,1213,1173,1225,953,1003,922,827,819,689,888,811,1031,972,713,826,1213,843,1236,1253,1261,1227,1173,805],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_wsnet.data")}Module["addRunDependency"]("datafile_wsnet.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/top_level.txt",start:0,end:6,audio:0},{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/SOURCES.txt",start:6,end:1633,audio:0},{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/PKG-INFO",start:1633,end:2016,audio:0},{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/requires.txt",start:2016,end:2035,audio:0},{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/dependency_links.txt",start:2035,end:2036,audio:0},{filename:"/lib/python3.9/site-packages/wsnet-0.0.2-py3.9.egg-info/not-zip-safe",start:2036,end:2037,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/_version.py",start:2037,end:2164,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/__init__.py",start:2164,end:2495,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/utils/encoder.py",start:2495,end:3099,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/utils/__init__.py",start:3099,end:3099,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/operator/sspiproxy.py",start:3099,end:7011,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/operator/__init__.py",start:7011,end:7011,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/agent/agent.py",start:7011,end:11855,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/agent/__init__.py",start:11855,end:11855,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/cmdtypes.py",start:11855,end:12242,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/__init__.py",start:12242,end:16035,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/utils.py",start:16035,end:16700,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/sequencenoreply.py",start:16700,end:17615,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/ntlmchallengereply.py",start:17615,end:18642,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/sessionkeyreply.py",start:18642,end:19568,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/ntlmchallenge.py",start:19568,end:20608,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/ntlmauth.py",start:20608,end:21754,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/sessionkey.py",start:21754,end:22387,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/ntlmauthreply.py",start:22387,end:23398,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/kerberosauthreply.py",start:23398,end:24419,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/sequenceno.py",start:24419,end:25050,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/kerberosauth.py",start:25050,end:26319,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/__init__.py",start:26319,end:26319,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/authentication/autherror.py",start:26319,end:27258,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/ok.py",start:27258,end:27848,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/err.py",start:27848,end:28880,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/inforeply.py",start:28880,end:30429,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/wsncontinue.py",start:30429,end:30994,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/listagentsreply.py",start:30994,end:33033,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/info.py",start:33033,end:33594,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/stop.py",start:33594,end:34192,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/listagents.py",start:34192,end:34765,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/__init__.py",start:34765,end:34765,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/common/log.py",start:34765,end:35702,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/connection/socketdata.py",start:35702,end:36386,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/connection/connect.py",start:36386,end:37860,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/protocol/connection/__init__.py",start:37860,end:37860,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/pyodide/clientauth.py",start:37860,end:41278,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/pyodide/client.py",start:41278,end:43910,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/pyodide/__init__.py",start:43910,end:43910,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/router/router.py",start:43910,end:51512,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/router/__init__.py",start:51512,end:51512,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/server/wsserver.py",start:51512,end:52399,audio:0},{filename:"/lib/python3.9/site-packages/wsnet/server/__init__.py",start:52399,end:52399,audio:0}],remote_package_size:30396,package_uuid:"c1133860-f530-4628-bf05-4cf9b73b4865"})})();