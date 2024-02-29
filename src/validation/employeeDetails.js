import * as yup from "yup"


const MAX_FILE_SIZE = 102400; //100KB
const MAX_FILE_SIZES = 1024 * 1024; // 1 MB

const phoneRegExp = /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const employeeDetailsValidation = yup.object().shape({
    name: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
    mobile : yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    address : yup
        .string()
        .min(10, 'Enter Valid Address')
        .required('Required'),
    dailyWage: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .required("Required"),
    employeeType: yup 
        .string()
        .min(1,"Required")
        .required("Required")
   
})
