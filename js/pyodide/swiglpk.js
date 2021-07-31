var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="swiglpk.data";var REMOTE_PACKAGE_BASE="swiglpk.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","swiglpk",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:854659,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1429,2339,3616,4831,5843,6553,7171,7830,8352,9180,9953,10452,10986,11519,12322,13271,13985,14702,15325,15959,16575,17203,17840,18483,19099,19756,20421,21218,21786,22506,23250,24009,24632,25206,26037,26960,28284,29521,30965,31286,32591,33989,35331,36538,37835,39082,40325,41319,42411,43516,44570,45602,46247,46886,47505,48114,48731,49340,49958,50574,51184,51804,52414,53037,53666,54437,55261,56101,56969,57787,58766,59808,60862,61911,62979,64058,65102,66172,67276,68266,69315,70310,71333,72333,73272,75147,76471,77770,79062,80357,81650,82939,84192,85317,86459,88013,88824,89182,89927,91133,91770,92408,93471,94104,94665,95200,95860,96734,97461,98128,99314,99960,100506,101044,102439,103428,104291,105448,106514,107425,108261,109171,109788,110373,111040,111929,112543,113141,113695,114318,114971,115834,116535,117323,118081,118816,119693,120486,121170,121965,122978,123874,124702,125693,126633,127958,129048,130164,130839,131865,132503,133281,133883,134976,135878,136751,137619,138548,139656,140625,141426,142369,143288,144237,145622,146881,148138,149172,150141,151288,152467,153673,154784,155991,157276,158338,159326,160298,161632,162199,163143,163829,164705,165805,166631,167925,169128,170194,171400,172288,173392,174390,175297,176173,177131,178078,179209,180239,181129,182241,183479,184432,185433,186409,187303,188133,188982,189927,191163,192107,193228,194315,195058,195681,196451,197143,198299,199493,200560,201585,202844,204070,205217,206111,207373,208321,209507,210586,211870,213142,213698,214399,215511,216488,217627,218656,219398,220364,221068,221814,222754,223659,224554,225361,226198,227063,227994,228525,229430,230197,230911,231948,233101,234299,235425,236335,237320,237871,238559,239212,240287,240924,241484,242203,243225,243831,244692,245600,245991,246533,247310,247755,248769,249290,249893,250514,251454,252190,252882,253444,253952,254904,255514,256015,256775,257250,258189,258669,259329,259783,260547,261165,261735,262233,262899,263412,263952,264557,265543,265954,266437,267211,267684,268180,268909,270266,271386,272411,273537,274689,275982,277091,278142,279433,280640,281849,282988,284156,285398,286342,287424,288487,289629,290858,292036,293202,294448,295567,296561,297646,298586,299250,300150,301015,302243,303378,304296,305308,306393,307603,308742,309726,310884,312041,313048,314264,315379,316341,317565,318682,319882,321017,322221,322863,323624,324785,325930,327170,328287,329495,330867,331837,332905,333304,334400,335607,336498,337417,338584,339762,341010,341731,342603,343003,343675,345050,346242,347013,347923,348993,349427,350288,351255,352206,353096,353842,354753,355599,356499,357543,358584,359451,360120,360790,362116,363107,364400,365564,366654,367895,369070,370359,371578,372749,374081,375437,376653,377776,379058,380072,381139,381743,382947,384234,385430,386606,387619,388922,390024,390978,392139,393489,394692,395920,397034,398288,399252,400272,401284,402427,403451,404649,405880,407e3,408022,409175,410222,411353,412335,413484,414697,415798,417024,417786,418986,420132,421212,422281,423215,424397,425443,426622,427438,428594,429598,430678,431603,432246,433380,434421,435396,436597,437590,438645,439790,440984,442310,443655,444833,445898,447087,448320,449498,450748,451840,452971,454074,455281,456186,457128,458118,459227,460403,461426,462722,463776,465016,466109,467317,468499,469941,471289,472619,473891,475104,476083,477072,478255,479537,480707,481901,483120,484317,485571,486599,487909,488995,490403,491467,492526,493874,495202,496409,497482,498456,499732,501014,502121,503047,503932,505253,506548,507696,508552,509379,510394,511277,512133,513131,513710,514500,515641,516623,517538,518450,519470,520359,521343,522185,523072,524430,525482,526366,527558,528711,529657,530808,531665,532824,533549,534781,535825,536788,537752,538659,539931,541244,542358,543298,544378,545553,546737,547988,549135,550259,551392,552502,553582,554741,555780,557074,558398,559699,561053,562246,563207,564132,565294,566571,567726,568957,570038,571042,572280,573479,574666,575788,576561,577574,578752,579882,580988,582266,583519,584750,585752,586885,587890,588938,590046,591012,592226,593401,594456,595723,597073,598117,599249,600538,601026,601915,602677,603309,604116,604992,605880,606834,607438,607746,608758,609357,610697,611630,612958,613655,614470,615228,615880,616686,617794,618975,619791,620760,622041,622829,623757,624755,625719,626650,627843,628737,629957,630849,631820,632925,633909,634836,636041,637313,638301,639345,640480,641631,642940,644089,645125,646484,647670,648949,650216,651294,652641,653731,654822,655628,656520,657710,658870,660175,661243,662514,663892,665210,666575,667892,669029,669886,670722,672056,673159,674200,675242,676504,677705,679045,680243,681420,682524,683773,684842,686181,687234,688534,689478,690665,691942,692731,694035,695290,696603,697888,699014,700285,701175,702324,703483,704594,705706,706870,708190,708931,709863,710987,711688,712905,713819,714617,715720,716885,717747,718843,719968,721143,722462,723646,724907,725551,726857,728155,729478,730256,731469,732407,733432,734306,735214,736393,737660,738775,740050,740953,742109,743306,744126,745061,746422,747016,748427,749474,750337,751204,752145,753081,753956,754796,755633,756390,757045,757695,758463,759595,760360,761355,762466,763499,764108,764716,765172,765734,766280,766803,767259,767873,768494,768976,769465,769940,770463,770998,771537,772033,772499,773015,773558,774112,774666,775418,775929,776422,776934,777512,777980,778450,778908,779472,780227,781435,782718,784082,785085,786025,787299,788514,789395,790126,791105,792169,792928,793777,794990,795875,796684,797515,798634,799518,800805,802116,803125,804328,805188,806150,807055,808176,809476,810843,812241,813610,814858,816220,817570,818866,820265,821415,822439,823424,824658,825812,826867,828154,829071,830370,831561,832735,834076,835369,836872,838920,840968,843016,845009,846467,847884,849514,850557,851596,852635,853672,854401,854598,854623],sizes:[1429,910,1277,1215,1012,710,618,659,522,828,773,499,534,533,803,949,714,717,623,634,616,628,637,643,616,657,665,797,568,720,744,759,623,574,831,923,1324,1237,1444,321,1305,1398,1342,1207,1297,1247,1243,994,1092,1105,1054,1032,645,639,619,609,617,609,618,616,610,620,610,623,629,771,824,840,868,818,979,1042,1054,1049,1068,1079,1044,1070,1104,990,1049,995,1023,1e3,939,1875,1324,1299,1292,1295,1293,1289,1253,1125,1142,1554,811,358,745,1206,637,638,1063,633,561,535,660,874,727,667,1186,646,546,538,1395,989,863,1157,1066,911,836,910,617,585,667,889,614,598,554,623,653,863,701,788,758,735,877,793,684,795,1013,896,828,991,940,1325,1090,1116,675,1026,638,778,602,1093,902,873,868,929,1108,969,801,943,919,949,1385,1259,1257,1034,969,1147,1179,1206,1111,1207,1285,1062,988,972,1334,567,944,686,876,1100,826,1294,1203,1066,1206,888,1104,998,907,876,958,947,1131,1030,890,1112,1238,953,1001,976,894,830,849,945,1236,944,1121,1087,743,623,770,692,1156,1194,1067,1025,1259,1226,1147,894,1262,948,1186,1079,1284,1272,556,701,1112,977,1139,1029,742,966,704,746,940,905,895,807,837,865,931,531,905,767,714,1037,1153,1198,1126,910,985,551,688,653,1075,637,560,719,1022,606,861,908,391,542,777,445,1014,521,603,621,940,736,692,562,508,952,610,501,760,475,939,480,660,454,764,618,570,498,666,513,540,605,986,411,483,774,473,496,729,1357,1120,1025,1126,1152,1293,1109,1051,1291,1207,1209,1139,1168,1242,944,1082,1063,1142,1229,1178,1166,1246,1119,994,1085,940,664,900,865,1228,1135,918,1012,1085,1210,1139,984,1158,1157,1007,1216,1115,962,1224,1117,1200,1135,1204,642,761,1161,1145,1240,1117,1208,1372,970,1068,399,1096,1207,891,919,1167,1178,1248,721,872,400,672,1375,1192,771,910,1070,434,861,967,951,890,746,911,846,900,1044,1041,867,669,670,1326,991,1293,1164,1090,1241,1175,1289,1219,1171,1332,1356,1216,1123,1282,1014,1067,604,1204,1287,1196,1176,1013,1303,1102,954,1161,1350,1203,1228,1114,1254,964,1020,1012,1143,1024,1198,1231,1120,1022,1153,1047,1131,982,1149,1213,1101,1226,762,1200,1146,1080,1069,934,1182,1046,1179,816,1156,1004,1080,925,643,1134,1041,975,1201,993,1055,1145,1194,1326,1345,1178,1065,1189,1233,1178,1250,1092,1131,1103,1207,905,942,990,1109,1176,1023,1296,1054,1240,1093,1208,1182,1442,1348,1330,1272,1213,979,989,1183,1282,1170,1194,1219,1197,1254,1028,1310,1086,1408,1064,1059,1348,1328,1207,1073,974,1276,1282,1107,926,885,1321,1295,1148,856,827,1015,883,856,998,579,790,1141,982,915,912,1020,889,984,842,887,1358,1052,884,1192,1153,946,1151,857,1159,725,1232,1044,963,964,907,1272,1313,1114,940,1080,1175,1184,1251,1147,1124,1133,1110,1080,1159,1039,1294,1324,1301,1354,1193,961,925,1162,1277,1155,1231,1081,1004,1238,1199,1187,1122,773,1013,1178,1130,1106,1278,1253,1231,1002,1133,1005,1048,1108,966,1214,1175,1055,1267,1350,1044,1132,1289,488,889,762,632,807,876,888,954,604,308,1012,599,1340,933,1328,697,815,758,652,806,1108,1181,816,969,1281,788,928,998,964,931,1193,894,1220,892,971,1105,984,927,1205,1272,988,1044,1135,1151,1309,1149,1036,1359,1186,1279,1267,1078,1347,1090,1091,806,892,1190,1160,1305,1068,1271,1378,1318,1365,1317,1137,857,836,1334,1103,1041,1042,1262,1201,1340,1198,1177,1104,1249,1069,1339,1053,1300,944,1187,1277,789,1304,1255,1313,1285,1126,1271,890,1149,1159,1111,1112,1164,1320,741,932,1124,701,1217,914,798,1103,1165,862,1096,1125,1175,1319,1184,1261,644,1306,1298,1323,778,1213,938,1025,874,908,1179,1267,1115,1275,903,1156,1197,820,935,1361,594,1411,1047,863,867,941,936,875,840,837,757,655,650,768,1132,765,995,1111,1033,609,608,456,562,546,523,456,614,621,482,489,475,523,535,539,496,466,516,543,554,554,752,511,493,512,578,468,470,458,564,755,1208,1283,1364,1003,940,1274,1215,881,731,979,1064,759,849,1213,885,809,831,1119,884,1287,1311,1009,1203,860,962,905,1121,1300,1367,1398,1369,1248,1362,1350,1296,1399,1150,1024,985,1234,1154,1055,1287,917,1299,1191,1174,1341,1293,1503,2048,2048,2048,1993,1458,1417,1630,1043,1039,1039,1037,729,197,25,36],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_swiglpk.data")}Module["addRunDependency"]("datafile_swiglpk.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/swiglpk-4.65.1-py3.9.egg-info",start:0,end:6885,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/swiglpk.py",start:6885,end:73420,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/_swiglpk.so",start:73420,end:1763199,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/__init__.py",start:1763199,end:1763221,audio:0}],remote_package_size:858755,package_uuid:"f417791b-2941-449c-a4eb-60d6bfc0e751"})})();