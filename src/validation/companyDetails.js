import * as yup from "yup"

const phoneRegExp = /^((\+[0-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const companyDetailsValidation = yup.object().shape({
    clientId: yup
        .number()
        .typeError('Invalid format. Please enter a valid ID.') 
        .min(2,'Enter Valid Id')
        .required('Required'), 
    name: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
    address : yup
        .string()
        .min(10, 'Enter Valid Address')
        .required('Required'),
    mobile : yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    ownerName: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
})
