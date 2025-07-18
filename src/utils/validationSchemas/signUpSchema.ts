import * as yup from "yup";

export default yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(4, "Full name must be at least 4 characters")
    .max(50, "Full name must be less than 50 characters"),
  role: yup
    .string()
    .oneOf(["freelancer", "customer"])
    .required("Role is required"),
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
