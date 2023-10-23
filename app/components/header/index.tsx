import React from "react";
import { FaAtlassian, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <nav className=" py-5 border-b-2">
      <div className="container  mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <FaAtlassian className="text-2xl" />
          </div>
          <div className="flex items-center justify-between gap-5 shadow-md py-2 px-5 rounded-full hover:cursor-pointer">
            <AiOutlineMenu className="text-2xl" />
            <FaUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
