'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2ce7b9bbe5ff1795090113b4af36f9e7",
"index.html": "4dcb11ff25aa4f200cd4fba2602e6abf",
"/": "4dcb11ff25aa4f200cd4fba2602e6abf",
"main.dart.js": "6ba8f0909b57a943228f68f743aca718",
"favicon.png": "bd630126bf386b3d3c510497f3df1ee7",
"icons/apple-touch-icon-120x120.png": "0f02a995c9f8eba6cba2e4dbfd5a7aac",
"icons/android-touch-icon.png": "bd630126bf386b3d3c510497f3df1ee7",
"icons/apple-touch-icon-152x152.png": "4bfe10bdd1fedd5d22e66efc60dbbcbe",
"icons/apple-touch-icon-180x180.png": "1853065ba4ee40e61fc8744849de5ff5",
"icons/apple-touch-icon-76x76.png": "4e7f800dd8e43fe0d2285c9895c072da",
"manifest.json": "5274152a64c0e4b4ee08c772d72d87f7",
"assets/asset/video/bg4.mp4": "813bcc983fb48f8f2390912c81953490",
"assets/asset/video/bg3.mp4": "f423ec6ee142a33a541cd4aaba6554c6",
"assets/asset/video/bg2.mp4": "8ba364bd2314390d7b7345e078239582",
"assets/asset/video/bg1.mp4": "252b996240bc451bd354d3226ed587e3",
"assets/asset/image/style/luzi_smoke.png": "22933c4611779774853389ba24038160",
"assets/asset/image/style/img_0014.png": "cb498cede454eae31d016d3463997e0d",
"assets/asset/image/style/icon_waiting.png": "3f64d399bd16cb6eeac2be1617a8f335",
"assets/asset/image/style/bg_dialog.png": "37f33f1e2422976c312dfa26a6222c41",
"assets/asset/image/style/icon_disk.png": "6f71bb966bcbf1a1c6a50675ca515f8b",
"assets/asset/image/style/luzi_work_lbg_ani.png": "1fea1382eabbb92f8f7c6a8c710089e3",
"assets/asset/image/style/icon.png": "a41d44062b09d8ff0a3fe3e3f34992ea",
"assets/asset/image/style/bg_collected_count.png": "f18a65d4a9355581c4a02f780e853d6b",
"assets/asset/image/style/icon_close.png": "bc68cf687408e761bd9aae5b8c1677d0",
"assets/asset/image/style/progress.png": "bcf2866c4bf5991f0ddb4725dbff6fe4",
"assets/asset/image/style/favicon.ico": "246489c3703053bd5fa171737914a8d4",
"assets/asset/image/style/book.png": "31c069bc54474651ca66dc1351ea5c8e",
"assets/asset/image/style/sagittarius.png": "b2072d05256377546afd4d2c5842ec8e",
"assets/asset/image/style/img_0012.png": "fe0f3ab5270c01c1581eae919b608c39",
"assets/asset/image/style/icon_friend.png": "f997abf8a4ffc699852f69e11d5e8be7",
"assets/asset/image/style/button_down_array.png": "3ecd453a67618b19ce9a94bab5dace29",
"assets/asset/image/style/threeday_button1.png": "62b2f8a3b83b63ee97dd7b3c2a3a71bb",
"assets/asset/image/style/shelf_right.png": "640ab18500483b1b7142fb1847d5fd71",
"assets/asset/image/style/lv_bg2.png": "79600fe464b8aeb79b1de18266f2e1bf",
"assets/asset/image/style/threeday_button0.png": "458ac9939e9e0cc9aba7571e49cd7b53",
"assets/asset/image/style/img_0011.png": "e321d73fb7d5dc636450a61971379d74",
"assets/asset/image/style/threeday_button2.png": "13e4654c39d7b970520554a990cf384a",
"assets/asset/image/style/main.jpg": "0b7fce49def7b32b9b9fbd405fb9dceb",
"assets/asset/image/style/main_icon.png": "035e04cfdae1f03eddb2042cbfce34b9",
"assets/asset/image/style/daily_buy.png": "8314e1813093eef3a2310f36456e9b44",
"assets/asset/image/style/luzi_light.png": "7cf06a39b872e6426acb2c57287e90bc",
"assets/asset/image/style/charge.png": "512e0ee918626bbfa18af61436d8ae9e",
"assets/asset/image/style/banner.png": "355320a1e62c1b8bddae364f41b472cd",
"assets/asset/image/style/kaka.png": "de884c265de8d98554fedff2f42110ec",
"assets/asset/image/style/icon_money.png": "c570330208b9ab337f19d5102bec29f2",
"assets/asset/image/style/card_border3.png": "5b6cae5e8ccd2f62a2eb81858a348cf7",
"assets/asset/image/style/card_border2.png": "32865da1ab0fb2cac58dd3fd5fe24e9d",
"assets/asset/image/style/card_bg1.png": "23beb7320198f371da1c064bd72fcde0",
"assets/asset/image/style/accelerate_yellow.png": "246212842e547731c60a6d2417f47662",
"assets/asset/image/style/tool_frames.png": "7fde7a793e708eb6f4e9b0072ca64ff3",
"assets/asset/image/style/candle.png": "e2d111b25e0d13ae5390c970b75718e9",
"assets/asset/image/style/card_bg3.png": "5541d03a7bea50ecb047e7705ef5fcee",
"assets/asset/image/style/card_border1.png": "a7eb6b102d30e6b1df8e54016d3c76ec",
"assets/asset/image/style/card_bg2.png": "4524e308a4fb6ed4f6a2a657ed83e8cf",
"assets/asset/image/style/main_slots.png": "460287ac999348b875fbf4f3a1e850c1",
"assets/asset/image/style/icon_exp.png": "c0b4517df50bc0b507826f378964e6e6",
"assets/asset/image/style/fullscreen_top.png": "2496771868b8a033d0b25583a3bbe844",
"assets/asset/image/style/first_charge.png": "81bfcb95991617e10075d76286037d07",
"assets/asset/image/style/charge_stars.png": "f5c9cc86244e0a0c090d3db5303a431f",
"assets/asset/image/style/lv_bg.png": "12d42247886310acfdee6f4c807a1395",
"assets/asset/image/style/slot_bg.png": "4524e308a4fb6ed4f6a2a657ed83e8cf",
"assets/asset/image/style/mc_logo.png": "c912839ff4ea054bd438c9ff4e72caeb",
"assets/asset/image/style/chest.png": "03224ea071acc4798c09ec76f30f010e",
"assets/asset/image/style/slot_bd.png": "74a1bbca996616bed8857d27ae6a328d",
"assets/asset/image/style/convert_succ_cut.png": "0570410e207e8c834b6a0b27d4a8efda",
"assets/asset/image/style/card_bg4.png": "5f06d23f6384645b037b01a26d6e6d8e",
"assets/asset/image/style/mark_icons.png": "219415e0c98d2f8bbc0f8ad533fbadbd",
"assets/asset/image/style/zcg.png": "b7535585858be0d1c08a12e41bfb7d7a",
"assets/asset/image/style/loading_bg.png": "980bd44d259d245917de2b373120a3dd",
"assets/asset/image/style/convert_fail.png": "26a4206e279f781924efad3d0612bb4b",
"assets/asset/image/style/icon_128.png": "3d92fdad4ce3ece3211f3487e536a7ad",
"assets/asset/image/style/bottom_bar.png": "25bdf372371d7c238c61c08a971496cf",
"assets/asset/image/style/block.png": "39f696446b0fb8e8c638bdcfaad7d826",
"assets/asset/image/style/icon_alter.png": "7a4f791c921fa6ef7477693891ccb80b",
"assets/asset/image/style/locked.png": "dd928821099c4d7a6ade162928bd2c4b",
"assets/asset/image/style/main_view.png": "beabcaf1428db6980962b708e48b5f4b",
"assets/asset/image/style/buttons.png": "639af87eedc853fd1d6e5230c3eb0e59",
"assets/asset/image/style/shelf_middle.png": "35ff32f9126d6aa1ec06708a3a0056de",
"assets/asset/image/style/bg_dialog2.png": "8289c994656f32c9561e215fd2ce772e",
"assets/asset/image/style/split_lines.png": "7d4cc6c4637f41476f48a9906234c4e5",
"assets/asset/image/style/top_bar.png": "f8e3c729692ba696fc453809fa81cb31",
"assets/asset/image/style/bg_dialog3.png": "9a642a0e313d3cdab597e843abad63ea",
"assets/asset/image/style/main_ui.png": "c130a92f3124af51e9dafbf5933907dd",
"assets/asset/image/style/logo.png": "4993bd0510960ad2401aebd99582c8c0",
"assets/asset/image/style/panel.png": "20186a1773bbe9dd10a7161bbfe10c6f",
"assets/asset/image/style/logo_big_ai.png": "6789d14831db695ec8a21fcd2841e1f1",
"assets/asset/image/style/icon_power.png": "51704395a1396c108316faa517de184c",
"assets/asset/image/style/accelerate_blue.png": "236e48964ee89bab621a30fd50cdf742",
"assets/asset/image/style/tips.png": "975e2d18fe313f8bda4ed48da23efe45",
"assets/asset/image/style/stove.png": "52531c1946186a7b2b56e6331614fb7e",
"assets/asset/image/style/bigpanel_top_tab.png": "e30e5b2ef91313d3749810e460b5d7aa",
"assets/asset/image/style/luzi_1.png": "3a8ee2d3a0454ac8b34b32e4569cae21",
"assets/asset/image/style/fullscreen_bottom.png": "8863625aa3382cafbcf2f3edc75f686a",
"assets/asset/image/style/seven_day.png": "43d85e252c1101c11d4a1a3086d828c5",
"assets/asset/image/style/convert_card_bg2.png": "e1edadfd0a3056a6dda0365aab846296",
"assets/asset/image/style/threeday_bg.png": "14698bdefa22b51d031b5f51d7ce47b5",
"assets/asset/image/style/bigpanel_bottom.png": "cba9e8ef311216c0d6a4c6a4b7abf068",
"assets/asset/image/style/bg_dialog4.png": "79f6e4d01ddd8ca85fddac08e9a2fc8e",
"assets/asset/image/style/act_center_icon.png": "dd82e6dd0a9cfda7058970ad18d72e5e",
"assets/asset/image/style/panel_frame.png": "fc44b6cbec61fc865ac269bc6d8a06eb",
"assets/asset/image/style/convert_pre.png": "6d6e8930f284b0c57c1c74dadaf82f03",
"assets/asset/image/style/icon_yes.png": "8aec0a55075f2741a642f56823273437",
"assets/asset/image/style/panel_content.png": "133c9d546f50a6c388e9c31f79c3ab79",
"assets/asset/image/style/clock.png": "5fb047f6d88b7eceb97b54c79e3550bf",
"assets/asset/image/style/int_fragment.png": "6e46d5723211e9e4178de0e8ca3f632f",
"assets/asset/image/style/cardcollect_second_bg.png": "39eae312fba518799c6cc32c2effc9c3",
"assets/asset/image/style/card_frames.png": "6eeb50721a61f06fda3de06293cb1f0a",
"assets/asset/image/style/money_icon.png": "0af1c60b7eb298d519c8098452882681",
"assets/asset/image/style/star.png": "8ebbc77294fe00b9c09fadec890ebc80",
"assets/asset/image/style/bg_slot.png": "33de12cb44cb48915a885a23d1d6e28b",
"assets/asset/image/style/title_prefix.png": "85649a98d4aec9a02840e46ab8f61d52",
"assets/asset/image/style/dotting_line.png": "7115b6ee4f8b4cdc9164b3f687c52130",
"assets/asset/image/style/icon_book.png": "a0b1874e44590040055f367b97384dc3",
"assets/asset/image/style/icon_64.png": "5a98f696ca5b00859593dbb284dddf8a",
"assets/asset/image/style/shelf_left.png": "8e0d971b92e27f26232f5ee550a377d9",
"assets/asset/image/style/icon_show_got.png": "7318d0fa5e43ca7f3849d5e3781a4f1d",
"assets/asset/image/style/loading.png": "1d053ceff19b972aae77dd8b48235b56",
"assets/asset/image/style/accelerate_purple.png": "8cc3efff8679a2c2df9f482ea34bc48c",
"assets/asset/image/style/moka_girl.png": "0d9f87dcfc486aab191bdbe52b984187",
"assets/asset/image/style/bg.png": "6915fe197c1a74b24009aaa4a89b5299",
"assets/asset/image/style/luzi_work_light_ani.png": "7d306be68f30a6e61b851bdd0a1082d8",
"assets/asset/image/avatar/21.gif": "64056e0e7f5ebddd94408c1c741d187f",
"assets/asset/image/avatar/20.gif": "d0a901c9ed74d47c383af910123b8f87",
"assets/asset/image/avatar/22.gif": "325a050eb56ec9e8b145bab84a5631b5",
"assets/asset/image/avatar/23.gif": "e483e67448eecb70e22b4393cb06e4b3",
"assets/asset/image/avatar/18.gif": "d7d564f33ca6ea0c70f034d772c786f7",
"assets/asset/image/avatar/19.gif": "389e1567c93b7449c258d4d22e6820b4",
"assets/asset/image/avatar/4.gif": "9ca972cb01216b3a349b5901d250e9cb",
"assets/asset/image/avatar/5.gif": "78372b3b5659ba914d9e1299753c021b",
"assets/asset/image/avatar/7.gif": "eba046d6d96b137aead443270e059f87",
"assets/asset/image/avatar/6.gif": "dac851fa967edd930bd061a1f00a07b0",
"assets/asset/image/avatar/2.gif": "32abbadacd95a12cff643175d39e20b2",
"assets/asset/image/avatar/3.gif": "c9e33e7ea89ffa6d66ae1a4a4ef0835e",
"assets/asset/image/avatar/1.gif": "3a6485170c9386d1ac58663569b47298",
"assets/asset/image/avatar/0.gif": "03eb60c7b05627bb61c066648cada943",
"assets/asset/image/avatar/8.gif": "d03f144f846db9c0c66f9cfcbb26dd72",
"assets/asset/image/avatar/9.gif": "3a47b82d828b953bc1b384057b123da2",
"assets/asset/image/avatar/14.gif": "9153363475cbacb4d22b822955a85f95",
"assets/asset/image/avatar/15.gif": "fdc92f03627962391bc72faca6057eba",
"assets/asset/image/avatar/17.gif": "1343c8fa9690198d3a0f652a3290436b",
"assets/asset/image/avatar/16.gif": "783963e6e0faa423224427a809bbb1fd",
"assets/asset/image/avatar/12.gif": "5d627a368b1f651a72c944122596b565",
"assets/asset/image/avatar/13.gif": "f4939a3eeb857b4587515a8a71131e65",
"assets/asset/image/avatar/11.gif": "a1c59add0d26d326d148414540805551",
"assets/asset/image/avatar/10.gif": "3c0bbbd9cf301393ca66bb92b3d6cbcd",
"assets/asset/image/avatarFix/8.png": "e3b65f5630d5362c1417bda965c0b618",
"assets/asset/image/avatarFix/9.png": "f26cbf5169804bc5cec4ac2109ddacd4",
"assets/asset/image/avatarFix/14.png": "5db3a0a8c2f6cb892fa96841a0eeaee6",
"assets/asset/image/avatarFix/28.png": "eee6b9f27ce0f661230df8615b2e37a6",
"assets/asset/image/avatarFix/29.png": "b9bd46db89eae10b34771ab36315ea17",
"assets/asset/image/avatarFix/15.png": "7404993dd2dd69bda54b9a49c85e15f6",
"assets/asset/image/avatarFix/17.png": "59900cf03b1f6c17b0dc491bdef32375",
"assets/asset/image/avatarFix/16.png": "27c32e1048aa71e47d83e1e003821ddb",
"assets/asset/image/avatarFix/12.png": "2b406494f2a2172a412ee2d3634fa6eb",
"assets/asset/image/avatarFix/13.png": "5101ba6bbebab55b15d45c920801a1af",
"assets/asset/image/avatarFix/11.png": "910bdf426878bbe2c6490da8456f96eb",
"assets/asset/image/avatarFix/10.png": "078d73a29f4455d7b87a15ef54ae0304",
"assets/asset/image/avatarFix/21.png": "b2f00cedb17978be142a4e91e939f2e9",
"assets/asset/image/avatarFix/20.png": "746f57c0c007ba96fb840e388abdb56e",
"assets/asset/image/avatarFix/22.png": "9c577c721c611eeee3e8de55fff9202a",
"assets/asset/image/avatarFix/23.png": "e55046840a037439ef248295589fad8c",
"assets/asset/image/avatarFix/27.png": "970d9079acdd6b3ddfdcc8d4912decae",
"assets/asset/image/avatarFix/26.png": "3edcbd8c78b92bb05151f54ea2752c1a",
"assets/asset/image/avatarFix/18.png": "76debbf90e1d5773cb9c52d5440e85e3",
"assets/asset/image/avatarFix/24.png": "357eef11b2da67fb630502231edc90c7",
"assets/asset/image/avatarFix/25.png": "bd7aceaf6b4cdfde2bfc70acabde9faf",
"assets/asset/image/avatarFix/19.png": "65d2ae7aae51b2aa77def54fd20a38cd",
"assets/asset/image/avatarFix/4.png": "c2c09c4b4db875fbb25a4ab0fe5500d2",
"assets/asset/image/avatarFix/5.png": "8f05a845ce17e39368dabea2dc35e5cc",
"assets/asset/image/avatarFix/7.png": "f815a1131cfe990a30361684b1cbdb78",
"assets/asset/image/avatarFix/6.png": "3bd680100f37b37940b2507616d452bd",
"assets/asset/image/avatarFix/2.png": "26fa44e98ae75922eaccf8f85b38f30a",
"assets/asset/image/avatarFix/3.png": "502707baeb6c27146ed10d3501b8f73e",
"assets/asset/image/avatarFix/1.png": "31db50eb213d59a4dc6e400f3b1022b5",
"assets/asset/image/avatarFix/0.png": "6dcd65142aabd7b26033c73c4d21e60f",
"assets/asset/image/avatarQQ/8.jpg": "344291b21130b9f705213127356fd684",
"assets/asset/image/avatarQQ/9.jpg": "026e00296a607d5ac28375e3962a9044",
"assets/asset/image/avatarQQ/12.jpg": "7294fea2fb421969958933fbb31144da",
"assets/asset/image/avatarQQ/11.jpg": "ec29581bb57894af2b28710de5dc3d56",
"assets/asset/image/avatarQQ/10.jpg": "5cd1fae1106e18e2791417c9c3142465",
"assets/asset/image/avatarQQ/4.jpg": "52a3e7ecf34cc7b8da8108ebf613fc7b",
"assets/asset/image/avatarQQ/5.jpg": "658584b86bb2abf0016edd6e6426f476",
"assets/asset/image/avatarQQ/7.jpg": "5f0e364557e91ec5a22fb138336f4e6c",
"assets/asset/image/avatarQQ/6.jpg": "50b63287f6dd25cc97d64f79b684baf1",
"assets/asset/image/avatarQQ/2.jpg": "dce2e314795568c7ca5e9337e3ba929c",
"assets/asset/image/avatarQQ/3.jpg": "b3850799fec751f85c2ff138bed66a3f",
"assets/asset/image/avatarQQ/1.jpg": "a10e5d8bbf26dc639ead5f17039957a5",
"assets/asset/image/avatarQQ/0.jpg": "65e2e825ce1d784903e33288d3ae4b8d",
"assets/asset/font/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"assets/asset/font/FZCuYuan-M03S.TTF": "23bf0ed349cc311949f7bd2cd5940db2",
"assets/asset/font/BalooBhai2-Regular.ttf": "7c94be72174267b3aac61b9ab4df2af7",
"assets/asset/font/Inconsolata-Regular.ttf": "9d52a8c4fafc763d9a356d8b67d4a2e6",
"assets/asset/data/data.json": "d0d3ff3312e8776aeba55ceaaa1d6b75",
"assets/AssetManifest.json": "1f2c32ce5ca93f88a65fb98739a4acb4",
"assets/NOTICES": "d6f6f8f00fd9811dddf9892d2bad6997",
"assets/FontManifest.json": "cded8e9abd7bbd35396707d80b6b8412",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
