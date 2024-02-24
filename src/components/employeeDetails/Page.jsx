import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../../Context/AppProvider";
import { deleteImage } from "../../Api/services/userServices";

const Page = () => {
  const { photo, setPhoto, name } = useContext(AppContext);
  const [image, setImage] = useState("/imgs/person.png");
  const [emptyUser, setEmptyUser] = useState("/imgs/emptyUser.png");
  // const [userName, setUsername] = useState("Name");

  const handleImage = async () => {
    try {
      if(image !== "/imgs/person.png"){
        const response = await deleteImage(image.Filename)
        if(response.status){
          console.log('enterd in the condition')
          setImage(emptyUser)
          setPhoto("");
        }
      }else{
        setImage(emptyUser)
      }
    } catch (err) {
      console.log(err);
    }
    setPhoto("")
   
  };

  return (
    <div className="grid max-md:grid-rows-12 md:grid-cols-2 h-[100vh] md:justify-center md:items-center ">
      <div className="max-md:row-start-2   max-md:row-span-3 grid items-end justify-center pb-5  ">
        <div className="relative">
          <IoIosClose
            className="absolute top-0  right-0 bg-white rounded-full shadow-lg hover:text-rose-600"
            onClick={handleImage}
          />
          <img
            className="w-40 h-40  rounded-full bg-stone-200"
            src={image === "/imgs/person.png" || image === "/imgs/emptyUser.png" ? image : image.FileUrl}
            alt="icon"
          />
        </div>
        <div className="flex gap-0 justify-center items-center">
          <h1 className=" p-3 text-center max-w-[9rem] overflow-x-auto whitespace-nowrap">
            {name ? name : "Name"}
          </h1>
          <img className={`w-4 h-4 `} src="./imgs/yes.png" alt="verified" />
        </div>
      </div>

      <div className="pt-5 max-md:row-span-6 mx-12 pb-3">
        <h1 className=" pb-3 xl:text-xl font-medium">Employee Details</h1>
        <div className="p-5 bg-white rounded-xl shadow-special">
          <Form setImage={setImage} image={image} />
        </div>
      </div>
    </div>
  );
};

export default Page;
