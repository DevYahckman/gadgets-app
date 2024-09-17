import Link from "next/link";
import React from "react";
import hero from "@/app/assets/imgs/hero.png";
import appleImage from "@/app/assets/imgs/appleLogo.png";
import arrow from "@/app/assets/imgs/arrowRight.png";
import Image from "next/image";

interface SideNaveProp {
  name: string;
}

const Banner = () => {
  const sideNavData = [
    { name: `Woman's Design` },
    { name: `Men’s Fashion` },
    { name: `Electronics` },
    { name: `Home & Lifestyle` },
    { name: `Medicine` },
    { name: `Sports & Outdoor` },
    { name: `Baby’s & Toys` },
    { name: `Groceries & Pets` },
    { name: `Health & Beauty` },
  ];

  return (
    <div className="md:py-5 md:grid md:grid-cols-4 gap-10   ">
      <div className=" border-r hidden md:block h-full">
        {sideNavData.map((item: SideNaveProp) => (
          <Link
            key={item.name}
            href={"#"}
            className="text-deepBlack block text-base leading-10"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className=" md:col-span-3  h-full ">
        <div className="  md:grid bg-deepBlack h-full p-5 md:py-10 md:px-20  grid-cols-2">
          <div className=" items-center text-infinityWhite  px-9 ">
            <p className=" flex items-center">
              <Image src={appleImage} alt="" className="mr-3" /> iPhone 14
              Series
            </p>

            <p className="text-5xl font-bold mt-5 w-[90%] leading-[70px]">
              Up to 10% off Voucher
            </p>

            <Link href={"#"} className="flex items-center mt-8">
              {" "}
              <p>Shop Now</p>
              <p>
                <Image src={arrow} alt="" className="ml-2" />{" "}
              </p>
            </Link>
          </div>

          <div className="">
            <Image src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
