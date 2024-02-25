import axios from "axios";
import { axiosSiteDetailsInstance, axiosUserInstance, imageInstance } from "../axios";
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
    const response = await imageInstance.delete("/DeleteImages", {
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
    return err;
  }
};


export const uploadSiteDetails = async (value)=>{
  console.log(value,' the values in the console, the king is back' )
  try{
    const response = await axiosSiteDetailsInstance.post("/postSiteMasterOP",value)
    return response
  }catch(err){
    console.log(err,' error in the uploading site details service')
    return err
  }
}


export const UploadEmployeeDetails = async(data)=>{
  console.log(data,' the datat in the condoel')
  try{
    const response = axiosSiteDetailsInstance.post("/postemployeeMasterOP",data)
    console.log(response, ' response consoling in the service page')
    return response
  }catch(error){
    console.log(error,' the error in the console')
    return error
  }
}