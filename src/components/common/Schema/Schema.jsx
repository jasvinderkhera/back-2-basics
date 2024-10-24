import * as Yup from "yup"

export const Schema = Yup.object({
    floatingName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 3 characters")
    .max(25, "Name cannot be greater than 25 characters")
    .required("Please enter name"),
    floatingPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits only")
    .required("Phone number is a required field"),
    floatingEmail: Yup.string()
    .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
    )
    .required('Email is required field'),
    query: Yup.string()
    .min(20, "Query must be at least 20 characters")
    .required("Please enter Your Query"),
})