/*
https://lzkj-isv.isvjcloud.com/lzclient/12345/cjwx/common/entry.html?activityId=xxxx
0 0 29 2 * https://raw.githubusercontent.com/Joker0408-1/Script/main/jd_shoplottery.js
*/
const $ = new Env('超级无线店铺抽奖');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', message = '';
let activityIdList = [
"d566275ac22141099a8c7162e8f555da",
"7b92c6be3a5442e7a4ab97d5d2b2b949",
"e865325368a74d36bd5edb339f11b214",
"fc44d05f5972483ebfc12a6dfc4578b8",
"cf8ec643535e47ff89144dc9d1b28529",
"f126db123be64781af6b692290eec806",
"bf7e4455654d42b99f0c29e8acf0600f",
"1558c62ef7624c8e83272da21a29c82a",
"31a20922150944419223261bd5cb3c30",
"499cd36dded149fc947e6088cddf3df6",
"c3ca55792c544c9fa46434587397476f",
"76ae298c78d24d54a23184ebdae93f68",
"db1fc7ca7399412a9721e0ce68c70332",
"0c9072ddc8a04f9fab7befbadd6d73b9",
"84b71a4bb3804db9b30d5493c6ae4f58",
"77122ce9368645efb27f7d2f4b479489",
"e82d3b7fdff646a0b946d796e50cb06d",
"4e048641eb814a6cbbadc3d8cf4dac63",
"81136576937d440e975325202b37cd61",
"b3fdb66157a74f6da7be37da8b0517ea",
"6d7dba86b49f455da5253fa99b37d850",
"f6eee109ad454ff79a2f72f5a2d501b7",
"daf723cfc8cf4287aa0c87982626073d",
"ec91ff9007bb47da9687a712633ae3e9",
"a2e33ba6b3f34d09b26a32c1b765c0c7",
"7ab3292911a64b4d8ac772f5fcbb6250",
"bc70c165c82b4c10b3e8af5ce09ac118",
"e937ec3400fd45bba132b443aed33b9c",
"aeca0c5578e54e52989da3e522073db2",
"2878b791343640a0b41d6986595b8ea8",
"61b803d03a574987a5e199dc49ed61a5",
"b70855dc33204afaa4c1a72e9af5a0af",
"ea94905698be4efaaf067c46247761c1",
"b796f57c253247478453d8730bbe6fdd",
"aed69b90ab654459aab2852953f85344",
"8b60632ee45a4516a95d813bd45f77e9",
"132df00029e64a349556b3561064c607",
"a5e00eb17abc4c8fb24e9237d493db38",
"eca4fb4f002c492286a0e3b3b40344db",
"51a0d6b7f51f490cae0f37c03c8ae18a",
"7a3dba5044e24069952cd03f4310a9da",
"89b47fb88a3c4b07a98622c79a9bedd4",
"a4970aca93be4a5a9a1babc3af0e2a1f",
"99d99ef13bd845e0a2735b4207c56627",
"3817e56b55544cfd8b463a97ba98d730",
"c10252d4bfdb443fb68b91c73b7b1aed",
"fa9f5cf3db4240279d7a39f6546531a9",
"7bcf6ac30bfb4031b7d6f88ca8789287",
"e8d2a976fb634b43a6c0bed892ce6dbf",
"8af7b3a01ba94187876a52063c0960bc",
"4812594d4e8547d5a09a501918c886ad",
"f6bf2d49f6714442969f80e6791c9641",
"2ac620d8c5b14104a763ea98c78e892d",
"608568a4ea894467ad9577d124709496",
"baa3ec9f467f4f1db5df9f758097a4fb",
"41678bbb1024419c9e8d03efc907753f",
"941394db1a204fe0a3fe815734c7d7f1",
"8456416558b346b1a201cce9aee4f162",
"50c393cb4a204394be4587de0acb1cc4",
"294af36c6bf0492bb543e67e0988671e",
"e03548e9007d4e4fbe86da42607e3e12",
"5f12a2a7e2bc46b9be657d528dbe40f2",
"d81e5893b95f4882ad60fbcdebcfd97a",
"4142e476ab94424ba29ae027579b853d",
"762f6cff36094701b96876265b91ab54",
"9ec33d3851fd44379ca0df55a4e37397",
"17695078d75a432482e3ab85c7f3eb42",
"ad5bd9846c004bb78c9062d148bc8c3f",
"5ac00dbf3d644937bc02e9e9b6fc963d",
"c824078c20914334acb5fba7b0491e19",
"267eebd378a44a2681b4bf23ce7a38f9",
"7e693c865945457caa4b7f27782b719b",
"c2a83b75495a40729bfc45b6faf0750d",
"2a87a97d0b1140a8aec1f18b58e5140a",
"e22b03bbdd0b4d85b2eb49d967c66a32",
"5915ce2b353b450390a37296c6513949",
"a9962cf76aec4946988c5da898dad263",
"1af768015c2a4aae93ba9456ff08558e",
"cd599a98e00e4638a1d0da147a943917",
"6998dc40c7114b079f024793f42230c0",
"555c20f2976d4f7cb24b626424a838d5",
"a52683b312824515887afe76d6f4319f",
"325f63356bbb40e69c5f68430a988704",
"8efecb2ffd0e4fe1882467f4c9abb5e8",
"2781147d1aea4b0ca5583e44ee125a5f",
"6a693379b1db408fb2e2d04134967867",
"488e66164b8948aeaa98982f25bc5c8e",
"a4f522384ba441e1bfc50cf21ea8b84e",
"9a5632992113413bba0a348ec69a0d95",
"e281a750d95141feb44ec08233ca30bf",
"76c7e5a4a8044da9acb64ba30d10ef82",
"41bcccdaa54a47008123d7e98dd94c0b",
"dba43e89320a4d71b3916352797f8d39",
"abd274b5c22a4f548be1089f09f1f940",
"d7003d655f3243ecb8b274ebf19d08c0",
"c08472e8fb4b42c6a2cb7b179b07626f",
"a0a164849fe54dac83b8724ce0cb862e",
"8f91dce6016647a9a42489352048252d",
"759b06f549fc436c8b92236674ed32b6",
"fa4e04f170f54f7294611287366d91ba",
"913e90bce814421ca71950b7d4ff3727",
"03d469e8b7344a96a8f8dc6cf9a57eb7",
"3d89a03dd9b4447e9d17233dfe012444",
"04cf92fef8af450891c990692668dde5",
"e27e59fde4d744c6913415599bb700c1",
"b3f99b3125b245f682a5923584cb41e5",
"70d8ef945c8844e69207d51b5745bdb6",
"cdcf89898b3b4fe09073cb1a40278c59",
"8d75b05401fd40f18ed1441cc92d08b8",
"979b50989c0643a5a05ca5592264cb64",
"1adceeaeeee844df8e57dc476f8625df",
"0dd9972e508f4d2a8cdcc84bf1f7f59a",
"39681c946167490f8a90c48ea5573755",
"d88fd513d84a4fe3bf844b899bbbb4ab",
"3d41c6d1cfbc4edeb8363b9a372d8415",
"c3c2e1da3bee4c959d3fe50a2381842b",
"6130b3293e264c9fa2ea9d83321967f3",
"dd3510b8ee7f4e9abc1a6fe0a6c676a2",
"2c300352b2534d8b8cfa423c7a7d22c3",
"76329c3300cb4ebb9cece2b9b55edb3c",
"71d334a3d41c4ae59a063a04c4ca86f5",
"77dba934f1c545ef9fd7a0ee3a4ce750",
"f6ccac2201b445fda0b6791da44d83f8",
"057aa3b6a5b546e2a20ef8486a558022",
"09b2bc33dbea4368ad5375a77ab39de6",
"6551120709d148ce9ac7b42e1dab233d",
"7b2b461328b1489d90e47701224d4292",
"36740de8b4f34098a9feffb78c414651",
"b7c2294a4d724b53b96791b61d5ae7b2",
"44824269f77844debb82895c75b7e47f",
"3404874c928a4f01bcd5a0061a24c523",
"36d04e4017544b71a61639ce7246bf2b",
"974e15db61884b7c8e2db76e5928c53e",
"acf6630ae4da417cb4a4a8996f69ccbd",
"1da0e61874184dc5a0f70ff7b377ad0d",
"2fa453d5d30f456b90b6db9c099bca9e",
"6658403dd2d24301aa86fd2231699412",
"e122ff411739425e9b9a96aa638f98ba",
"6d9f5145180342399ed81c8cb8fc936b",
"bfe1f7a9d58a465396accf6222fc12ab",
"d17252c7b73d4da79fbc8faaf620ca05",
"7403f80bd5bb4d5e9df10269584a6cb6",
"f59b6cfc2f374c49b7ae79ba734a3037",
"11b6f3566bf14ca6b63f6785a9bb63c8",
"a73be20d088e467bbdadacb95bca778d",
"c0786a92c5f6457ab33fca9681283279",
"72be9b588c75429e9f2f6590ec13276e",
"fa3a130436734d63bb5b1209246858e3",
"7b867a652e234ec4be14f31ceea3e3b2",
"a27a11eb521d46ceaf590744f53a1b5b",
"9a4ccb0defe3427a88fbfaecedcbe02f",
"0439b84e375e4f29a2911455f00b83b7",
"b588fde24eea4d32898e5f2308c9eb1e",
"2f1e62c1044a4bfeab720f6df898f92f",
"753025626a0542c493ac2ce37f874ca4",
"64615c41b5eb4edcba69569eb93469ed",
"0bb57570fe4049c5986a4354da221fc6",
"f274aa079e1a4ee49752e8e02853b676",
"0d5365f177534b079935f1d643705e89",
"b4f7529af54b48819474aee27a5c5be0",
"c4392023a4c944fabda0829d41eeedc1",
"884f1b7b4cac4e019b7792cf76e4f530",
"308bf88be260436ba912a8a6c2b8426d",
"a84e9ce1d9c44e26a0224264fe5a7851",
"94fdedeb41774b8584b8dd452622a5f4",
"97f70285f9b44bb2963eca66296f0629",
"9f897360b33548c7bfe4330f201b1f33",
"8ca81af73329487cbbc41ba91de99583",
"1a721a109801429cbab2d42d929724b8",
"71d5bd9464b7483892e493971050080c",
"d5310299ca2d4b8d971c66f745695d19",
"8ac1700b0f724c77a01d8084bd2dd7c1",
"7e7a95d2a5194195ac03f8256af5cd22",
"6659f4da492d4c86bb1288888613cc68",
"28a9d609e8c4414682afea439d8621d3",
"ddc9690e700141ad9d16298e418890a9",
"3fd272067caf4f66bbb39c3ae2fb5fa7",
"4323698a1ad64589a0a0d8e12e78b737",
"0cc2f12f43c84aefb711bbd01db7245c",
"f684a660e9ee4a948e6ef2e6ec8dca4d",
"2595942adc2c448eaa4086256e6212aa",
"ed32251c8c034688bc5d9394a64ca872",
"43c8ad911fe64ee5bb2e3f805ef9d758",
"76aab1b775dd408897d4cabe94fb76bc",
"f9a392a0644d46db97824ca36c386a6a",
"09674bdfb0f1475facef2e66cb33437b",
"437961dd16724ecfb990e50599a6430b",
"5c094ad2d42a4d609cb9bdb4fe6c1e89",
"5e583576aa0d4b7ea347101b1ad07860",
"795abb85a7804efa9c256ed869645dc4",
"3ba32080a8214a10a9c4df7a51879983",
"baf9e4d85e684b6987f3b73a654f5f02",
"f27121097ae84175b4d5b5d13b9b8b62",
"ea1367deef4b479fb0d4eaf1d7b73616",
"a71007fa8fbf43e4890965838c393c42",
"0f3ec0daac6d4d898b2e7a2367eedecf",
"42434c654e634161bb9d7e73136cb072",
"eec39052cd214742830213ea2b65c213",
"98ff8cc86bb4481e9e4929216c07ec34",
"17ce8d94082841d797165c023ddafa00",
"f4bdd7063042412b8516eb4f8796a441",
"b2aa3f5aa5cf4249b296d97e2b59521a",
"086fbe99e0be42a48b800df8e82d8293",
"087e11788e3f4e12b5a890a327b092b8",
"f2f1329d2f774047a4d186514202f8b0",
"70d3570ad33b4caea79d1e3c7155996b",
"662d19bee3f64e39b180444b1ceb7325",
"19c5888d59634a5fb4e12d1ed8833d1a",
"9ba1cd5b71544c4e9c7050413d41ba82",
"e645fa61dc6948ed9e24064d13e5e544",
"208f525bfb1646a599f30d31b0f6bfdb",
"8015220bed1a4472a90a1075978d7dc0",
"eef1ca37dc414df1b7ab4de8e1b18ef7",
"44fb0ba99cf24b52aab692d00e79609c",
"8f2e19a80ea6430dbaa25a5506c6b2a7",
"6ecba43b7729462782c8cd57b97b5390",
"7cf2a750de004fbab083fc215df6f641",
"5a720dc66d4b40a999f2755ee29cc13a",
"7d9d675dbae14fd681e770f7ecefec45",
"2a73e6b007974430886917ff23b53020",
"cb09cbc6abd247608578ccec0f5d8040",
"cce4526c75634c9a9bc75f79fd056b63",
"f7aa7d045969409aba43015280542536",
"d97d0a8d9ae749d88b23538126fa0a5f",
"0f2201aa5c334496b13a88326c54f451",
"e16ae36d1f514ea0b0a3b4474d5c3e7d",
"8ea995c0ef1d40ba8fe69d00901f1277",
"624214516dc24065a0c66e654045f9af",
"b1f300a86b344c429e55e78e06edfd85",
"d64483666d6a4911a1c51dffcd987b5f",
"e30dae383162490a9f6bb2dede997f29",
"291a450e867c4ab5bfa668f0fd497a76",
"433000e2b088467cbc9ff4d0752f15a2",
"f5e736c80a4f4a9e97d8fb5b445ab9b9",
"b826dcff258b4d4d9742d199fa2f83a6",
"bbd12ccd8597484c949b8b773f01fa9f",
"27ffd046c6dd4b49a713efd166da78c1",
"4fdfc7427afa480cac3ae29e7c2ad304",
"fc44e5ddc29746b1b5400bf6aea5d98f",
"a7578d97258f4c589093fdb9871d5367",
"137ded326505469989a7f0474411455b",
"c7a78555223c4d5a9323dde3b24d5d9e",
"980d275267d840808d64a6d1b2162ded",
"f730ea494a1d483880a089a44a658bb0",
"0b3d7cc7021b45d7b485d5f002697b2c",
"0f58e6da4e4c4c1885a60b3fe21e2a17",
"96cf76b341354de49ccfe165cf7e5b08",
"20352b26e4164b14b5690ed4ccff1c23",
"22f9d42b3fc148a8962872861e703a59",
"4c622aea68ac4ccbbf11f2648a3ca5a9",
"1cc00c1e409a4e5eac2b7c3d78132226",
"e293a6ce1297428a8bfeebb64f53ff6b",
"e411e2e280b74146a2d1bdf325ac83e1",
"e1e97e7d5a8c4164be41181fcd38265c",
"10dbfbdfe87341e4ae97e63e35f7d27f",
"8ec4f2c47ae9483da2f7980c796e5003",
"5b2b49ad8dcb4d3d94f8d4796f9d476a",
"65572370bb5241eab0b55953042ca9c4",
"ff227c84362a49e4822859afe82f4366",
"259e83a6499a4f4392b1a511fc3ef5b7",
"3c7b8f386f7148b0b68042d2ea49d464",
"0faa35e74f7d462f837918e02c8a120c",
"c4a737aa303d4d33b5a97b35d022a9fc",
"97e0b0ce55c24ad2aee648653f90d260",
"66febe21468a472aab7b794094004fc6",
"ec3a1df0181545dc90106dea11166c23",
"49cf54deb910499da497f5f12ea2df16",
"d60b8b00fb0e4458afdf0a5d6e7ef7e0",
"d15c43858f734648bfc4aacc660c379d",
"373d2e398c584bf4b931807503b15aa9",
"2a9625c1af8a43afbb0fc56eeeb94c63",
"d7273651c16944888cf5e0a10edc9cee",
"99d5a201aebc4a21919217eb49460b46",
"6e3d2b3fbf9749da8e668738896db82a",
"30fe7a9401e6484bb970cd0664a66cc1",
"d25db1aae801437686198566b11c0f8a",
"314e759a0ed245f1bb8fbcb8a1d6856a",
"5c3ab11548dc444d9600156be2e72bec",
"0188d1cad5d0453e9cd5bf375120bd68",
"96f0444bcdaa4444b15d5438fa684986",
"e9969e16777b457093285cdaa8458167",
"f7e50c1d7f554a23a330daa80e068946",
"47d431fcb92a4fcd881a3f7b3509d86f",
"7ba5acc77de142b3b627e7d551239c85",
"02fb3940715547da92dab76897c1e782",
"26bdda7e40174310953caf5f86f65dca",
"d9c1559ba75f484b97617add2bc31449",
"1cc5f89ccd3942a5b42da8e11392a340",
"e5ce1d6502c24661a1f67038afa9c183",
"2e3cf6c621564eebb65e08241a898b6e",
"e27f035ccf9d48a39edaaccdd02a81c4",
"2383067cb8ac4d77a83be52c694903b5",
"fe0257aa85f84735800cd68a5fb1ae17",
"bec309b0f1194652bc78fef9c2c05d46",
"fe3f6306e21a4b999118ad81d7f653ca",
"f159851913f84a4fa4f81fd6d761bce4",
"ee48f44e021e40549ef8245ede6961d0",
"9af3e6ed1d024522bd25237b1730f1e7",
"c62a8b772d354a13b9302e40367fde78",
"a727640768d64d46859469ca7698e901",
"4144cbf9458e4d508f02ee1028715a59",
"7e0acf2da0094e95902a479f833c27eb",
"c4bc1476a82e41c9bd54b7b7bc680797",
"afe9ce7b98874e9ba016933d41152720",
"607463a5db1b44a28fea50a90abc5675",
"51193c7e0c7d4ab19925fedd6808e3f4",
"463eb7b34bf34a1490ce3ab608772902",
"dacee8d1755241cabb53b96b2b538a20",
"0b5cb4ce509a4fa1a28abfb8349a1d1c",
"b2332bd9abf14c6c89c186ac861f1e0a",
"bd7243ee76a94d0cae3f2c5af7c32440",
"db3b8f08aa6a44df9a99c6886fd81a9e",
"e3fd97f8e5ac4cf1a09363b3f9751c8f",
"9870b70c5aed4c5aae61eb0b535e6baa",
"9b791b6167bf46889e106d5f857ab1ef",
"b40d05d2bfaf44c0a9c03a128c1f7fb1",
"efb3f047a6b041fab7d390cd2304d31f",
"20ca9acdadc9446e8f4e3a54beca77d7",
"885e509e79bd412cacf3645b3a158777",
"42401be2154748e8b33e6578c91be890",
"c042adca346347b1be73de53635e91c8",
"dd3141ebd61d49f488ab975dc0c6a007",
"5bce5331fd4248aca1c33f4713d200ae",
"cf94897c32c64178808985731d6debfc",
"0488db8df74942d099ad15eebdb49fde",
"acebf238b5f848d28f2f64ef920512d3",
"2a800b3ea87648c6ba51c5f3d6818a2f",
"c4078d655c4f4d758b450b5dd601c819",
"7bf053cd143d4d99b5c4cf79441f8366",
"0a36520cba324b40b70efb29c7dbc4d8",
"01ade0bea37e4ae2b97478bf5ecc5360",
"ff2e4edccf7c44bdbf91d72f2d19cbb8",
"0a3f32830bf343938d144f4fe184e710",
"57a12b2db3e6423ca85ebc5dbdc69c11",
"67bf726288494f44996cf301693ab1ff",
"c5eb710ee915443399e4085bb34de956",
"1cee616be041455e860757a527d51a67",
"5b0711ae9e104abf8de7fee8c57b3441",
"62b5caf1bc6b470cb6b5247634ee4500",
"dbbefde2b3a440aabe3d049a77d5f4a2",
"c8d82a4e57b24897913055a94dfd0218",
"6e8d5de295f74f4cb61589e54724e166",
"197f760c31a04f1091c4a8b52d633367",
"37d5dbbda33f4ab89a7b2085db823c0c",
"88ac59b49cce410ab951f5a9d489b29d",
"ed03175601984400a25c1e48f1d7f667",
"a98d3bac1dec46b08ead51ff6b7142ab",
"f41a690a28824823873cc97211509eb8",
"de9b68d6a4ee432a9a30dd0e996186b1",
"4bff367348a542d5aec867ae3e0517af",
"6b4090b4cb594e4a99985baabe54e6da",
"9d0e19eb8e44446cb3e889ca7ba5df36",
"e96fabb3bd574a1faa3d3ab484a5207e",
"69d06a11d9b14470b0035bab869ccebc",
"8836bfd59067448f8b04efc9cab6579c",
"7c7a7c1e86654c04ae41a710e67681bd",
"ee7166ced99740b8af1b9b6be9cbbdb4",
"06a753cea965481396809f7f0ed01857",
"f2b80de7e88141cfa40524a5892b596d",
"5ce9116595d04e6081c0f4ffd676a460",
"891e3362d3c24ed99e008c2b854da248",
"28a0e17ba82549c3a87b8200eadb403b",
"06dec02518e340b38697b285399e7809",
"d0ec1b7d514f475b851c0164c8b9ed52",
"3af108717a9049eba206f7ad1f7d7398",
"9deb8081847f425e86a00ef5280d5dc9",
"5976e481e9944ccf9f730ea8e07ad41d",
"7399983c84da4717b72e1dc019ade019",
"12761d7813be43379a8c64f6f565674a",
"4f5dcc84d65e4f22baca91115a8c5c63",
"a60584be68b743a99e7bc6a4655978f5",
"8ea458cbd814403cbeb45ad50c25a18a",
"3b9c4a52f15443be9a6432ad35146fac",
"05a8a21c159d45c784881360a47dc1d3",
"e174bd9e4f124b86bd2cdf3b9570a968",
"9ce51b7d4e4f4c6e9ca80f6fd6b2538d",
"5317a015c2fa4a008c5603d72aa37c5f",
"c9487a4c504b45c9af38542856b23f9d",
"58de303b6dfa4d04990d9fecad401911",
"255314c00ad74fec8ce8b7a95bf0891d",
"9dafb65c7f834faabc59e13b1ccae8cd",
"f3d91196b679438087230afd48b8a576",
"7839fd6070934f33b25a1acb65dca342",
"0fd60107711c4046b9960f7a9543f104",
"3912c935574941bea6541575c608a159",
"053a48f1bd1944c6971981c2a2c291e3",
"c434e7d6761940d98bf44dca3562b0f1",
"ced5ec564ce7464c860df78cfa963ccf",
"75e5e505a1d34d37bdd3b6b1bedcd724",
"338a4d6c6f744295a3fca9bdc712316c",
"5e592e30130246eab8fc21b7acde075b",
"0ddd8d0fff294905a0b8694955aad966",
"e8dbbb7c620349169cda1cf297204dfd",
"0be311068977476d8fc996993e8907e5",
"e1f5d9c5091c4b19b314b1b40717c5a5",
"1cc4927f0a5244a4a3b211ceb7bf3d9c",
"698f99c6409b43a39694423cf70a1787",
"0be537eb226e40298070f0c8b17a1f8d",
"5075a9d66e5f422b9b661aa91c44b04e",
"62a7171445ab44ad8443bf5baef3677f",
"a75414ceeedc4fe08e74cf6695efa32c",
"dac5b38071324ec18a0492c1a7e9ff64",
"6a49e69d1d544b3f9f8f0f453492ac22",
"1f62008c598244b5b675a6cb46c507b1",
"e2bf59bc55a4497699031de248abc94b",
"97023f5139e5446faccb205a8448f52f",
"15ac3bcd9c3e4988a0e501af8f4df80b",
"ef2ce79e17b84e6db98c2d9077f4f343",
"a0671bb4b9ea4174ae3320ee5155dd84",
"4f2a82c61bf7480aae123e6988b3feb5",
"15093541f6834fb0b8223d6a85508bd1",
"10230a3045a5440fbb173553bf85a2ec",
"3855b4b715504b0faf05f58abf742fd6",
"6c4ad59f1fdb415890b403b95ec8db69",
"a7c57fda5afc444fa3ae5afef44c6358",
"83e0ef35ed7f4f8eb840d3f529912af2",
"319f2aba67294d4dad72ab916de2d92e",
"84baf5cadee74a6fb0eeb7ae6145eea8",
"b6b1ab1065c54911978356fe88f45280",
"db10217513534a5cbde3b69c77fb79fa",
"e415efff408f4ebfb428b98d0c3a3540",
"f099ae0f184049f8b39e5d1292a1963f",
"0b83448fad18471890fad8e2380663ba",
"b8ec9166b593473287197c199ed5fbfa",
"663f1d250568404980c6cd4731fdd584",
"30821c5b2aad40e3872f6594ecbe8131",
"6acb0f53d2c9411a8142ec8d6196b1aa",
"dd398f8f9cf44a3c98da3bde04eb0861",
"80e59d0c95ed49209d39b5940e8b951c",
"5d73613a253047f68a40e618094978a2",
"c9e85f200be4439cbe3cf6284a347a17",
"6d99b3aab67540f193164a0cb8d8041d",
"7332ee43285f42bbae696f5b0751d9c7",
"31580ae8c20c4b5697e1f0a4daed2a9f",
"ca3b8f2f17d94df7aac57925e839288f",
"3c0393b08b9545559a7cb5d7a332d634",
"b9d78202f1024b73b439bd61db7e3cac",
"d97ff87fff014965bb4e919877853e86",
"1001390dfecf45e1a52ea159d22ed8db",
"e2838ed2bf844794ab92e57a11f3b46f",
"4826b2eb2c384aa0a6c3de515c97e730",
"7e8bf217128d4a08ac551f349ae522c8",
"cab8c22d8efd431f96b3ceeec1effefe",
"26a58b8c605444c194c94c72fdf8dc7c",
"1fe62296c53f41cd93db1d85b504bdf6",
"f693ca943bce4b53ac2ff1e0c82b6fdf",
"7d3b02b984124ae99b7950f55b98eddf",
"a3709a7d3fba4114b7dd7ff1d3fac306",
"e5d0ae8cd1f349a8a931566d0d958a9c",
"6e3592173d3a4402b75f292cb663e049",
"3b6fd7ac88c94288affcf0c55f764dab",
"b9e272a7420244238fbb11ff464443bd",
"8f6d3877f563430e93d6e877c235dfff",
"5edccb384a084d6f938be6858d1055f7",
"09829b09882f470bbf3d8cd1dd282f1e",
"0c07d194aef040edb049451a871cfb45",

]
let lz_cookie = {}

