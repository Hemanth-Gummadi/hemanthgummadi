"use strict";var precacheConfig=[["/hemanthgummadi/index.html","f15cedd9c632c3f4f8fe2caec2da5288"],["/hemanthgummadi/static/css/main.9fae9b4b.css","f2134c4de5c28ef9c390a3bf2f71cb50"],["/hemanthgummadi/static/js/main.deef1127.js","ada36d6299c3af44291c96c87feafcc0"],["/hemanthgummadi/static/media/AWS_cert.f7c90108.png","f7c901087b875448e5bfadecfe20e5d8"],["/hemanthgummadi/static/media/C_AWS.be4ef9fc.png","be4ef9fca9c4f8de2cc76c917b9c2704"],["/hemanthgummadi/static/media/Java_Cert1.c1c3b414.jpg","c1c3b414aaa15229bc109865aad8de83"],["/hemanthgummadi/static/media/Java_cert2.0c364f15.jpg","0c364f15b855f3f9bb7504231a98451f"],["/hemanthgummadi/static/media/Logo.221deb1d.png","221deb1da938fe4590017808ea08c9ad"],["/hemanthgummadi/static/media/PDF.c614654d.png","c614654dfdaa94f567264388d9658ef5"],["/hemanthgummadi/static/media/WORD.07b667b8.png","07b667b85a0e1be473fc843c35a8421c"],["/hemanthgummadi/static/media/oracle.e859cc75.png","e859cc757733b0f6397928ae8e289c60"],["/hemanthgummadi/static/media/project.aadec33c.png","aadec33c9ca3b13a60dfa99ac7429049"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/hemanthgummadi/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});