/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "70b4e175f1886454e92903ef10b87c52"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "7fd9d04b80cf75e152a5484173dbd72e"
  },
  {
    "url": "assets/css/0.styles.2494eac4.css",
    "revision": "8fc6e49ca2ce49c650f647144c844b1d"
  },
  {
    "url": "assets/img/MySQL.0d2070e8.png",
    "revision": "0d2070e8f84c4801adbfa03bda1f98d9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SKU-iPhone-02.bb379c11.png",
    "revision": "bb379c1138f2dc9b6204503f42770e0a"
  },
  {
    "url": "assets/img/SKU-iPhone.1065a0ba.png",
    "revision": "1065a0ba72d4cd508f463847d2dee56b"
  },
  {
    "url": "assets/js/10.68cddf6d.js",
    "revision": "a80a4e93fa93a0a640393e265ce93b25"
  },
  {
    "url": "assets/js/11.9bf6bf26.js",
    "revision": "88c5226ff12cf68a5212659220f2ada5"
  },
  {
    "url": "assets/js/12.84cda420.js",
    "revision": "a81e107a047387c3b3783e5f1c0189e7"
  },
  {
    "url": "assets/js/13.d108468c.js",
    "revision": "7214efe945bd3e124d988d8c7b74ebef"
  },
  {
    "url": "assets/js/14.2353581d.js",
    "revision": "c8a6e4566a53faaac5cb2f724b2563f3"
  },
  {
    "url": "assets/js/15.15d6fa0c.js",
    "revision": "891555a224e31116a22a5688e2d4ff6c"
  },
  {
    "url": "assets/js/2.123d0642.js",
    "revision": "0d21ce6d8aa0607c87ce5443b59b38c0"
  },
  {
    "url": "assets/js/3.8181c1a2.js",
    "revision": "a1cefe923532787d111779bcc365cd7f"
  },
  {
    "url": "assets/js/4.e00e807e.js",
    "revision": "e285d4f51015455717654cf55d83a127"
  },
  {
    "url": "assets/js/5.e71e65e1.js",
    "revision": "43b1a451f33d6e3e54667cb8900cf6d8"
  },
  {
    "url": "assets/js/6.4494aef5.js",
    "revision": "dfba26812cb535e2091644819daefc2c"
  },
  {
    "url": "assets/js/7.9005f237.js",
    "revision": "7a6845d89aaf13df4045cf130b7ed4c7"
  },
  {
    "url": "assets/js/8.ee5ad8b3.js",
    "revision": "84f61754294934b367ebc0989872f983"
  },
  {
    "url": "assets/js/9.ea79421c.js",
    "revision": "ddb5e3667aa3c5315046bca1cf47fef2"
  },
  {
    "url": "assets/js/app.1359ccd0.js",
    "revision": "1f28128e4fe8793f82f4fbfe8898ab21"
  },
  {
    "url": "avatar.jpg",
    "revision": "9d366dfae5606d3327a928a75e2b5255"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c8be31d8cb08ba44c9c24ae1ec0aab40"
  },
  {
    "url": "icons/icons/icon-128x128.png",
    "revision": "ba8adf3512b4745c910f0d2428f18ff8"
  },
  {
    "url": "icons/icons/icon-144x144.png",
    "revision": "caf3fa68eb7536fcf76c4ae2186da40e"
  },
  {
    "url": "icons/icons/icon-152x152.png",
    "revision": "60e4982a750b5eb464c15fef4abcc655"
  },
  {
    "url": "icons/icons/icon-192x192.png",
    "revision": "523c0fb8f57f93b468e0ed78ecdf86e8"
  },
  {
    "url": "icons/icons/icon-384x384.png",
    "revision": "c38228266f233432c21c871626ffaacd"
  },
  {
    "url": "icons/icons/icon-512x512.png",
    "revision": "7f78124d42ce759625665a6b36ecba5b"
  },
  {
    "url": "icons/icons/icon-72x72.png",
    "revision": "0f3cc531ed40a48f2dfaac0c236c173d"
  },
  {
    "url": "icons/icons/icon-96x96.png",
    "revision": "220c53a703dfabc0bdbfa56063264a00"
  },
  {
    "url": "index.html",
    "revision": "b7763b88a616437179b0bbfc2ad3f3b5"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "MySQL/SQL查询语句的执行过程.html",
    "revision": "d10b3540d0e1ca9a86252eeb15170ddf"
  },
  {
    "url": "Note/index.html",
    "revision": "f7f36babd7ffa9a3bebeac50832c47a8"
  },
  {
    "url": "Note/SKU.html",
    "revision": "3458841bb182919d7a656f551a916e6f"
  },
  {
    "url": "Note/浅谈 JavaScript 中的防抖与节流（一）.html",
    "revision": "ad1207e4066ead008fe9ef1d6cfa5bf2"
  },
  {
    "url": "OS/centos/index.html",
    "revision": "8d0d8d5809f504dce1e0799c33dc84be"
  },
  {
    "url": "OS/centos/safe-rm的使用.html",
    "revision": "fc35d51b56d9d7b73774986fb078f941"
  },
  {
    "url": "OS/centos/基础命令.html",
    "revision": "b0833ed01e1ce985a600a612f3269a1c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
