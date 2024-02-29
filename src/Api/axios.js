import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJrb1NDSEQvNTZVZ3lmdWdLWXJ0N05TWlVQYzhvM29Gd2RzSUdrVHZyZ04xUnVxbVZlSk5Zck5pRmY2d3JpTHQ0V0JxKytnazRuQjl6THdjd0VIWVJHSmFZTUNRTmdGemdVTzRrQko2TVh2YzBtS0l2dThMbEp3SzNwYVg4SXBRYlk1TGovZllYNTZQeDVsOEFneC9jUnNvbWdRb1Bma3h0TGpXbExxdWxlZjdrWG1GK3MvTVBUbzVETzA2a2h2ST0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA5MTk0MTAxLCJleHAiOjE3MDkyODA1MDEsImlhdCI6MTcwOTE5NDEwMX0.KUE19rzX4snyswBYwzLDPXAkXlFf9HJ3D0FS0UwCfy0";

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

