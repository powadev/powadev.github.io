var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="freesasa.data";var REMOTE_PACKAGE_BASE="freesasa.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","include",true,true);Module["FS_createPath"]("/include","python3.9",true,true);Module["FS_createPath"]("/include/python3.9","freesasa",true,true);Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","freesasa-2.1.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:428947,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1274,2406,3217,4211,5350,6194,7603,8745,9706,10667,11586,12476,13322,14122,14729,15659,16818,17770,18668,19626,20490,21411,22281,23294,24225,25122,26189,27266,28214,29290,30137,31106,31855,32581,33395,34229,34958,35759,36768,37811,38687,39940,41011,41880,42763,43945,45029,46183,47340,48459,49661,50529,51658,53120,54530,55731,56779,57494,58306,59005,59951,61124,62414,63798,65010,66166,67561,68797,70032,71204,72376,73729,74926,76219,77325,78457,79656,80875,81586,82675,83902,85121,86269,87562,88711,89755,91197,92594,93877,95054,96299,97282,98237,99200,100323,101390,102720,104005,105302,106380,107369,108051,108887,109567,110630,111622,112488,113217,114439,115805,117256,118431,119584,120763,122034,123059,123335,124682,125708,126561,127507,128555,130020,131368,132721,133753,135133,136435,137806,138830,139280,140131,141462,142751,143924,145275,146303,147158,148024,149029,150053,151070,152323,153564,154738,155813,157095,158168,159255,160386,161401,162269,163664,165012,165710,166327,167167,168470,169428,170468,171669,172621,173776,175015,175731,176540,177304,177990,178685,179388,180142,180918,181696,182461,183282,184014,184799,185577,186358,187321,188082,188854,189535,190219,191038,191807,192610,193374,194200,195290,196521,197729,198791,199879,201085,202318,203606,204736,205766,206768,207852,209124,210123,211320,212396,213264,214349,215151,216075,217392,218778,219915,221154,222453,223609,224492,225281,226222,227224,228268,229152,230215,231128,231924,232878,233786,234845,235870,236894,237721,238634,239697,241114,242145,243219,244093,245334,246390,247353,248494,249614,250650,251680,252631,253378,253929,254633,255638,256966,257956,259006,260324,261601,262732,263814,264791,265754,266396,267229,268068,268894,269720,270804,271854,272888,273854,274893,275920,276927,277992,279032,280002,280961,281935,282912,283999,285012,286027,287174,288336,289652,291125,292682,294214,295607,296982,298381,299768,301333,302745,304314,305870,307219,308629,310261,311899,313466,314941,316570,318173,319744,321025,322021,322708,323557,324490,325268,326247,326921,328044,328893,330488,331773,332393,333549,334678,335647,336618,337716,339088,339805,340626,341445,342326,343233,344693,345804,347242,348648,349875,350899,352206,353064,354052,355429,356730,357690,358860,359986,361098,362431,363200,364196,365484,366469,367696,368968,369755,370935,372271,373252,374276,375201,376227,377144,378291,379408,380794,382128,383134,384444,385748,386772,388046,389004,389994,391105,391910,393187,394536,395738,397065,398292,399832,401117,402306,403446,404594,405753,406903,407818,409004,410111,411262,412314,413385,414283,415239,416167,417352,418350,419326,420538,421356,422628,423912,424585,425868,427008,427965,428526],sizes:[1274,1132,811,994,1139,844,1409,1142,961,961,919,890,846,800,607,930,1159,952,898,958,864,921,870,1013,931,897,1067,1077,948,1076,847,969,749,726,814,834,729,801,1009,1043,876,1253,1071,869,883,1182,1084,1154,1157,1119,1202,868,1129,1462,1410,1201,1048,715,812,699,946,1173,1290,1384,1212,1156,1395,1236,1235,1172,1172,1353,1197,1293,1106,1132,1199,1219,711,1089,1227,1219,1148,1293,1149,1044,1442,1397,1283,1177,1245,983,955,963,1123,1067,1330,1285,1297,1078,989,682,836,680,1063,992,866,729,1222,1366,1451,1175,1153,1179,1271,1025,276,1347,1026,853,946,1048,1465,1348,1353,1032,1380,1302,1371,1024,450,851,1331,1289,1173,1351,1028,855,866,1005,1024,1017,1253,1241,1174,1075,1282,1073,1087,1131,1015,868,1395,1348,698,617,840,1303,958,1040,1201,952,1155,1239,716,809,764,686,695,703,754,776,778,765,821,732,785,778,781,963,761,772,681,684,819,769,803,764,826,1090,1231,1208,1062,1088,1206,1233,1288,1130,1030,1002,1084,1272,999,1197,1076,868,1085,802,924,1317,1386,1137,1239,1299,1156,883,789,941,1002,1044,884,1063,913,796,954,908,1059,1025,1024,827,913,1063,1417,1031,1074,874,1241,1056,963,1141,1120,1036,1030,951,747,551,704,1005,1328,990,1050,1318,1277,1131,1082,977,963,642,833,839,826,826,1084,1050,1034,966,1039,1027,1007,1065,1040,970,959,974,977,1087,1013,1015,1147,1162,1316,1473,1557,1532,1393,1375,1399,1387,1565,1412,1569,1556,1349,1410,1632,1638,1567,1475,1629,1603,1571,1281,996,687,849,933,778,979,674,1123,849,1595,1285,620,1156,1129,969,971,1098,1372,717,821,819,881,907,1460,1111,1438,1406,1227,1024,1307,858,988,1377,1301,960,1170,1126,1112,1333,769,996,1288,985,1227,1272,787,1180,1336,981,1024,925,1026,917,1147,1117,1386,1334,1006,1310,1304,1024,1274,958,990,1111,805,1277,1349,1202,1327,1227,1540,1285,1189,1140,1148,1159,1150,915,1186,1107,1151,1052,1071,898,956,928,1185,998,976,1212,818,1272,1284,673,1283,1140,957,561,421],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_freesasa.data")}Module["addRunDependency"]("datafile_freesasa.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/include/python3.9/freesasa/pdb.c",start:0,end:12112,audio:0},{filename:"/include/python3.9/freesasa/parser.h",start:12112,end:14835,audio:0},{filename:"/include/python3.9/freesasa/node.c",start:14835,end:33184,audio:0},{filename:"/include/python3.9/freesasa/freesasa.c",start:33184,end:39352,audio:0},{filename:"/include/python3.9/freesasa/xml.c",start:39352,end:54853,audio:0},{filename:"/include/python3.9/freesasa/selection.h",start:54853,end:55997,audio:0},{filename:"/include/python3.9/freesasa/log.c",start:55997,end:63800,audio:0},{filename:"/include/python3.9/freesasa/classifier_oons.c",start:63800,end:78867,audio:0},{filename:"/include/python3.9/freesasa/rsa.c",start:78867,end:84884,audio:0},{filename:"/include/python3.9/freesasa/example.c",start:84884,end:86308,audio:0},{filename:"/include/python3.9/freesasa/coord.c",start:86308,end:92754,audio:0},{filename:"/include/python3.9/freesasa/sasa_lr.c",start:92754,end:106419,audio:0},{filename:"/include/python3.9/freesasa/lexer.c",start:106419,end:168041,audio:0},{filename:"/include/python3.9/freesasa/lexer.h",start:168041,end:176671,audio:0},{filename:"/include/python3.9/freesasa/freesasa.h",start:176671,end:223006,audio:0},{filename:"/include/python3.9/freesasa/nb.h",start:223006,end:225037,audio:0},{filename:"/include/python3.9/freesasa/parser.c",start:225037,end:276292,audio:0},{filename:"/include/python3.9/freesasa/coord.h",start:276292,end:285868,audio:0},{filename:"/include/python3.9/freesasa/util.c",start:285868,end:288560,audio:0},{filename:"/include/python3.9/freesasa/classifier.c",start:288560,end:322005,audio:0},{filename:"/include/python3.9/freesasa/freesasa_internal.h",start:322005,end:334947,audio:0},{filename:"/include/python3.9/freesasa/classifier_protor.c",start:334947,end:367099,audio:0},{filename:"/include/python3.9/freesasa/classifier_naccess.c",start:367099,end:387708,audio:0},{filename:"/include/python3.9/freesasa/nb.c",start:387708,end:402498,audio:0},{filename:"/include/python3.9/freesasa/classifier.h",start:402498,end:406358,audio:0},{filename:"/include/python3.9/freesasa/main.c",start:406358,end:429733,audio:0},{filename:"/include/python3.9/freesasa/sasa_sr.c",start:429733,end:439104,audio:0},{filename:"/include/python3.9/freesasa/json.c",start:439104,end:448328,audio:0},{filename:"/include/python3.9/freesasa/selection.c",start:448328,end:475161,audio:0},{filename:"/include/python3.9/freesasa/structure.c",start:475161,end:507252,audio:0},{filename:"/include/python3.9/freesasa/pdb.h",start:507252,end:513942,audio:0},{filename:"/lib/python3.9/site-packages/freesasa.so",start:513942,end:820282,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/top_level.txt",start:820282,end:820291,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/SOURCES.txt",start:820291,end:821071,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/PKG-INFO",start:821071,end:821855,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/dependency_links.txt",start:821855,end:821856,audio:0}],remote_package_size:433043,package_uuid:"112280b9-b601-4943-b2d9-18a3e624f523"})})();