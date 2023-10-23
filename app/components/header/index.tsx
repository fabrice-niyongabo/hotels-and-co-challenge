"use client";

import React from "react";
import { FaAtlassian, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  return (
    <nav className=" py-5 border-b-2">
      <div className="container  mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <FaAtlassian className="text-2xl" />
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="flex items-center justify-between gap-5 shadow py-2 px-5 rounded-full hover:cursor-pointer hover:shadow-lg">
                <AiOutlineMenu className="text-1xl" />
                <FaUserCircle className="text-2xl" />
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white full shadow-md rounded-md w-56 mt-3 py-1"
                align="end"
              >
                <DropdownMenu.Item className="px-5 hover:bg-gray-100 hover:cursor-pointer outline-none text-sm py-3 font-semibold">
                  Sign up
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-5 hover:bg-gray-100 hover:cursor-pointer outline-none text-sm py-3">
                  Login
                </DropdownMenu.Item>
                <DropdownMenu.Separator
                  className="my-2"
                  style={{ height: "1px", backgroundColor: "#CCC" }}
                />
                <DropdownMenu.Item className="px-5 hover:bg-gray-100 hover:cursor-pointer outline-none text-sm py-3">
                  Help center
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
}

export default Header;
