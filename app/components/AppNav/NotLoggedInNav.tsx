"use client";
import Link from "next/link";
import React from "react";
import CustomInputSearch from "./CustomSearchBtn/CustomInputSearch";
import Image from "next/image";
import cart from "@/app/assets/imgs/Cart1.png";
import user from "@/app/assets/imgs/user.png";
import menuIcon from "@/app/assets/svgs/menuIcon.svg";
import useCheckIsMobile from "@/app/hooks/useCheckIsMobile";
const NotLoggedInNav = () => {
  const isMobile = useCheckIsMobile();
  const loggedIn = true;
  return (
    <div>
      {isMobile ? (
        <div className="w-full px-5 py-3 flex justify-between items-center border border-b-2 border-y-0 border-x-none">
          <p className="font-extrabold text-lg">Infinity</p>
          <div>
            {loggedIn && (
              <div className="flex justify-between items-center">
                <div className="relative">
                  <Image className="mr-3" src={cart} alt="cart Image" />
                  <p className="absolute text-xs bg-red-500 px-[5px] py-[.5px] rounded-[100%] right-2 -top-1 text-center text-white">
                    1
                  </p>
                </div>
                <div>
                  <Image src={user} alt="cart Image" />
                </div>
              </div>
            )}
          </div>
          <div>
            <Image src={menuIcon} alt="Menu icon" width={25} />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full px-14 py-6 flex justify-between items-center border border-b-2 border-y-0 border-x-none">
            <div>
              <p className=" font-semibold text-lg">Infinity Gadgets</p>
            </div>

            <div className=" flex items-center">
              <Link href={"#"} className="mr-4 ">
                Home
              </Link>
              <Link href={"#"} className="mr-4 ">
                Contact{" "}
              </Link>
              <Link href={"#"} className="mr-4 ">
                {" "}
                About{" "}
              </Link>
              <Link href={"#"} className="mr-4 ">
                SignUp
              </Link>
            </div>
            <div className="flex items-center w-[30%] justify-between">
              <CustomInputSearch
                type="text"
                placeholder="What are you looking for?"
              />
              {loggedIn && (
                <>
                  <div className="relative">
                    <Image className="mr-3" src={cart} alt="cart Image" />
                    <p className="absolute text-xs bg-red-500 px-[5px] py-[3px] rounded-[100%] right-0 -top-2 text-center text-white">
                      20
                    </p>
                  </div>
                  <div>
                    <Image src={user} alt="cart Image" />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotLoggedInNav;
