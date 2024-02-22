import axios from "axios";
import { axiosUserInstance, imagUpladingInstance } from "../axios";

// export const uploadImage = async(image)=>{
//     try{
//         const response = await axiosUserInstance.post("/uploadImage",image)
//         return response
//     }catch(err){
//         console.log(err)
//         return err
//     }
// };

export const uploadImage = async (image,file) => {
  const token = "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd";
  try {
    const formData = new FormData();
    formData.append("imageFiles", image,file);
    const response = await imagUpladingInstance.post(
      "/UploadImages",
      formData,
      {
        headers: {
          Token: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err.response,' error in image upload services');
    return err;
  }
};
