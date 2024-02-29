import * as yup from "yup"

export const userMasterValidation = yup.object().shape({
    userName: yup
        .string()
        .min(2,'Atleast 2 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
    password:yup
        .string()
        .min(5, 'password should contain 5-16 characters')
        .max(16, 'password should contain 5-16 characters')
        // .matches(passwordRule, 'Please create a stronger password')
        .required('Required'),
    authorization: yup
        .string()
        .min(1, 'Privilage must not be empty')
        .test('notEmpty', 'Empty string is not allowed', value => value.trim() !== '')
        .required("Required")
})
