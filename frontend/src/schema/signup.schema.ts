import * as yup from "yup";
import { EMAIL_REGEX, PHONE_REGEX } from "../constant";

export const signupSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_no: yup.string().matches(PHONE_REGEX, 'Phone number must be exactly 10 digits').required('Required'),
  email: yup.string().matches(EMAIL_REGEX, 'Invalid email address').required('Required'),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  role_id: yup.number().required("Role is required"),
  profilePicture: yup
    .mixed<FileList>()
    .test("fileType", "Only JPG, JPEG, PNG files are allowed", (value) => {
      if (!value || value.length === 0) return true; 
      const file = value[0];
      return ["image/jpeg", "image/png", "image/jpg"].includes(file.type);
    })
    .test("fileSize", "File too large (max 2MB)", (value) => {
      if (!value || value.length === 0) return true;
      const file = value[0];
      return file.size <= 2 * 1024 * 1024;
    })
    .optional(),
});

export const editProfileSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_no: yup.string().matches(PHONE_REGEX, 'Phone number must be exactly 10 digits').required('Required'),
 
});