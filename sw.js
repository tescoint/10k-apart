var serviceWorkerVersion="static-v1";importScripts("/cache-polyfill.js"),self.addEventListener("install",function(e){console.log("running within the install phase"),e.waitUntil(caches.open(serviceWorkerVersion).then(function(e){return e.addAll(["/","/index.html","/styles/base.min.css","/styles/main.min.css","/styles/lazyload-assets.min.css","/images/svgdefs.svg","/images/rwd-logo-resized.svg","/images/book-number.svg"])}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(s){return s||fetch(e.request)}))});
