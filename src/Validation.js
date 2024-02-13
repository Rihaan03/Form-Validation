import * as Yup from "yup";
export const ValidationSchema = Yup.object({
  name: Yup.string().min(3, "Minimum 3 characters").required("Required"),
  email: Yup.string()
    .email()
    .matches(/^(?!.*@[^,]*,)/)
    .required("Cannot be empty"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required(),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