if (process.env.RUSH_LZCLIENT && process.env.RUSH_LZCLIENT != "") {
    activityIdList = process.env.RUSH_LZCLIENT.split(',');
}

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    // activityIdList = await getActivityIdList('game.json')
    for(let a in activityIdList){
        activityId = activityIdList[a];
        console.log("开起第 "+ a +" 个活动，活动id："+activityId)
        for (let i = 0; i < cookiesArr.length; i++) {
            if (cookiesArr[i]) {
                cookie = cookiesArr[i]
                originCookie = cookiesArr[i]
                newCookie = ''
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
                $.index = i + 1;
                $.isLogin = true;
                $.nickName = '';
                await checkCookie();
                console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
                if (!$.isLogin) {
                    $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
                    if ($.isNode()) {
                        await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                    }
                    continue
                }
                $.bean = 0;
                $.ADID = getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 1);
                $.UUID = getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                $.activityId = activityId
                $.activityUrl = `https://lzkj-isv.isvjcloud.com/lzclient/${$.activityId}/cjwx/common/entry.html?activityId=${$.activityId}&sid=&un_area=`
                await pandaDraw();
                await $.wait(2000)
                if ($.bean > 0) {
                    message += `\n【京东账号${$.index}】${$.nickName || $.UserName} \n       └ 获得 ${$.bean} 京豆。`
                }
            }
        }
    }
    if (message !== '') {
        if ($.isNode()) {
            await notify.sendNotify($.name, message, '', `\n`);
        } else {
            $.msg($.name, '有点儿收获', message);
        }
    }
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function pandaDraw() {
    $.token = null;
    $.secretPin = null;
    $.venderId = null;
    await getFirstLZCK()
    await getToken();
    await task('wxCommonInfo/token', `activityId=${$.activityId}`, 1)
    await $.wait(500)
    await task('wxCommonInfo/initActInfo', `activityId=${$.activityId}`, 1)
    await $.wait(500)
    await task('customer/getSimpleActInfoVo', `activityId=${$.activityId}`, 1)
    await $.wait(500)
    if ($.token) {
        await getMyPing();
        if ($.secretPin) {
            await task('common/accessLogWithAD', `venderId=${$.venderId}&code=${$.activityType}&pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}&pageUrl=${$.activityUrl}&subType=app&adSource=`, 1);
            await $.wait(500)
            await task('wxDrawActivity/activityContent', `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}`, 1);
            await $.wait(500)
            await task('wxDrawActivity/getGiveContent', `pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}`, 1);
            await $.wait(500)
            await task('wxActionCommon/followShop',`userId=${$.venderId}&buyerNick=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}&activityType=${$.activityType}`,1);
            console.log(`抽奖`)
            await $.wait(500)
            await task('wxDrawActivity/start',`activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}`,1);
            await $.wait(500)
        } else {
            $.log("没有成功获取到用户信息")
        }
    } else {
        $.log("没有成功获取到用户鉴权信息")
    }
}

