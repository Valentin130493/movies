import * as Yup from "yup";

export const registrationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Enter valid user name")
    .matches(/[a-zA-Z.@+-]/, "Name has invalid symbols.")
    .required("Required"),
  password: Yup.string()
    .min(6, "This password is too short. It must contain at least 8 characters")
    .matches(/[a-zA-Z]/, "This password is entirely numeric")
    .required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid email")
    .min(5)
    .max(30)
    .required("Required"),
});
