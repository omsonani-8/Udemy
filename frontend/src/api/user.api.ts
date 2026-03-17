import type { AxiosRequestConfig } from "axios";
import type {  UserAttributes } from "../interfaces";
import { getApi, postApi } from "./axios";




export const getUsers = async (params?: AxiosRequestConfig["params"]) => {
  const response = await getApi<UserAttributes[]>("/users", { params });
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await getApi<UserAttributes>(`/users/${id}`);
  return response.data;
}

export const createUser = async (data: FormData) => {
  try {
    const response = await postApi<UserAttributes, FormData>("/user/create", data ,{ headers: { "Content-Type": "multipart/form-data" }});
    console.log("response",response);
    return response.data;
    
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async (data: FormData):Promise<UserAttributes> => {
  const response = await postApi<{
    success: boolean;
    message: string;
    data: UserAttributes;
  },FormData>("/user/login",data,{withCredentials: true,headers: { "Content-Type": "multipart/form-data" },}
  );
  return response.data.data;
};



export const logoutUser = async () => {
  try {
    const response = await getApi("/user/logout");
    console.log("response",response);
    return response.data;
    
  } catch (error) {
    console.log(error)
  }
}
  
  
