import axios from "axios";

function createInstance(url) {
  const axiosInstance = axios.create({
    baseURL: url,
    timeout: 200000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosInstance;
}

//functionality for attaching the token for all request
function attachToken(req) {
  // const token = localStorage.getItem("userToken")
  const token = "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd";
  if (token) {
    // req.headers["Authorization"] = `Bearer ${token}`;
    req.headers["Token"] = token
  }
  req.headers["Content-Type"] = "multipart/form-data";
  return req
}

// functionality for attaching the token with bearer
function attachToken2(req) {
  // const token = localStorage.getItem("userToken")
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJ6WU9XN2RZVGMwUlBKc2dmYjd3RzIzdTJRcGh1cXZ2WS9UQ0x3MjZUWVdtcnhoLzY4b2xVNTRDRDBvMzNnY2o5RVQrUmdaOWlqbFQ2VlM2YmxYY1RzRCt6amMzQlRvcXNvbEFyKzg3RWNHM1owT0dpZEk1UTU3dllma0xXNEU4SCt1TFpoQlFhK3c0ZFp6WjFTL0lxL3hCWVJnOC8ydERoblZRNTdwSkJKWDdvcGhVU1BnRTVJK0E4VzFGZHJjVT0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA4OTIyODA3LCJleHAiOjE3MDkwMDkyMDcsImlhdCI6MTcwODkyMjgwN30.1i1xnHbpWHdJybbdH8qGw7j5Hl0KY9Ebx1nhWL4H4nw";
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req
}

export const axiosUserInstance = createInstance("http://localhost:5173");
export const imageInstance = createInstance("https://sacrosys.net:6662/api/9132");
export const axiosSiteDetailsInstance = createInstance("https://sacrosys.net:6661/api/2654")

axiosUserInstance.interceptors.request.use((req) => {
  const config = attachToken(req);
  return config;
});


axiosSiteDetailsInstance.interceptors.request.use((req)=>{
  const config = attachToken2(req)
  return config
})


// imageInstance.interceptors.request.use((req) => {
//   const config = attachToken(req);
//   return config;
// });
