import * as Yup from 'yup';
import { EMAIL_REGEX } from '../constant';
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEX, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be 20 characters or less')
    .required('Required')
});
export type FormLoginData = Yup.InferType<typeof loginValidationSchema>;