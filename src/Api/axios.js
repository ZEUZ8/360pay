import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJHOUFGcGF4WjFOemUrd3h4R3RJSHA0WGtWV3Rma1E3a0xXbC9tcExpWGV5d0dsSmpLbjBTc1ErS3h0REZqUkRDTk54QkFta2VYR2lYS1JNbEl4cy9sTnJVL0krMzVsYWRaaldRRjNWMHkwWGVQN1Q3ejk5VTNxT1dPSWd0eWJwRlc1N2tLbXE4Wk5RWE5zSEcvQWw2S0V3TjhKK0dBTTY0QnBhWVRHWC90dTZIYlNBVDh0NVVpVGdjN3JOS2pxVT0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA5MDY3MDI5LCJleHAiOjE3MDkxNTM0MjksImlhdCI6MTcwOTA2NzAyOX0.nN2BLfonz3o5vqQFdqxkxQyVshmrL5fZ3x3InwtXra4";

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
  req.headers["Content-Type"] = "multipart/form-data";
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

