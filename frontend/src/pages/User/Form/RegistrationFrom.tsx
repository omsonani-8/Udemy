import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../common/Input/TextInput";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "../../../schema/signup.schema";
import FileInput from "../../../common/Input/FileInput";
import { useEffect, useState } from "react";
import { createUser } from "../../../api/user.api";
import { ROUTES } from "../../../constant/routesPath";
import type { SignupData } from "../../../interfaces";
import { ToastContainer } from "react-toastify";




const UserForm = () => {

  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const onSubmit = (data:SignupData) => {
  const formData = new FormData();

  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phone_no", data.phone_no);
  formData.append("role_id", data.role_id.toString());
  if (data.profilePicture) {
    formData.append("profilePicture", data.profilePicture[0]);
  }
  console.log(formData);
  setSubmittedData(formData);
  };

  useEffect(() => {
    if (!submittedData) return;
    const submitUser = async () => {
      try {
        console.log("side effect");
        console.log(submittedData);
        const data = await createUser(submittedData);
        console.log("data",data);
        setSubmittedData(null);
        navigate(ROUTES.LOGIN.path);
      } catch (error) {
          console.log(error);
      }
    };

    submitUser();
  }, [submittedData, navigate]);

  return (
    <div className="w-full flex flex-col my-4 border-0 border-[#6D28D2] rounded-2xl">
      <div className="w-full border-1 bg-[#F0F2F9] border-[#6D28D2] rounded-2xl p-5">
        <div className="flex font-bold text-2xl p-1 text-center">
          <p className="text-[#6D28D2] text-center">Sign up with email</p>
        </div>

        <div className="w-full flex flex-col gap-y-4">
          
          <Input
            label="First Name"
            name="first_name"
            placeholder="Enter first name"
            register={register}
            error={errors.first_name?.message}
          />
          <Input
            label="Last Name"
            name="last_name"
            placeholder="Enter last name"
            register={register}
            error={errors.last_name?.message}
          />
          <Input
            label="Phone"
            name="phone_no"
            placeholder="Enter phone"
            register={register}
            error={errors.phone_no?.message}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Enter email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            register={register}
            error={errors.password?.message}
          />
          <FileInput
            name="profilePicture"
            label="Upload Profile Picture"
            accept="image/*"
            register={register}
            error={errors.profilePicture?.message}
          />
          <Input
            label="Role ID"
            name="role_id"
            type="number"
            placeholder="Enter role ID"
            register={register}
            error={errors.role_id?.message}
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button className="mt-3 text-[15px] w-auto p-2 bg-[#6D28D2] text-white" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </div>
      </div>
      <ToastContainer>
      </ToastContainer>
    </div>
  );
};

export default UserForm;
