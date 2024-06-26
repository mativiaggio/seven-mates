import React from "react";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline, IoMenu } from "react-icons/io5";
import CategoriesDropdown from "./CategoriesDropdown";
import Aside from "./Aside";
import { ModeToggle } from "../mode-toggle";
import Logo from "./Logo";
import Burger from "./Burger";

function TopMenu() {
  return (
    <nav className=" bg-[#121212] h-fit min-h-[5vh]">
      {/* <div className="flex px-5 py-1 justify-center items-center w-full">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div> */}
      <div className="flex py-1 justify-between items-center w-full">
        <div className="flex px-5 py-1 items-center w-1/3 justify-start">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:flex w-full lg:justify-center">
          <Link
            className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
            href={"/productos"}
          >
            Productos
          </Link>
          <Link
            className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
            href={""}
          >
            <CategoriesDropdown />
          </Link>
          <Link
            className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
            href={"/sobre-nosotros"}
          >
            Sobre Nosotros
          </Link>
          <Link
            className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
            href={"/contactanos"}
          >
            Contáctanos
          </Link>
        </div>
        <div className="flex justify-end items-center gap-4 mx-2 w-1/3">
          <ModeToggle />
          <Link className="mx-2" href={"/cart"}>
            <div className="relative">
              <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2  bg-white text-black">
                3
              </span>
              <IoCartOutline className="w-5 h-5 text-white" />
            </div>
          </Link>
          <Aside />
          <div className="block lg:hidden">
            <Burger />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;
