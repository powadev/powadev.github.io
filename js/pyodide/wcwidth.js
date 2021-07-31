var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="wcwidth.data";var REMOTE_PACKAGE_BASE="wcwidth.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","wcwidth-0.2.5-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","wcwidth",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:194172,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1309,2726,4400,5871,7009,8181,9182,10277,11335,12390,13491,14588,15701,16783,17884,19023,20103,21210,22325,23461,24476,25541,26692,27883,28915,29967,31135,32301,33314,34377,35535,36745,37769,38830,39970,41113,42202,43230,44335,45483,46631,47640,48716,49861,51018,51968,52750,53593,54471,55435,56366,57144,58012,58914,59790,60834,61602,62398,63237,64133,65051,66045,66882,67624,68474,69325,70242,71116,72051,73037,73803,74578,75410,76310,77260,78118,79028,80018,80784,81552,82397,83290,84209,85064,85941,86953,87874,88662,89493,90327,91161,92125,92946,93856,94896,95716,96464,97328,98170,99005,99967,100804,101732,102684,103457,104243,105084,105974,106876,107814,108685,109549,110526,111493,112260,113055,113902,114780,115687,116638,117506,118390,119258,120313,121161,121940,122793,123634,124441,125414,126262,127219,128020,128900,129859,130776,131562,132385,133196,134059,135007,135888,136803,137650,138476,139306,140273,141153,141961,142817,143632,144492,145460,146297,147222,148103,148926,149736,150692,151624,152421,153220,154069,154938,155840,156775,157628,158563,159379,160145,160986,162079,162916,163672,164535,165380,166205,167174,168027,168997,169827,170667,171463,172441,173372,174172,174957,175798,176673,177580,178527,179395,180347,181162,181973,182836,184164,185732,187117,188443,189808,191089,192204,193545],sizes:[1309,1417,1674,1471,1138,1172,1001,1095,1058,1055,1101,1097,1113,1082,1101,1139,1080,1107,1115,1136,1015,1065,1151,1191,1032,1052,1168,1166,1013,1063,1158,1210,1024,1061,1140,1143,1089,1028,1105,1148,1148,1009,1076,1145,1157,950,782,843,878,964,931,778,868,902,876,1044,768,796,839,896,918,994,837,742,850,851,917,874,935,986,766,775,832,900,950,858,910,990,766,768,845,893,919,855,877,1012,921,788,831,834,834,964,821,910,1040,820,748,864,842,835,962,837,928,952,773,786,841,890,902,938,871,864,977,967,767,795,847,878,907,951,868,884,868,1055,848,779,853,841,807,973,848,957,801,880,959,917,786,823,811,863,948,881,915,847,826,830,967,880,808,856,815,860,968,837,925,881,823,810,956,932,797,799,849,869,902,935,853,935,816,766,841,1093,837,756,863,845,825,969,853,970,830,840,796,978,931,800,785,841,875,907,947,868,952,815,811,863,1328,1568,1385,1326,1365,1281,1115,1341,627],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_wcwidth.data")}Module["addRunDependency"]("datafile_wcwidth.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/top_level.txt",start:0,end:8,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/SOURCES.txt",start:8,end:408,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/zip-safe",start:408,end:409,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/PKG-INFO",start:409,end:11608,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/requires.txt",start:11608,end:11672,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth-0.2.5-py3.9.egg-info/dependency_links.txt",start:11672,end:11673,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth/table_wide.py",start:11673,end:91095,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth/unicode_versions.py",start:91095,end:91887,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth/table_zero.py",start:91887,end:402117,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth/wcwidth.py",start:402117,end:416989,audio:0},{filename:"/lib/python3.9/site-packages/wcwidth/__init__.py",start:416989,end:418546,audio:0}],remote_package_size:198268,package_uuid:"5770880a-8d09-4dbe-b72c-2cdf1f8edf6c"})})();