import * as yup from "yup";

export default yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one lowercase letter and one number",
    )
    .required("Password is required"),
});
