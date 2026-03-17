import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../common/Input/TextInput";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constant/routesPath";
import { loginValidationSchema } from "../../../schema/login.schema";
import { ToastContainer } from "react-toastify";
import type { LoginDetail } from "../../../interfaces";
import { useEffect, useState } from "react";
import { loginUser } from "../../../api/user.api";
import axios from "axios";
import { showErrorToast } from "../../../common/Toaster/toast";
import { dispatchSetUser } from "../../../redux/dispatch/user.despatch";


const LoginForm = () => {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginValidationSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: LoginDetail) => {
    const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  setSubmittedData(formData);
  };

    useEffect(() => {
      if (!submittedData) return;
      const submitUser = async () => {
        try {
          const data =  await loginUser(submittedData);
          console.log("data",data);
          dispatchSetUser(data);
          setSubmittedData(null);
          navigate(ROUTES.DEFAULT.path);
        } catch (error:unknown) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
            showErrorToast(error.response.data.message);  
            } else {
            showErrorToast(error.message);  
              console.error("Request setup error:", error.message);
            }
          } else {  
            console.error("Unexpected error:", error);
          }
        }
      };
      submitUser();
    }, [submittedData, navigate]);
  

  return (
    <div className="w-full flex flex-col my-4 border-0 border-[#6D28D2]  rounded-2xl">
      <div className="w-full border-1 bg-[#F0F2F9] border-[#6D28D2]  rounded-2xl p-5">
        <div className="flex font-bold text-2xl p-1 text-center">
          <p className="text-[#6D28D2]  text-center">Login</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4">
          <Input
            label="Email"
            name="email"
            placeholder="Enter your registered email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password?.message}
          />

          <div className="flex justify-center mt-4 gap-4">
            <Button
              type="submit"
              className="mt-3 text-[15px] w-auto p-2 bg-[#6D28D2]  text-white"
            >
              Login
            </Button>
            <Button
              type="button"
              onClick={() => navigate(ROUTES.REGISTER.path)}
              className="mt-3 text-[15px] text-[#6D28D2]  w-auto p-2 bg-white "
            >
              Register
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer>    
      </ToastContainer>
    </div>
  );
};

export default LoginForm;
