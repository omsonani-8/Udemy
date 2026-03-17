import React from "react";
import CreateCourse from "./CreateCourse";

export default function InstructorDashboard() {
  return (
    <div className="w-full h-screen flex">
      {/* sidebar */}
      <div className="w-1/6 bg-gray-800 text-white p-4 sticky -z-1">
        <h2 className="text-xl font-bold mb-4">Instructor Dashboard</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">My Courses</li>
          <li className="border-white border-b mt-10"></li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Logout</li>
        </ul>
      </div>

      
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl  mb-4">Instructor Dashboard</h1>
        <CreateCourse></CreateCourse>
      </div>
    </div>
  );
}
