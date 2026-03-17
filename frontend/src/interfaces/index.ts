
export interface UserAttributes {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_no: string;
  profilePicture?: string;
  role_id: number;
}

export type UserReduxState = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_no: string;
  profilePicture?: string;
  role_id: number;
  isLoggedIn: boolean;
};

export interface SignupData {
  first_name: string;
  last_name: string;
  phone_no:string;
  email: string;
  password: string;
  profilePicture?: FileList; 
  role_id: number;
}
export interface LoginDetail {
  email: string;
  password: string;
}