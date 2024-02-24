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
}

export const axiosUserInstance = createInstance("http://localhost:5173");
export const imageInstance = createInstance("https://sacrosys.net:6662/api/9132");

axiosUserInstance.interceptors.request.use((req) => {
  const config = attachToken(req);
  return config;
});

// imageInstance.interceptors.request.use((req) => {
//   const config = attachToken(req);
//   return config;
// });
