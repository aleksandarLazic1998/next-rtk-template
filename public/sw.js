if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d1ab7820f26db4d6c903716cd64376b8"},{url:"/_next/static/9jZfVRBuOQL9oXqn8X740/_buildManifest.js",revision:"53723b02eab85f5f409c6bec289da7f1"},{url:"/_next/static/9jZfVRBuOQL9oXqn8X740/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/139-2ce6839193a2fd4b.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/310-0dc2711be83fda0e.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/324-1b8e6884c3bd08d6.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/596-20aec56341a936b0.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/661-95056c3569506293.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/753-da05aa8a69f2338c.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/dashboard/page-9d83ef24a15543ad.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/global-error-0a38bcbf79b9b80f.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/layout-81eb3660e8582d69.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/login/page-ae9a61fc1db515bd.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/not-found-cdbba54a5b7e825b.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/page-7cba6f861947f4f2.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/page-536c270bbcf9cd57.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/app/posts/page-dc7a6292e9153263.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/fd9d1056-34d54211aefab91d.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/main-app-7611cdd60375f2fc.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/main-fd63d0f72d96cb8f.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/pages/_app-6b79a29ad0d63b21.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/pages/_error-9aeb3e4d490fe4b8.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-dbe0b9d657fe83ac.js",revision:"9jZfVRBuOQL9oXqn8X740"},{url:"/_next/static/css/1394fc058465260a.css",revision:"1394fc058465260a"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/android-chrome-192x192.png",revision:"112ac5d62cefccd48e2e4db56b652e1a"},{url:"/android-chrome-512x512.png",revision:"d33eaa71145e955bc737639d4b0af67b"},{url:"/apple-touch-icon.png",revision:"de2e6ba687ffa6ce6e8c3599444e8800"},{url:"/favicon-16x16.png",revision:"3c3d90e59124e94f536055175c4608f0"},{url:"/favicon-32x32.png",revision:"8745c7a0bc1d0891f5603bf8b583098c"},{url:"/favicon.ico",revision:"c8ace157d190837a362dbb99bae94412"},{url:"/icon-192x192.png",revision:"8cef270cbf93cece4dd1337e0b317a72"},{url:"/icon-256x256.png",revision:"f19bba9fa6088f27f0e24f54d4e16ef5"},{url:"/icon-384x384.png",revision:"8801fd02bfa52886d441dfdd00be8437"},{url:"/icon-512x512.png",revision:"97d578a69f557e93a3760665261c9a08"},{url:"/manifest.json",revision:"18fe11acc9d1411b78ceca2cb9688db4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/site.webmanifest",revision:"aac5bc4ab0b0451b4217361acdb86853"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));