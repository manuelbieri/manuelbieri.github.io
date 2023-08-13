// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `manuelbieri-ch-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
    "/",
    "/index.html",
    "/blog.html",
    "/legal.html",
    "/sources.html",
    "/manifest.json",
    "/assets/css/main.css",
    "/assets/css/bootstrap-icons/bootstrap-icons.min.css",
    "/assets/css/bootstrap-icons/fonts/bootstrap-icons.woff?1fa40e8900654d2863d011707b9fb6f2",
    "/assets/css/bootstrap-icons/fonts/bootstrap-icons.woff2?1fa40e8900654d2863d011707b9fb6f2",
    "/assets/js/bootstrap.min.js",
    "/assets/js/jquery.min.js",
    "/assets/js/popper.min.js",
    "/assets/js/scripts.js",
    "/assets/images/head.webp",
    "/assets/images/orcid.png",
    "/assets/images/icons/android-chrome-192x192.png",
    "/assets/images/icons/android-chrome-512x512.png",
    "/assets/images/icons/apple-touch-icon.png",
    "/assets/images/icons/browserconfig.xml",
    "/assets/images/icons/favicon.ico",
    "/assets/images/icons/favicon-16x16.png",
    "/assets/images/icons/favicon-32x32.png",
    "/assets/images/icons/maskable_icon_x512.png",
    "/assets/images/icons/safari-pinned-tab.svg",
    "/assets/images/texstudio.png",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/develop/icons/jekyll/jekyll-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spss/spss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
];

// On install, cache the static resources
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(APP_STATIC_RESOURCES);
        })()
    );
});

// delete old caches on activate
self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
            await clients.claim();
        })()
    );
});

// On fetch, intercept server requests
// and respond with cached responses instead of going to network
async function cacheThenNetwork(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    // console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  // console.log("Falling back to network");
  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  // console.log(`Handling fetch event for ${event.request.url}`);
  event.respondWith(cacheThenNetwork(event.request));
});
