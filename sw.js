const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";

const assest = [
  "/",
  "/index.css",
  "/wage",
  "/userMaster",
  "/userDetails",
  "/companyDetails",
  "/employeeDetails",
  "/siteDetails",
  "/wageDetails",
];

self.addEventListener("install", (evnt) => {
  waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log(cache, " teh cache created by the user");
      cache.addAll(assest);
    })
  );
});

self.addEventListener("activate", (evnt) => {
  caches.keys().then((res) => console.log(res));
  evnt.waitUntil(
    caches.keys().then((key) => {
      return Promise.all(
        key
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evnt) => {
  evnt.respondWith(
    caches.match(evnt.request).then((cache) => {
      return (
        cache ||
        fetch(evnt.request).then((response) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(evnt.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});
