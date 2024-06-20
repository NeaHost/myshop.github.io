'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "07b1d4ef8e004432189e42dbad708793",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a2d8e8365ff05a2b1e4d3c060337d1a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e923a3414bf083536d09503ea90a85b",
".git/logs/refs/heads/main": "2e9b88005bb19562c77dca1be4f42842",
".git/logs/refs/remotes/origin/main": "dd6e07231243807ce5044948606e10c1",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/01/37d8e0b0beaed71414aa813b0525730c4c3877": "34f350f7d559e3f158b742b487991dab",
".git/objects/02/f915674590206780e4ba818e2db40be692cffd": "df044fb30e15e3975a8c50b44c7bc2e9",
".git/objects/03/029f6df9325bc76d7fcf6054ddc4e73d9a18dd": "f0ec2e6170b411cc3b34b366476eed07",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/17ed9bd46a217ecde6db1b27e09333f7562815": "e42d60f12f793b263a4e3fa2dd87b571",
".git/objects/09/52d998d471b63b0bb8d453bb619cc81066894f": "7bf2b843e27468e820b1c114436e5cf0",
".git/objects/0a/50601bb63a06406b9d4b0c6eb98f7fb59f6093": "4b440af9206b4e8d813e196999930ca4",
".git/objects/0a/8d58adba6a7df768081804707a3e5a46eea1ca": "0ab65cee69f1b81f766c3286b9ea5bed",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/3ef092710952b5b058483d4b1199efb8827549": "24c63c2835914f6e74dde10d359fab7b",
".git/objects/12/4268b376761330d527b1a0536f52fd1172192a": "bf5449add6e86182fa9a760344e18e01",
".git/objects/12/532e2fe314c5a7910698e3acd7a94cf0222b2f": "a384c1b7dbd9af426805e83e7d438d38",
".git/objects/13/8ce84756f75ac2bc70db2749659524eb24a39f": "9bbe604ff4720bab85c2e6f8a13bbc0d",
".git/objects/17/6172efccbfeb5ad4480e8b15dbc101f5fc129d": "5ad2e28379fd911248a9270b2514a6d3",
".git/objects/18/d457a28db98521553f4c34187b008c86914f42": "d7bd4dfd33e816dda0024857a9b979b1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/fb0276f268f6206ae9ecb8ed636db46221ef4a": "f7d11925ebf2c67f1c3cf43814ce8335",
".git/objects/1a/d6207e9aa22f7a9b6a0fb99e8b688867f14cc5": "a57cebda24d8ded59ba4317734d0138f",
".git/objects/1d/e023bbe976aa8ce1bcccee88a0f7b09a2bbae5": "85182642bbf7ada42228e31f83d066d8",
".git/objects/1e/93ef3efb9c4a750d437072478e10d78319a202": "4e1359ecd40b88c02071cd6fe906d974",
".git/objects/1f/d62760ab2a974f974c32e5d26891a904dc7aa6": "31e8cc6b05a7240a891e3d26298d6c2a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/d15c827ee306f6c978ca6eff856d32c22ae135": "9c5cd178d4e4e2080f93b28a1f79d502",
".git/objects/20/fe032461e2e578858c10bfb7be431436d95cd5": "ae05986ab038bdc97fc1acc6c9d117fb",
".git/objects/23/27f850528681e945d675dc6905163dbe09eaeb": "b6955a95848e51c0a9cc516f70d49670",
".git/objects/23/3a3139fa587c016bff24d28d90245b5d09e68c": "307cf1ae9cb1ef474dd8edc58d786098",
".git/objects/23/8bd822f73f8edef8bcd0f8117a63418b243da4": "d9757b515b2dbf55a4188f863d3aa6d9",
".git/objects/24/176a9ac476621defc7599069f01ff731829821": "1b43957c10cc5ff33d8a369a20a5eb77",
".git/objects/26/b6fa12b4f976a59a7a2ea5d982480fcce2cff2": "e8438c75797b29cc17b72d81ffccafed",
".git/objects/27/bee035005072733bf27ebeceb43b5fca6942e9": "d57bca1d16b3bce6715bc382343876ac",
".git/objects/2a/0d333ed6080c5176b17663ce56e1102652a303": "5ff8303e58ac64eeff9281839c8219e3",
".git/objects/2b/c7c361b1a1802e024732b57dd273512c004985": "4deb5d9e4eca5319aa8671bdf4ca4e1a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/e96608debf24781162fc8d905004c2baf3e080": "4dbb681aec2c5e338495fb9a6f7dfe18",
".git/objects/33/ec5e27bc31495afe9645e6a3745fd0e733da0e": "df57fe835617e635601289923a1378ec",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/c7c6bae20ac648305f9df0800dc858e60f4bc9": "cdec70da6763117dfdd6ce5d60b0cd63",
".git/objects/35/a38b3256dfbca762fa35927587da1b63f844c6": "69bdcfd41200956160461d9553ffe75e",
".git/objects/36/81a29c7797ad483f1ce29163c4ab55f9776f51": "43e3ff32ae29b517d61ff5ebac47fcb8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/4dfface3f338c88cfa89658139e5c3b1c9cd32": "2046957721ee218e507009f8a8af9f26",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/ad211e8b70710cbe5429c56db08321285f9388": "0f6b73876287bc6131af64b59798ea78",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/49/6f2aa1c420da1536af24f5e949efb540a8b736": "a1e141ca5129466f5d2a350539e30450",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/eda100670467db876d77f10d3e8f123cd50aaa": "f38a24ca6431a78c2a62ca9dd585158b",
".git/objects/4b/7790c94987b4d8fa072bba298493533ab511b6": "9acfdad344e040ce6f9b77ed460c8cc6",
".git/objects/4c/523faa9c913de46015b487d5f88ae526957a23": "c5d54f7ba2e03e17585b3b93298c9a24",
".git/objects/4d/469b6d57983ca39c1077fb9a4f7d1e3de40db2": "22eb799f9ef7366634777d14156d7ef2",
".git/objects/4e/92fba1caf4fe01d20e86d140321def479f3f70": "94e769686be86dec8954ef5e120cb9a5",
".git/objects/4e/98b7e737be526755044e2581baba58bbed3a2f": "23cecfb5bee94a073a876a4311c9cdf0",
".git/objects/50/ec2dbc3095b0a230a1aa8da5efac92347ff2f8": "3c7afd3ccf1a6e0c0f7c70837a4f4b3a",
".git/objects/51/91938671230c8dbf1486c19557e276e3ead3bc": "0491023624bad88cfff8bc41f191690e",
".git/objects/52/114447d1f97272016af1c251a44d5fd4fecc67": "c2fbf22a75c566255db465162380043a",
".git/objects/54/a2cfb061ec7a97d8dc7067cabc77aca6c61cb4": "15e179eb49723e08a28a101fe6b49407",
".git/objects/56/7763fd812416766b16c604d6579e49cbf1b758": "c586d08db45915f1a65003446c9c5244",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/f88d94e954367271f8daf5d03c8e830154e2cf": "8505f3b171e79047f7d9d5abeaf56de8",
".git/objects/5d/9827bd9553aca341c73098641258e3ecd61eed": "85ad041d8055daaf41200e6f64ff3659",
".git/objects/60/3a79163b02a711afe70bef6e1e8323f55806da": "ba9b2587d0af59581a4824656282fc61",
".git/objects/61/c8592aea3c6e2db9cbf960832573feff57c1d9": "635bb39b4a880c5a6eb2b62a741cc606",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/829822552a9c0fab9ad94777e18c8fff4add97": "7460f5b4c334fc25038c2bd33850981e",
".git/objects/64/4337d1eea9be4e5e3eb9db7940162e7b913ebe": "a3751a653241e62431a39e39f85c2c48",
".git/objects/64/6f4211ebf5a816339d27a0232d12977ad60c32": "440ff840e0784f3371af6a081c97ba44",
".git/objects/64/c4ac58a91be415cdface750689dd3d00cca6b6": "cbe6f5cf7aa4360006a5708bd6714ba6",
".git/objects/67/350ea24c9e84712cbfc6967163db17b952ea2a": "c2527b191f883eeca0986471fbec340c",
".git/objects/68/74a94721d690d7c8088727b2a8a2643b52ae04": "4b55387056d195d29a190f6e1bcbf20b",
".git/objects/6b/9eb6a5aafd148e329f302d0d68fc16ccfe1676": "df8e2192e6e879ee8746145ab545685c",
".git/objects/6c/128edd3323696394e06ebb8647ce200a080d29": "36e252ae142b6338ebc9edc542930a35",
".git/objects/6e/9f6d18bab8f07b2fea863758493a1615178653": "f1317536e83ed45918ab68faaa88317a",
".git/objects/6f/999331a0d33582972ce0d69fac932f663c7585": "3ffba7bef714d1f68b5502920534b030",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/f23a648094a230481f88e847fcbdcd83a0fb14": "aace0df6d2e30146f136e75090029411",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7a/beb4055fcb91ce412f07baeb6edc0ad3ac6033": "998505fcd8e46dcec3ca31df1f1a97ee",
".git/objects/7d/d5b74ee3087add630704d28f2b2eb5a9c055e1": "d073e5c0336623628980eef2495c5473",
".git/objects/7d/e5fe63453a29deb1002fd5ffb5a3c74870748a": "dcf0e4a7e55d7d692ab13b636bd71a94",
".git/objects/7e/1399919b17c6528a81fe36e0e02e23cc494c23": "245d1a9606e7bf13361b537045e894cb",
".git/objects/80/2cfc779c8fa22baa4355ca5ddc5d0c319bef4f": "f10fa36d40e22c7929e76de37b11604d",
".git/objects/81/75c41f759242155792ddf3c653d06d60cdccc9": "0c4d88af4653885f50477a8c032e4ea1",
".git/objects/84/608400f3756ca4fb3f850977db75b22eefdbef": "85e5533fab141b9c0303245a96a666e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/cb9da138959e8c27a284bc20c75eec8068c2c8": "c8e6cb4d57d8e85e859f41a1294e9639",
".git/objects/90/e45167371ac8baf682ada32c77445e8ab81dc1": "ab7f9e291fa501a6717ad54f5bac967f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/ea715dce865adba2e267187a2c80b37bbd59e9": "f1bdfc4d47c192d58f7897e25f6f08aa",
".git/objects/97/0592365ad1b1893cdd6682a0cd645f8756b6e0": "693898f651500bf9f78c7c12151ff6f6",
".git/objects/97/aeea8261d2b9ae12a58e66258db67d9472906d": "ddc819a76b29de4a7cd5424ce2b02de2",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/99/6146d8880e784ac1668509768a9b24e1c0b0b7": "27cb92cd43e0d285442491b93c044179",
".git/objects/9a/0deca6aebe59634567c9714ff5a31644bc1996": "df8926add4b11b244d79d8d8b4084d66",
".git/objects/9a/258365fcd90c9ca0538f89abe531ca8f3c8e6d": "1ddd06b716af2253965379dfabeacff0",
".git/objects/9b/1acf41a1b5e2727c66ca52aabdbecff0e3dfea": "43a2a3f7ce6fc289ef25d086b75dc9fa",
".git/objects/9b/be62b4b4281bc6b7dd0d26fd4eb117e7e201f5": "c47ea44c568eadd05c76b486e8698a4f",
".git/objects/a0/0fa985053d1068817adc1915b14742b5c39740": "2c3dccdc86a0123fb0f5d4db82859c99",
".git/objects/a2/a8a300bfb94abb5c8db5a1e2a3dadbd80e19cb": "f8f8b26fc6b0e6137edcfd3631a76ba7",
".git/objects/a2/d755f84e318f2ab51546506ec183df96d5fcf8": "f709bc4d0f1616ad7e81030e44348360",
".git/objects/a4/247ab05d25d31b1d061d93d0170e4985de905a": "96ab97451efe19019f5a67111b0772ce",
".git/objects/a7/99a8eed2a1c516df3bc2fcc5f3ca998d90b309": "58b8a23eb8c65d8fdad436797f944770",
".git/objects/ac/32d5052e21d98aac2225ef310e2797b2deafa2": "74e59e38b7b1006e4f520afd1500378c",
".git/objects/ac/3c7fbf3c075cd871576b7fd0cc149a00c3479d": "bae41372c2424b89b90acf2f36e36878",
".git/objects/ad/2b2207ce75c4ded06b19aaf048290ab3824178": "afceec1430244623f7e592540c758496",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b2/b54f6e634b354cfdb05edd0bfef4e4f8273b44": "e0299bff132e346989db39db0c88f44d",
".git/objects/b3/7998073432915601510e6779b360fbe6ff2c5e": "240cce64cd43378d450a8088b9130a98",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/9dffa925f26b7da4285fc675c91c0b04cd23cc": "e5666963a4bf1a481655549b0ccdcc09",
".git/objects/b6/a40bc1642739b3988ae8fc1a5e4d14a492ff3f": "eb6aa882f65a0a141582967dc89854f8",
".git/objects/b7/08d48eae84953223fc0f1dbb66d9e0c161326d": "6327c4a55932ba4d407e18b27ae10906",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a176711fd6f5feca786abc395821d4fad0d33f": "db4ce9c3bc52766e25c5cdbd4ddde107",
".git/objects/bf/5d36000d0b3f7047707b6e437d7fb072b3c159": "fb4d19aca7f5db9c05a97745979541b8",
".git/objects/bf/db6a11fff367cb6e43ccd1b895a883f7e30a1b": "10b548e1f398c340b31f52e244d57298",
".git/objects/c1/e0cb757e4f779810d8780f1015b2a84707a3d5": "c37c5b318910291c7d7c2b0ad363ce80",
".git/objects/c4/dfba526ca6161c954b377643d3128d0a1fa5b2": "0100b8b47e470ed966500def0a89dc0c",
".git/objects/c5/148c4ec3d176f6d9e88fbc206df33094d1cb7d": "75731bfb14fe851a41346f73278f31d1",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/4900214b5a90177f8d2e98c3d0966c6b402ebb": "846630215b148d7fd31109cce7cbc07d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/a0514872e52e9ac6d1973df9d4cef5a10475bc": "d5e3c295501bb466e7b13a10194815c2",
".git/objects/ce/4a00d600bbf52afbb007895a5ad99cba06ae04": "23a1fed163e47fe537454e2929572357",
".git/objects/d0/cc20b1ddb02f0bbdf9454e2a71141103d07c36": "d28b3a932ef76153289c5078fb61c31e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/ffa48633142555be54eaf8fce61e82cad8bf4e": "c2cdbdc2a2c6f0bafa9f51082ab4dabc",
".git/objects/d3/7d7bf52383275eb6ef8fd1ae872b2da1dadb28": "bc78c3480cf19508aac04992bc0f535c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/c9a40b5d6b20b5c8e23158a21caa678a3b86dd": "669487e52827cf7a8bb5976a30421beb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/acfa064316aa9044d0613eda5969fda12a3a6f": "29ee0813d451df7c123c21a659d8e916",
".git/objects/d8/ff5ffde672b01607334faedf7c31246358a8b8": "44c05c8825e5a66be13d371c77360e98",
".git/objects/da/c2572d91932a37b99572899102fee0d89a1e89": "5fb06e0b68f3e8b6b4e759973c15c25d",
".git/objects/db/360a515d785c42275599b1cbbded91320373af": "e76d314b3a27eedd758bacdb939ba3d4",
".git/objects/db/d48f3f05af05b62c4023eb72e30149400b2807": "613743f150c0937dd6f344a644e74b48",
".git/objects/dc/e26193c061a85242b613ffb98ca39cda56ebc0": "0551fafb5ff882ac58bde1a5892cb1d0",
".git/objects/dd/46369f627e1407fefce916c8bbe4c03236c680": "a064bd8c6d197b0c1d09fee7cb20d7b2",
".git/objects/df/e9a1ad174e472e0d38880edca78a3333207df8": "af13b883c085fb9780a7fa234be95732",
".git/objects/e3/d03ad1d8d4bde35f709882c175874a097b9a66": "c29b5ff28a6b963e280e874ac6fde6d4",
".git/objects/e4/158b1711a4d943de3d7e112c58c509b327e400": "ba94fcc0daa9b13063c460427a5ba42b",
".git/objects/e4/e38169a24cd37715b8471ca8160b370104b324": "dfb3c76301cf726057091a80640f584c",
".git/objects/e5/194e82f91cf0a783ddeaafa6f548dc28c45cb5": "4ea1975b966a1528d6dc4fc5a3e7ec2f",
".git/objects/e5/7a58ab74d4429ba90ce5f5bac8a7b4c9321ce4": "618b8c299e27950c1492bd895d3cb4b8",
".git/objects/e9/ede66b68cdc4f88c8fcb63b917dbcc8f837e4d": "34b0959a35444dcb7883d560015e2bfc",
".git/objects/ea/283711cbdc728344e33f99a2c08cb2e1d3197e": "852a2f3b98210789cf1f5118bae4d5d5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f9d2e22a2bf26f5f3c10dc95dc7990eed69df0": "4c66301286b118abfe2fd5024a3b667f",
".git/objects/ee/1d7034fd3ff2df5ba2e896bf0cf47051a13a6b": "62afce6890acadad97dba88a3a55e90e",
".git/objects/ef/f8b2224d4dd3545c23ffd0641bed8eb17adb59": "0a79b3e623ac67325861a2ae5ad9a26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/564921c9dab76ffab2a15b25c6fae58b21d207": "cdd818069c4ad66f15c16aa3ee0e8134",
".git/objects/f5/03495445940a2c885fdde34a7dc14d08da822d": "a73895f9630be5eb6f8eb75b2ea450ec",
".git/objects/f5/a70ea27e0605d29dade2573c1f99bc92b82ca2": "01efa31a9551b377a0c31b039285caae",
".git/objects/f5/cc08a0267c7c4905c24a9895dd5181f4ceaca0": "5edc65ead5f3fff22a394085013a8f66",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f7/2b3d120535087e05b320faf2abc1ddec7b8c4f": "880bc8a918847ff0d481e19daf5f41ca",
".git/objects/fb/35110a69601e5fcb5a33916405909b529f52de": "e5eb0e91e7f45141d36e5c424764b160",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fe/44db21f7f5350c13bae155aa58806de2a3598f": "6534ee47eb87cb3c4ee9e5e2874735c3",
".git/refs/heads/main": "0dbbaf12f9aeed5ed1aeddd289695037",
".git/refs/remotes/origin/main": "0dbbaf12f9aeed5ed1aeddd289695037",
"assets/AssetManifest.bin": "4ff250aaab30fb97152f5aec67878e79",
"assets/AssetManifest.bin.json": "27d61c02e8f14a93f1ca987f1b5a5e47",
"assets/AssetManifest.json": "fa035f87bd792df905a5194d0fe7ff31",
"assets/assets/fonts/Urbanist-Bold.ttf": "fc06bc208de15311e0038ccd07f8ca5c",
"assets/assets/fonts/Urbanist-Medium.ttf": "d9e95761ab0191f3f5624332fcdad4ae",
"assets/assets/fonts/Urbanist-Regular.ttf": "b1b19bff5654cd5bb99b5e71d3f7aa30",
"assets/assets/icons/back@2x.png": "507c510ee2f0a9ec93c8ddd20c2025f6",
"assets/assets/icons/bag.png": "cb5a9a3d547d719102f2e3c61b0a096f",
"assets/assets/icons/bold/heart@2x.png": "b91c311446e530793eb9c773eec3e5c7",
"assets/assets/icons/cash.png": "616aae045835ede4579b2e7b1eec2dea",
"assets/assets/icons/category_chair@2x.png": "fc8ee50930dd707e65ba0bd45b92bf42",
"assets/assets/icons/category_cupboard@2x.png": "61aaffd1259216660d8ab30ee0b9f207",
"assets/assets/icons/category_kitchen@2x.png": "78e575b3c1c87a2d240f425520bbaa5e",
"assets/assets/icons/category_lamp@2x.png": "a565c7711cbe779159a7b9a6861674e9",
"assets/assets/icons/category_others@2x.png": "7d55c6555ba1e988e6a34c1de749ea67",
"assets/assets/icons/category_sofa@2x.png": "4125d4b6de4d355163c0f70bf1551936",
"assets/assets/icons/category_table@2x.png": "f7a986ff2fcd64456415e1ea3dc0d1f1",
"assets/assets/icons/category_vase@2x.png": "f8cda446812f9c0462247f2ceb6cae06",
"assets/assets/icons/collected@2x.png": "9edf412bd1f7dd7ec69c1e504de96042",
"assets/assets/icons/contactus.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/icons/copy.png": "6ef8e78da145f244729bf828722d85e5",
"assets/assets/icons/credit.png": "3cf6c0c5d1e3601c4827d1d526a39c0c",
"assets/assets/icons/detail/bag@2x.png": "0cdfa6333be4c45d71e67eccc5a9ce81",
"assets/assets/icons/detail/minus@2x.png": "e575071209c67b339c3e821b5ab1fb1b",
"assets/assets/icons/detail/plus@2x.png": "907c3d9241272995a84bb7c84be4786a",
"assets/assets/icons/dress.png": "1dc3e35bc966b390757a8691a2b47424",
"assets/assets/icons/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/ic_mail.svg": "66a0ccd8a47aeb3975dd642164f3626c",
"assets/assets/icons/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/icons/ic_success.svg": "73c3c09f87877a4540d30ee544c9bf02",
"assets/assets/icons/ic_telegram.svg": "c5d6e68fbd8e2997e5e4ee3275fb5713",
"assets/assets/icons/img_forget_pwd.png": "9a0b8ef15e1ee1804ec020b86e0e99ec",
"assets/assets/icons/light/filter@2x.png": "c1bee2fe4b829b88982669fda6001d84",
"assets/assets/icons/light/heart@2x.png": "15be54d4188d2270c1cc3b034b926fc8",
"assets/assets/icons/light/search@2x.png": "18970f83213469871a7ea7398d0d7543",
"assets/assets/icons/map.png": "7c751d5f38b61ea20a9aaf63372a89f2",
"assets/assets/icons/notification.png": "db624c661eb870af2e26f64f7e306e1e",
"assets/assets/icons/not_collected@2x.png": "1d9b4647c53979f0adc4ae4055115acd",
"assets/assets/icons/pin.png": "44f0b6fa1c0b9aac94114e7235e87744",
"assets/assets/icons/products/book_case@2x.png": "fb770d64a25d0f32d55ea4bde27de880",
"assets/assets/icons/products/class_package@2x.png": "4263431c941e0ec694bc05713fdc4e8a",
"assets/assets/icons/products/detail_sofa.png": "95df08eec99f285e86d235b5acabea41",
"assets/assets/icons/products/foam_padded_chair@2x.png": "e8dd207ecab03abc939402dc2fcc2a00",
"assets/assets/icons/products/lamp.png": "10fff2d86f145e7a2237c7897b3116fa",
"assets/assets/icons/products/plastic_chair@2x.png": "c11f15b543148d3e335f02ee21b5e547",
"assets/assets/icons/products/shiny_chair.png": "b3ff008402edffc3b7f3ceb8f43b9284",
"assets/assets/icons/products/sofa.png": "abccc71805c7e0edbb544f77d0f4e3d1",
"assets/assets/icons/products/wooden_chairs.png": "5a2e186c61ea5c2595cc74c1d2f68b15",
"assets/assets/icons/profile/arrow_right@2x.png": "387f4d101fdef6f00d88699036ca5574",
"assets/assets/icons/profile/edit_square@2x.png": "4c521d90ff0ccbc53603f186efb8871e",
"assets/assets/icons/profile/info_square@2x.png": "3e17dc5759d23744f1c1c351f66ba8b6",
"assets/assets/icons/profile/location@2x.png": "2332a618990a7b16632063549e5ea00e",
"assets/assets/icons/profile/lock@2x.png": "e71b9e146869874ec8237e0f30a3d961",
"assets/assets/icons/profile/logo@2x.png": "1127d485d4b0f70a9092d86bfe1c5df7",
"assets/assets/icons/profile/logout@2x.png": "952ac2e9c5f6cfb371295982cae26014",
"assets/assets/icons/profile/more_circle@2x.png": "8ee16a85574c8fcb0a7573ef88a2b3b7",
"assets/assets/icons/profile/notification@2x.png": "98f03cd6392b93dda4cea506cb3cd423",
"assets/assets/icons/profile/order.png": "eaf633081e1024cbb4c27ed3ee36e11a",
"assets/assets/icons/profile/profile@2x.png": "772a239c1501738550c57227fba2f8b5",
"assets/assets/icons/profile/shield_done@2x.png": "3927f3e25ef2d8a80909a224d4a0b785",
"assets/assets/icons/profile/show@2x.png": "1ec7fef4de81260872db0c43cdf133b7",
"assets/assets/icons/profile/user@2x.png": "ce4912c246bc1a6cfdeb1c5dcc06067c",
"assets/assets/icons/profile/wallet@2x.png": "701d25aa047d2c2994ae75446670adf7",
"assets/assets/icons/save.png": "46e82aa1958896d9d521f2ec5007c5de",
"assets/assets/icons/search@2x.png": "ff461a56adc2cd4a9628094c844f21f3",
"assets/assets/icons/share.png": "21d4c99a5e1faacaad9da46f33fd63e2",
"assets/assets/icons/shirt.png": "2959c4e9bb46f5d1a05635d8ddf39c1e",
"assets/assets/icons/shoes.png": "143acad31cf85a14ef740fe1fa53f02d",
"assets/assets/icons/start@2x.png": "c20093d0232f6add780b234f43365a56",
"assets/assets/icons/tabbar/bold/Bag@2x.png": "d0940c5578c843f50fb9bba20d5158c0",
"assets/assets/icons/tabbar/bold/Buy@2x.png": "c4d0006d15d83f88cfd3136ce885ae87",
"assets/assets/icons/tabbar/bold/Home@2x.png": "a7a084c87e6b8d570513ebce0355dbd8",
"assets/assets/icons/tabbar/bold/Profile@2x.png": "be229562919b0b856fd8ec18f1080d81",
"assets/assets/icons/tabbar/bold/Wallet@2x.png": "183a1eb3ae0e4fbbc9a06255a7db85bd",
"assets/assets/icons/tabbar/light/Bag@2x.png": "2abab7338c8a156be34cd8c499321465",
"assets/assets/icons/tabbar/light/Buy@2x.png": "b680aed98cbceaa0011fb8dc437b4e37",
"assets/assets/icons/tabbar/light/Home@2x.png": "fb96fadc338e6ef9f96be2d51f39d306",
"assets/assets/icons/tabbar/light/more_circle@2x.png": "ab311056f733dd12700970ca29c97ff6",
"assets/assets/icons/tabbar/light/Profile@2x.png": "943987f08ec6f5b330ca397e3dbc832c",
"assets/assets/icons/tabbar/light/Wallet@2x.png": "0a77a4fc0a670f04310dbd2f414e70fb",
"assets/assets/icons/through.png": "828ad28022b91467d3da651252c14c51",
"assets/assets/images/accent.png": "ad8a510646b5fee7a9a44181faa133d6",
"assets/assets/images/appLogo.png": "d596ef3606e227d6611a67f51db7b3dc",
"assets/assets/images/logo2.jpg": "8e8d43c05c5a45ce6a0b6bac2806814e",
"assets/assets/images/splash.png": "f7124847620270e1e124fc6d377b8839",
"assets/FontManifest.json": "2e8dabd7d64b8e70b10cbc70737358db",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/bottombar/book.png": "eecc96faf24f42d15202b62d5ff9a90d",
"assets/images/bottombar/heart.png": "3cb4aeee2fa7ef2d9a4c8606e0b57a39",
"assets/images/bottombar/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"assets/images/bottombar/person.png": "966b229be67f0088053cd321fb489f82",
"assets/images/cart.png": "6f5aeed5aac654a511e1cacd057538e9",
"assets/images/empty.jpg": "3ea266799ac28909d4bbe79898e39485",
"assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/images/map.png": "c576d39759b6bff0b5901b7e2384b086",
"assets/images/out-of-stock.png": "4503a3b0e6e7b2e75485e9a655242174",
"assets/images/slide1.png": "f422e8e85f2baafb495b3554664023aa",
"assets/images/slide2.png": "791397f8fac6d4c0b127a8992a5135a5",
"assets/images/slide3.png": "7c982b3df38a24a4dfda619b411c9911",
"assets/images/splash_screen.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/images/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/images/warning.png": "f000de8cc7517ff86c048beafeab1187",
"assets/NOTICES": "f9fc7a83b5706763be496223a7ee58b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_boxicons/fonts/BoxIcons.ttf": "f5b4c7852b2cea0ec78fcbd63d6547ae",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4fde0255c572e889c7c7486d5675adb7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad95414a6c52bf1f1f9d7db9f6c34ba7",
"/": "ad95414a6c52bf1f1f9d7db9f6c34ba7",
"main.dart.js": "fa27b9adb661e55b3f64388982133feb",
"manifest.json": "0deff3b79f0f909217dfb82735ff07f1",
"version.json": "4b69227e202883f9ea1564cf7f632b19"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
