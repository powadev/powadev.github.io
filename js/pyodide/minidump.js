var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="minidump.data";var REMOTE_PACKAGE_BASE="minidump.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","minidump",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/minidump","utils",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/minidump/utils","winapi",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/minidump","streams",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","minidump-0.0.18-py3.9.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:128414,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,694,1667,2627,3895,5275,6109,7292,8092,8573,9167,10099,11043,12167,13571,14684,15760,16367,16929,17506,18583,19454,20648,21730,22842,23730,24840,25850,26602,27804,28814,29847,30992,32273,33493,34392,34819,35419,36498,37665,38663,39561,40694,41950,43108,44347,45611,46957,48106,49087,50381,51686,52976,54060,55149,56349,57842,59085,60047,61173,62176,63101,64149,65326,66579,67660,68791,69805,70658,71739,72869,73895,74782,75840,76657,77652,78231,78953,79765,80453,80832,81130,81732,82546,83272,83693,84320,85288,86362,87286,88674,89869,90721,91502,92506,93146,93830,94709,95642,96888,98056,99034,99872,100763,101318,102058,103134,104289,105548,106851,107723,108630,109576,110698,111856,113030,113731,114578,115387,116283,117091,117997,119031,119953,120902,121930,122444,123259,124240,125127,126044,127031,128152],sizes:[694,973,960,1268,1380,834,1183,800,481,594,932,944,1124,1404,1113,1076,607,562,577,1077,871,1194,1082,1112,888,1110,1010,752,1202,1010,1033,1145,1281,1220,899,427,600,1079,1167,998,898,1133,1256,1158,1239,1264,1346,1149,981,1294,1305,1290,1084,1089,1200,1493,1243,962,1126,1003,925,1048,1177,1253,1081,1131,1014,853,1081,1130,1026,887,1058,817,995,579,722,812,688,379,298,602,814,726,421,627,968,1074,924,1388,1195,852,781,1004,640,684,879,933,1246,1168,978,838,891,555,740,1076,1155,1259,1303,872,907,946,1122,1158,1174,701,847,809,896,808,906,1034,922,949,1028,514,815,981,887,917,987,1121,262],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_minidump.data")}Module["addRunDependency"]("datafile_minidump.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/minidump/common_structs.py",start:0,end:9464,audio:0},{filename:"/lib/python3.9/site-packages/minidump/__amain__.py",start:9464,end:12733,audio:0},{filename:"/lib/python3.9/site-packages/minidump/minidumpfile.py",start:12733,end:22531,audio:0},{filename:"/lib/python3.9/site-packages/minidump/minidumpshell.py",start:22531,end:27769,audio:0},{filename:"/lib/python3.9/site-packages/minidump/directory.py",start:27769,end:30118,audio:0},{filename:"/lib/python3.9/site-packages/minidump/aminidumpfile.py",start:30118,end:39807,audio:0},{filename:"/lib/python3.9/site-packages/minidump/__main__.py",start:39807,end:43308,audio:0},{filename:"/lib/python3.9/site-packages/minidump/_version.py",start:43308,end:43440,audio:0},{filename:"/lib/python3.9/site-packages/minidump/exceptions.py",start:43440,end:43733,audio:0},{filename:"/lib/python3.9/site-packages/minidump/minidumpreader.py",start:43733,end:55288,audio:0},{filename:"/lib/python3.9/site-packages/minidump/header.py",start:55288,end:58116,audio:0},{filename:"/lib/python3.9/site-packages/minidump/constants.py",start:58116,end:60503,audio:0},{filename:"/lib/python3.9/site-packages/minidump/writer.py",start:60503,end:69691,audio:0},{filename:"/lib/python3.9/site-packages/minidump/win_datatypes.py",start:69691,end:75828,audio:0},{filename:"/lib/python3.9/site-packages/minidump/aminidumpreader.py",start:75828,end:87314,audio:0},{filename:"/lib/python3.9/site-packages/minidump/__init__.py",start:87314,end:87331,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/privileges_types.py",start:87331,end:94664,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/createminidump.py",start:94664,end:105996,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/privileges.py",start:105996,end:112640,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/__init__.py",start:112640,end:112640,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/winapi/defines.py",start:112640,end:136171,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/winapi/version.py",start:136171,end:139939,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/winapi/psapi.py",start:139939,end:142337,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/winapi/__init__.py",start:142337,end:142337,audio:0},{filename:"/lib/python3.9/site-packages/minidump/utils/winapi/kernel32.py",start:142337,end:148623,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/SystemMemoryInfoStream.py",start:148623,end:148717,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/TokenStream.py",start:148717,end:148816,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/HandleOperationListStream.py",start:148816,end:149498,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/FunctionTableStream.py",start:149498,end:150473,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/LastReservedStream.py",start:150473,end:151022,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ContextStream.py",start:151022,end:176296,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ThreadExListStream.py",start:176296,end:179130,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/MemoryInfoListStream.py",start:179130,end:191662,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/MiscInfoStream.py",start:191662,end:198346,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/Memory64ListStream.py",start:198346,end:201557,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/SystemInfoStream.py",start:201557,end:216087,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ExceptionStream.py",start:216087,end:227515,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ThreadListStream.py",start:227515,end:230823,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/JavaScriptDataStream.py",start:230823,end:230909,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/MemoryListStream.py",start:230909,end:234161,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ThreadInfoListStream.py",start:234161,end:240667,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/CommentStreamW.py",start:240667,end:241294,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/CommentStreamA.py",start:241294,end:241893,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ProcessVmCountersStream.py",start:241893,end:242002,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/HandleDataStream.py",start:242002,end:250900,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/__init__.py",start:250900,end:254029,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/ModuleListStream.py",start:254029,end:262423,audio:0},{filename:"/lib/python3.9/site-packages/minidump/streams/UnloadedModuleListStream.py",start:262423,end:267329,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/top_level.txt",start:267329,end:267338,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/SOURCES.txt",start:267338,end:269123,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/entry_points.txt",start:269123,end:269175,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/PKG-INFO",start:269175,end:269678,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/dependency_links.txt",start:269678,end:269679,audio:0},{filename:"/lib/python3.9/site-packages/minidump-0.0.18-py3.9.egg-info/not-zip-safe",start:269679,end:269680,audio:0},{filename:"/bin/minidump",start:269680,end:270652,audio:0}],remote_package_size:132510,package_uuid:"bd64ab99-fb10-4273-9f86-a9595989ec4c"})})();