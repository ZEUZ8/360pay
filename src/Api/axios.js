import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJBQnVnZi94VDNYYzNaNjBNdVduRmFSK0ZRQVhKTTFDWFFad2pkTlNOTnlGSzRTL2JjVmhTU1QxYXJUMjM4aXRRT25WSjRVc3Q4SGNtelhFM2t1SFo2MStqbU9GNmJOV2R6QUpQdnNGZjRkdFNWWXdjSm9lZTdZRWJzRThIMWVMMjdvczZhTUpVWGxaL2kreWY2Sjc4eVpYbDhiWER0bnFOUEgwOCtUZ09YbzkzZ0daRGkyZlVmd3lJKzdzM0tYTT0iLCJVc2VySUQiOiIxIiwibmJmIjoxNzA5MjgyMjY0LCJleHAiOjE3MDkzNjg2NjQsImlhdCI6MTcwOTI4MjI2NH0.VN810deOf4JMgbA7C5P-hIFevZ_UGV5ZgqKYi0J4U90";

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

