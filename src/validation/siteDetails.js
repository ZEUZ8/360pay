import * as yup from "yup"

const phoneRegExp = /^((\+[0-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const siteDetailsValidation = yup.object().shape({
   
    siteName: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
    targetWage: yup
        .number()
        .min(3,'Atleast 2 charecters')
        .typeError('Invalid format. Please enter a valid ID.') 
        .required('Required'), 
    location : yup
        .string()
        .min(5, 'Enter Valid Address')
        .required('Required'),
    mobile : yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
})
