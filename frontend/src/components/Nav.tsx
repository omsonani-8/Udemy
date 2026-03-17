
import React from "react";
import logo from "../assets/logo-udemy.svg"
import Input from "../common/Input/TextInput";
import Button from "../common/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/routesPath";
import { useSelector } from "react-redux";
import { currentUser } from "../redux/ducks/userLogin";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar:React.FC = () => {

    const navigate = useNavigate();
    const isLoggedIn = useSelector(currentUser);


  return (
    <nav className="w-full bg-[#FFFFFF] shadow-md p-4 flex items-center justify-between">

      <div className="text-2xl font-bold text-blue-600">
        <img className="w-25" src={logo} ></img>
      </div>

      <div className="flex-1 mx-30">
        <Input
          type="text"
          placeholder="Search Course..."
          className="w-full max-w-lg px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Button className="px-4 py-2 border-none rounded hover:bg-gray-100"><FaShoppingCart  size={"20px"} color={"#6D28D2"} /></Button>
        {isLoggedIn ? 
        <>
        <Button className="px-4 py-2 border-none rounded hover:bg-gray-100" onClick={() => navigate(ROUTES.EDIT_PROFILE.path)}><CgProfile size={"20px"} color={"#6D28D2"} /></Button>
        <Button className="px-4 py-2 border-none rounded hover:bg-gray-100" onClick={()=> navigate(ROUTES.LOGIN.path)}><HiOutlineLogout size={"20px"} color={"#6D28D2"} /></Button>
        </>
        :
        (<>
          <Button className="px-4 py-2 border rounded   text-[#6c12f3] border-[#6D28D2]" onClick={() => navigate(ROUTES.LOGIN.path)} >Login</Button>
        <Button className="px-4 py-2 bg-[#6D28D2] text-white rounded hover:bg-[#6D28D2]" onClick={() => navigate(ROUTES.REGISTER.path)}>Signup</Button>
        </>
        )
}
      </div>
    </nav>
  );
};

export default Navbar;
