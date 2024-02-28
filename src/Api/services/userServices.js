import axios from "axios";
import {
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
  try {
    const formData = new FormData();
    const response = await imageInstance.post("/UploadImages", formData, {
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteImage = async (file) => {
  try {
    const response = await imageInstance.delete("/DeleteImages", {
      headers: {
        Token: token,
      },
      data: { fileNames: [file] },
      // No need for Content-Type or request body for DELETE requests
    });

    return response.data;
  } catch (err) {
    return err;
  }
};

export const uploadSiteDetails = async (value) => {
  try {
    const response = await axiosUserInstance.post("/postSiteMasterOP", {
      opMode: value?.opMode,
      siteId: 0,
      siteName: value?.siteName,
      siteTarget: value?.targetWage,
      siteLocation: value?.location,
      siteMobileNo: value?.mobile,
      isActive: value?.isActive,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const UploadEmployeeDetails = async (data) => {
  try {
    const response = axiosUserInstance.post(
      "/postemployeeMasterOP",
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const postUserMaster = async (value) => {
  try {
    const response = await axiosUserInstance.post(
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
    return response;
  } catch (err) {
    return err;
  }
};

export const getEmployeeWageData = async (data) => {
  try {
    const response = await axiosUserInstance.get(
      "/getEmployeeWageSummary",
      {
        headers: {
          EmployeeId: data.empId,
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getUserMasterList = async () => {
  try {
    const response = await axiosUserInstance.get("/getUserMasterList");
    return response;
  } catch (error) {
    return error;
  }
};

export const getEmployeeList = async ()=>{
  try{
    const response = await axiosUserInstance.get("/getemployeeMasterList")
    return response
  }catch(err){
    return err
  }
}
