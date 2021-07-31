var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="xlrd.data";var REMOTE_PACKAGE_BASE="xlrd.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","xlrd",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","xlrd-2.0.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:203974,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1417,2850,4090,5288,6654,8216,9348,10470,11852,13260,14625,15880,17158,18535,19776,20964,21972,23006,24275,25076,26255,27389,28452,29738,30842,32114,33483,34546,35763,37024,38320,39545,40717,42052,43369,44568,45585,46625,47540,48697,49859,50556,51796,52743,54099,55467,56556,57813,59104,60316,61792,63017,64259,65251,66570,67673,68852,69953,71121,72147,73345,74456,75585,76726,77657,78860,79922,81041,82091,83069,84139,85367,86427,87730,88796,89825,90568,91273,92042,92872,93620,94313,95090,96119,96958,97727,98861,100364,101726,102986,104077,105137,105908,106639,107687,108778,109775,110715,111572,112511,113434,114408,115562,116700,117809,118381,119424,120488,121455,122374,123290,124187,125177,126417,127219,128197,128983,130201,131401,132764,134246,135456,136792,137692,138915,139994,141206,142212,143126,143896,144925,145827,146963,147937,148992,149909,150756,151832,152663,153615,154671,155694,156726,157684,158745,159585,160541,161638,162360,163074,164e3,164761,165907,167167,168129,169300,170381,171546,172596,173584,174817,175978,177140,178413,179678,180975,182194,183607,184757,185900,187166,188102,189542,190846,192301,193542,194973,196485,197499,198715,199778,200874,201964,202921,203921],sizes:[1417,1433,1240,1198,1366,1562,1132,1122,1382,1408,1365,1255,1278,1377,1241,1188,1008,1034,1269,801,1179,1134,1063,1286,1104,1272,1369,1063,1217,1261,1296,1225,1172,1335,1317,1199,1017,1040,915,1157,1162,697,1240,947,1356,1368,1089,1257,1291,1212,1476,1225,1242,992,1319,1103,1179,1101,1168,1026,1198,1111,1129,1141,931,1203,1062,1119,1050,978,1070,1228,1060,1303,1066,1029,743,705,769,830,748,693,777,1029,839,769,1134,1503,1362,1260,1091,1060,771,731,1048,1091,997,940,857,939,923,974,1154,1138,1109,572,1043,1064,967,919,916,897,990,1240,802,978,786,1218,1200,1363,1482,1210,1336,900,1223,1079,1212,1006,914,770,1029,902,1136,974,1055,917,847,1076,831,952,1056,1023,1032,958,1061,840,956,1097,722,714,926,761,1146,1260,962,1171,1081,1165,1050,988,1233,1161,1162,1273,1265,1297,1219,1413,1150,1143,1266,936,1440,1304,1455,1241,1431,1512,1014,1216,1063,1096,1090,957,1e3,53],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_xlrd.data")}Module["addRunDependency"]("datafile_xlrd.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/xlrd/biffh.py",start:0,end:16651,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/timemachine.py",start:16651,end:18408,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/xldate.py",start:18408,end:26342,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/compdoc.py",start:26342,end:47433,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/formatting.py",start:47433,end:93006,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/book.py",start:93006,end:150533,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/info.py",start:150533,end:150569,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/formula.py",start:150569,end:245024,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/sheet.py",start:245024,end:351830,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/__init__.py",start:351830,end:359150,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/top_level.txt",start:359150,end:359155,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/SOURCES.txt",start:359155,end:359533,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/PKG-INFO",start:359533,end:362794,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/requires.txt",start:362794,end:362856,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/dependency_links.txt",start:362856,end:362857,audio:0},{filename:"/bin/runxlrd.py",start:362857,end:378933,audio:0}],remote_package_size:208070,package_uuid:"45b0a270-c514-4551-9b72-2d88507ac9e5"})})();