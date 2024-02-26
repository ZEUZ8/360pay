import axios from "axios";
import {
  axiosSiteDetailsInstance,
  axiosUserInstance,
  imageInstance,
} from "../axios";
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
    console.log("entered in the coe");
    const response = await imageInstance.post("/UploadImages", formData, {
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response, "consoling in the service page");
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
      data: { fileNames: [file] },
      // No need for Content-Type or request body for DELETE requests
    });

    console.log(response.data, " consoling the result in the service page");
    return response.data;
  } catch (err) {
    console.log(err, "the err message");
    return err;
  }
};

export const uploadSiteDetails = async (value) => {
  try {
    const response = await axiosSiteDetailsInstance.post(
      "/postSiteMasterOP",
      {
        opMode: value?.opMode,
        siteId: 0,
        siteName: value?.siteName,
        siteTarget: value?.targetWage,
        siteLocation: value?.location,
        siteMobileNo: value?.mobile,
        isActive: value?.isActive,
      }
    );
    return response;
  } catch (err) {
    console.log(err, " error in the uploading site details service");
    return err;
  }
};

export const UploadEmployeeDetails = async (data) => {
  console.log(data, " the datat in the condoel");
  try {
    const response = axiosSiteDetailsInstance.post(
      "/postemployeeMasterOP",
      data
    );
    console.log(response, " response consoling in the service page");
    return response;
  } catch (error) {
    console.log(error, " the error in the console");
    return error;
  }
};

export const postUserMaster = async (value) => {
  try {
    const response = await axiosSiteDetailsInstance.post(
      "/postUserMasterOP",
      null,
      {
        headers: {
          OpMode: value.OpMode,
          UserId: value.userId ? value.userId : "",
          UserName: value.userName,
          Password: value.password,
          Privilage: value.authorization,
          isActive: value.isActive,
        },
      }
    );
    console.log(response, " the response consoling in the serice");
    return response;
  } catch (err) {
    console.log(err, " err consoling in the service");
    return err;
  }
};

export const getEmployeeWageData = async (data) => {
  try {
    const response = await axiosSiteDetailsInstance.get(
      "/getEmployeeWageSummary",
      {
        headers: {
          EmployeeId: data.empId,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err, " the error in teh sconeo");
    return err;
  }
};

export const getUserMasterList = async () => {
  try {
    const response = await axiosSiteDetailsInstance.get("/getUserMasterList");
    console.log(
      response,
      " response consoling in the getUserMasterList service"
    );
    return response;
  } catch (error) {
    console.log(error, " error consling in the getUserMasteList service page");
    return error;
  }
};
