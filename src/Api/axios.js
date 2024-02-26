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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyVUJQN1l1SzhSZVV2Q1VWU29md0k5ZGhreXN6REkveTFZOTJiTi9YeDU1QUN6bGNIRGNwT055RXJyS2JzTThlSlJwNDlZdGJkVm1lZzBWVituOWJUZ3lDV1c5L1lOcVZIcUVwNTQrWWR6TjUyalJxZjhRUVRwQkNOU1kxUHFIMGlZeC9DMVl2MkxrREM3Yk16Rm1xL200bkVpWFFiQzJiN0dmRUkxcHNmVDhYamtGRzcvOFFRcTBUbmlZVXA3ND0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA4OTc5OTQ3LCJleHAiOjE3MDkwNjYzNDcsImlhdCI6MTcwODk3OTk0N30.90GxHbHKMvk_3kWJTjGsOhbbgzmzOunxktuA3kd29OY";
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
