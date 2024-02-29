import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJvR2FEdlpPczZ5RzBZcUFaQWIzRnpKNjMrTk9kUkVSVXBwbDhiTUoxNHR4SjFaMjhBNHVlVU92WmFIMmt4ZUg3cEMxMHJvWkRTZk55U1Z5TUlqOW5qVkFMdnpENDN4L216bGxoOUJSQzluT29IblhBNk94bDl3UzQ5d3U1WFdkbXVqUk5tZnl3TVd2L0RtTWJsUHNVUFB3aEhHb05ZRUdaU3dlWnhwZXRUbVFXNStxaDcxU0hFUGt6SytlWlNFUT0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA5MTAzMjEyLCJleHAiOjE3MDkxODk2MTIsImlhdCI6MTcwOTEwMzIxMn0.c3fE1s0BpM2RadwTBjhLwf5uj-l76SVCcYJ87CZyorY";

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
function FileInterceptors(req) {
  // const token = localStorage.getItem("userToken")
  const token = "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd";
  if (token) {
    req.headers["Token"] = token
  }
  if(req?.url !== "/DeleteImages"){
    req.headers["Content-Type"] = "multipart/form-data";
  }
  return req
}

// functionality for attaching the token with bearer
function interceptors(req) {
  // const token = localStorage.getItem("userToken")
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req
}

export const imageInstance = createInstance("https://sacrosys.net:6662/api/9132");
export const axiosUserInstance = createInstance("https://sacrosys.net:6661/api/2654")

imageInstance.interceptors.request.use((req) => {
  const config = FileInterceptors(req);
  return config;
});

axiosUserInstance.interceptors.request.use((req)=>{
  const config = interceptors(req)
  return config
})