function task(function_id, body, isCommon = 0) {
    return new Promise(resolve => {
        $.post(taskUrl(function_id, body, isCommon), async (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {

                    if (data) {
                        data = JSON.parse(data);
                        if (resp['headers']['set-cookie']) {
                            cookie = `${originCookie};`
                            for (let sk of resp['headers']['set-cookie']) {
                                lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                            }
                            for (const vo of Object.keys(lz_cookie)) {
                                cookie += vo + '=' + lz_cookie[vo] + ';'
                            }
                        }
                        if (data) {
                            switch (function_id) {
                                case 'customer/getSimpleActInfoVo':
                                    $.activityId = data.data.activityId;
                                    $.jdActivityId = data.data.jdActivityId;
                                    $.venderId = data.data.venderId;
                                    $.shopId = data.data.shopId;
                                    $.activityType = data.data.activityType;
                                    break;
                                case 'wxDrawActivity/activityContent':
                                    $.activityContent = data.data;
                                    // console.log($.activityContent)
                                    break;
                                case 'wxDrawActivity/getGiveContent':
                                    console.log("抽奖次数: "+data.data.day.giveTimes);
                                    break;
                                case 'wxActionCommon/followShop':
                                    console.log(data.data);
                                    break
                                case 'wxCommonInfo/token':
                                    // $.venderId = data.data.userId;
                                    // console.log(data);
                                    break
                                case 'wxCommonInfo/initActInfo':
                                    $.venderId = data.data.venderId;
                                    break
                                case 'wxDrawActivity/start':
                                    console.log(data.data);
                                    break
                                default:
                                    // $.log(JSON.stringify(data))
                                    break;
                            }
                        }
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }
        })
    })
}
function taskUrl(function_id, body, isCommon) {
    return {
        url: isCommon ? `https://lzkj-isv.isvjcloud.com/${function_id}` : `https://lzkj-isv.isvjcloud.com/wxDrawActivity/${function_id}`,
        headers: {
            Host: 'lzkj-isv.isvjcloud.com',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://lzkj-isv.isvjcloud.comm',
            'User-Agent': `jdapp;iPhone;9.5.4;13.6;${$.UUID};network/wifi;ADID/${$.ADID};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
            Connection: 'keep-alive',
            Referer: $.activityUrl,
            Cookie: cookie
        },
        body: body

    }
}

function getMyPing() {
    let opt = {
        url: `https://lzkj-isv.isvjcloud.com/customer/getMyPing`,
        headers: {
            Host: 'lzkj-isv.isvjcloud.com',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://lzkj-isv.isvjcloud.com',
            'User-Agent': `jdapp;iPhone;9.5.4;13.6;${$.UUID};network/wifi;ADID/${$.ADID};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
            Connection: 'keep-alive',
            Referer: $.activityUrl,
            Cookie: cookie,
        },
        body: `userId=${$.venderId}&token=${$.token}&fromType=APP`
    }
    return new Promise(resolve => {
        $.post(opt, (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                    if (resp['headers']['set-cookie']) {
                        cookie = `${originCookie};`
                        for (let sk of resp['headers']['set-cookie']) {
                            lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                        }
                        for (const vo of Object.keys(lz_cookie)) {
                            cookie += vo + '=' + lz_cookie[vo] + ';'
                        }
                    }
                    if (data) {
                        data = JSON.parse(data)
                        if (data.result) {
                            $.log(`你好：${data.data.nickname}`)
                            $.pin = data.data.nickname;
                            $.secretPin = data.data.secretPin;
                        } else {
                            $.log(data.errorMessage)
                        }
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }

        })
    })
}
function getFirstLZCK() {
    return new Promise(resolve => {
        $.get({ url: $.activityUrl }, (err, resp, data) => {
            try {
                if (err) {
                    console.log(err)
                } else {
                    if (resp['headers']['set-cookie']) {
                        cookie = `${originCookie};`
                        for (let sk of resp['headers']['set-cookie']) {
                            lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                        }
                        for (const vo of Object.keys(lz_cookie)) {
                            cookie += vo + '=' + lz_cookie[vo] + ';'
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            } finally {
                resolve();
            }
        })
    })
}
function getToken() {
    let opt = {
        url: `https://api.m.jd.com/client.action?functionId=isvObfuscator`,
        headers: {
            Host: 'api.m.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: '*/*',
            Connection: 'keep-alive',
            Cookie: cookie,
            'User-Agent': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)',
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br',
        },
        body: `body=%7B%22url%22%3A%20%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=72124265217d48b7955781024d65bbc4&client=apple&clientVersion=9.4.0&st=1621796702000&sv=120&sign=14f7faa31356c74e9f4289972db4b988`
    }
    return new Promise(resolve => {
        $.post(opt, (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.code === "0") {
                            $.token = data.token
                        }
                    } else {
                        $.log("京东返回了空数据")
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }
        })
    })
}

function getActivityIdList(url) {
    return new Promise(resolve => {
        const options = {
            url: `${url}?${new Date()}`, "timeout": 10000, headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
            }
        };
        $.get(options, async (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                if (data) data = JSON.parse(data)
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function random(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}
function getUUID(format = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', UpperCase = 0) {
    return format.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        if (UpperCase) {
            uuid = v.toString(36).toUpperCase();
        } else {
            uuid = v.toString(36)
        }
        return uuid;
    });
}
function checkCookie() {
    const options = {
        url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
        headers: {
            "Host": "me-api.jd.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Cookie": cookie,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1",
            "Accept-Language": "zh-cn",
            "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
            "Accept-Encoding": "gzip, deflate, br",
        }
    };
    return new Promise(resolve => {
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.retcode === "1001") {
                            $.isLogin = false; //cookie过期
                            return;
                        }
                        if (data.retcode === "0" && data.data.hasOwnProperty("userInfo")) {
                            $.nickName = data.data.userInfo.baseInfo.nickname;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
