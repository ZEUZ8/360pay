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
  const token = process.env.Token;
  console.log(token, " the token fron the dotenv");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
}

export const axiosUserInstance = createInstance("http://localhost:5173");

axiosUserInstance.interceptors.request.use((req) => {
  const config = attachToken(req);
  return config;
});






export const imagUpladingInstance = createInstance(
  "https://sacrosys.net:6662/api/9132"
);

imagUpladingInstance.interceptors.request.use((req) => {
  console.log("consoling in the interceptors and the future class");
  console.log(req, " the req in th hand");
  return req;
});
