import type React from "react";
import { useSelector } from "react-redux";
import { currentUser  } from "../../../redux/ducks/userLogin";
import Input from "../../../common/Input/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schema/signup.schema";
import Button from "../../../common/Button";
import type { SignupData } from "../../../interfaces";

type EditProfileData = Omit<SignupData, "id" | "email" | "password" | "role_id">;

const Profile: React.FC = () => {
  const data = useSelector(currentUser );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    resolver: yupResolver(editProfileSchema),
    mode: "onTouched",
    defaultValues: {
      first_name: data.first_name || "",
      last_name: data.last_name || "",
      phone_no: data.phone_no || "",
    },
  });

  const onSubmit = (formDataValues: EditProfileData) => {
    const formData = new FormData();
    formData.append("first_name", formDataValues.first_name);
    formData.append("last_name", formDataValues.last_name);
    formData.append("phone_no", formDataValues.phone_no);

    if (formDataValues.profilePicture) {
      formData.append("profilePicture", formDataValues.profilePicture[0]);
    }

    console.log([...formData.entries()]);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4 py-6">
      <div className="flex w-7/12 h-full shadow-lg rounded-lg border border-gray-300 overflow-hidden ">

        <div className="w-1/2 flex flex-col items-center p-6 border-r border-gray-300">
          <img
            src={`http://localhost:3000/${data.profilePicture}`}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          />
          <p className="mt-4 text-xl font-semibold text-gray-800">
            {data.first_name} {data.last_name} role_id {data.role_id}
          </p>
        </div>

        <div className="w-full p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800"> Profile</h2>
            <p className="text-sm text-gray-500">Update Profile </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-4">
              <Input
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
                register={register}
                className="border-black"
                error={errors.first_name?.message}
              />
              <Input
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
                register={register}
                className="border-black"
                error={errors.last_name?.message}
              />
              <Input
                label="Phone"
                name="phone_no"
                placeholder="Enter phone number"
                register={register}
                className="border-black"
                error={errors.phone_no?.message}
              />
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
