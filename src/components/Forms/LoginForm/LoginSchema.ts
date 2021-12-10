import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Requires"),
});
