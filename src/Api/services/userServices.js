import axios from "axios";
import { axiosUserInstance, imageInstance } from "../axios";
const token =
  "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd";
// export const uploadImage = async(image)=>{
//     try{
//         const response = await axiosUserInstance.post("/uploadImage",image)
//         return response
//     }catch(err){
//         console.log(err)
//         return err
//     }
// };

export const uploadImage = async (file) => {
  console.log(file, " the file");
  try {
    const formData = new FormData();
    formData.append("imageFiles", file);
    console.log('entered in the coe')
    const response = await imageInstance.post("/UploadImages", formData, {
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response,'consoling in the service page')
    return response;
  } catch (err) {
    console.log(err, " error in image upload services");
    return err;
  }
};

export const deleteImage = async (file) => {
  console.log(file, " consoling in the service function");
  try {
    const response = await axios.delete("https://sacrosys.net:6662/api/9132/DeleteImages", {
      headers: {
        Token: token,
      },
      data:{fileNames:[file]}
      // No need for Content-Type or request body for DELETE requests
    });

    console.log(response.data," consoling the result in the service page");
    return response.data;
  } catch (err) {
    console.log(err, "the err message");
    throw err;
  }
};
