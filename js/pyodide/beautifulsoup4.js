var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="beautifulsoup4.data";var REMOTE_PACKAGE_BASE="beautifulsoup4.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","bs4",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bs4","builder",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bs4","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","beautifulsoup4-4.9.3-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:228850,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1437,2777,3866,4606,5431,6698,7715,8864,10060,11047,12161,13111,14234,15488,16567,17775,18845,20156,21417,22662,23686,24832,26159,27416,28677,29840,31191,32380,33391,34827,35937,36986,38172,39130,40182,41325,42074,43055,44059,44932,45766,46611,47662,48619,49289,50610,51805,53027,54192,55296,56476,57637,58909,60102,61277,62449,63509,64590,65633,66797,68014,69152,70078,71509,72683,73773,74913,76037,77358,78897,80477,81769,82587,83734,84804,86004,87296,88530,89683,90634,91700,92844,94117,95275,96788,98211,99277,100323,101742,102855,103883,105127,106328,107479,108575,109475,110200,111092,111804,112753,113917,115252,116335,117565,118647,119658,120664,121753,122751,123640,124991,126233,127538,128665,129914,130998,132414,133782,134933,136153,137419,138422,139641,141058,142150,143471,144610,145952,147168,148442,149773,150867,152365,153685,154999,156216,157203,158252,159185,160113,160916,161817,162659,163749,164616,165585,166585,167500,168400,169504,170604,171602,172621,173655,174716,175463,176361,177287,178342,179497,180613,181564,182590,183868,184848,185468,186504,187681,188668,189843,191024,192367,193249,194143,194787,195521,196475,197323,198589,199930,201081,202409,203489,204407,205311,206487,207523,208494,209300,210272,211530,212834,213846,214915,216272,217374,218353,219176,220331,221424,222626,223686,224824,226018,227344,228828],sizes:[1437,1340,1089,740,825,1267,1017,1149,1196,987,1114,950,1123,1254,1079,1208,1070,1311,1261,1245,1024,1146,1327,1257,1261,1163,1351,1189,1011,1436,1110,1049,1186,958,1052,1143,749,981,1004,873,834,845,1051,957,670,1321,1195,1222,1165,1104,1180,1161,1272,1193,1175,1172,1060,1081,1043,1164,1217,1138,926,1431,1174,1090,1140,1124,1321,1539,1580,1292,818,1147,1070,1200,1292,1234,1153,951,1066,1144,1273,1158,1513,1423,1066,1046,1419,1113,1028,1244,1201,1151,1096,900,725,892,712,949,1164,1335,1083,1230,1082,1011,1006,1089,998,889,1351,1242,1305,1127,1249,1084,1416,1368,1151,1220,1266,1003,1219,1417,1092,1321,1139,1342,1216,1274,1331,1094,1498,1320,1314,1217,987,1049,933,928,803,901,842,1090,867,969,1e3,915,900,1104,1100,998,1019,1034,1061,747,898,926,1055,1155,1116,951,1026,1278,980,620,1036,1177,987,1175,1181,1343,882,894,644,734,954,848,1266,1341,1151,1328,1080,918,904,1176,1036,971,806,972,1258,1304,1012,1069,1357,1102,979,823,1155,1093,1202,1060,1138,1194,1326,1484,22],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_beautifulsoup4.data")}Module["addRunDependency"]("datafile_beautifulsoup4.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/bs4/testing.py",start:0,end:45930,audio:0},{filename:"/lib/python3.9/site-packages/bs4/diagnose.py",start:45930,end:53685,audio:0},{filename:"/lib/python3.9/site-packages/bs4/formatter.py",start:53685,end:59339,audio:0},{filename:"/lib/python3.9/site-packages/bs4/element.py",start:59339,end:140989,audio:0},{filename:"/lib/python3.9/site-packages/bs4/__init__.py",start:140989,end:173091,audio:0},{filename:"/lib/python3.9/site-packages/bs4/dammit.py",start:173091,end:207221,audio:0},{filename:"/lib/python3.9/site-packages/bs4/builder/_html5lib.py",start:207221,end:225969,audio:0},{filename:"/lib/python3.9/site-packages/bs4/builder/_lxml.py",start:225969,end:238203,audio:0},{filename:"/lib/python3.9/site-packages/bs4/builder/_htmlparser.py",start:238203,end:256608,audio:0},{filename:"/lib/python3.9/site-packages/bs4/builder/__init__.py",start:256608,end:276385,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_tree.py",start:276385,end:365822,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_docs.py",start:365822,end:366889,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_soup.py",start:366889,end:396192,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_lxml.py",start:396192,end:400297,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_builder_registry.py",start:400297,end:405879,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_htmlparser.py",start:405879,end:409820,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/test_html5lib.py",start:409820,end:416574,audio:0},{filename:"/lib/python3.9/site-packages/bs4/tests/__init__.py",start:416574,end:416601,audio:0},{filename:"/lib/python3.9/site-packages/beautifulsoup4-4.9.3-py3.9.egg-info/top_level.txt",start:416601,end:416605,audio:0},{filename:"/lib/python3.9/site-packages/beautifulsoup4-4.9.3-py3.9.egg-info/SOURCES.txt",start:416605,end:417753,audio:0},{filename:"/lib/python3.9/site-packages/beautifulsoup4-4.9.3-py3.9.egg-info/PKG-INFO",start:417753,end:421787,audio:0},{filename:"/lib/python3.9/site-packages/beautifulsoup4-4.9.3-py3.9.egg-info/requires.txt",start:421787,end:421909,audio:0},{filename:"/lib/python3.9/site-packages/beautifulsoup4-4.9.3-py3.9.egg-info/dependency_links.txt",start:421909,end:421910,audio:0}],remote_package_size:232946,package_uuid:"2d610487-b6a7-4e9f-8286-9c3bfc4ee572"})})();