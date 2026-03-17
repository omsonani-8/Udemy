import type React from "react";
import loginIMage from "../../assets/desktop-illustration-step-2-x1.webp"
import LoginForm from "../User/Form/LoginForm";


const Login: React.FC = () => {
  return (<div className=" w-full h-screen flex gap-x-50 justify-center items-center">
    <div className="w-1/3 ">
      <div className="">
        <img className="size-10/12" src={loginIMage}>
        </img>
      </div>
    </div>
    <div className="w-4/12">
      <LoginForm></LoginForm>
    </div>
  </div>);
}

export default Login;