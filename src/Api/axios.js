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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJCRDRiMHVKdTdKWEdjZzZjcHN6eFI0cWZOclAwRlVVamRqOFE0ZE1yMmh6aVJmNitzYzErcnphdC8vck9qOHlVVWlGbjU0VllTd1BKRStkVVZmekpZWm9TK2lDSmhlaGxxN2F1NURScVZXMHN2OFpTVGlQMlBxUU1IY0ZQVGhaNEY1TCswVEw2WXNDZitlcjVqenVyT3RoM2pkNFc4RXpGd1JlTzc0ZFc2Sno1ejZxTFU5Vm5XNldMZ0ZvMXRsaz0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA4ODU5ODg0LCJleHAiOjE3MDg5NDYyODQsImlhdCI6MTcwODg1OTg4NH0.1z2PG3hYr4TuDUc8I7nRyIS022Bpgv1Mvy9PHhneLt4";
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
