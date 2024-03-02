import axios from "axios";
import {
  axiosUserInstance,
  imageInstance,
} from "../axios";
const token =
  "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd";


export const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append("imageFiles",file)
  try {
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
  // { "fileNames":["638443039782161121_Screenshot 2024-02-11 at 10.57.05 PM.png"] }
  try {
    const response = await imageInstance.delete("/DeleteImages",{
      data: { fileNames: [file] },
    });
    console.log(response,' the response')
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
          OpMode: value?.OpMode,
          UserId: value?.userId ? value?.userId : "",
          UserName: value?.userName,
          Password: value?.password,
          Privilage: value?.authorization,
          isActive: value?.isActive,
        },
      }
    );
    console.log(response)
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
