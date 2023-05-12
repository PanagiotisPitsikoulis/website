import React, { useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";
import { ImBook } from "react-icons/im";
import { FaBaseballBall } from "react-icons/fa";

function SideBar() {
  const categories = [
    { name: "Electronics", icon: <BsFillPhoneFill /> },
    { name: "Clothing", icon: <FaTshirt /> },
    { name: "Home & Kitchen", icon: <BsHouseFill /> },
    { name: "Beauty", icon: <GiLargeDress /> },
    { name: "Toys & Games", icon: <FaBaseballBall /> },
    { name: "Books", icon: <ImBook /> },
    { name: "Sports & Outdoors", icon: <BsFillPhoneFill /> },
  ];
  return (
    <>
      <div className='p-4'>
        {categories.map((category) => (
          <div
            key={category.name}
            className='flex items-center my-5 w-full h-full border-b border-neutral-600 pb-3 mb-8'>
            {category.icon}
            <a
              href='#'
              className='text-neutral-200 hover:text-white ml-2 hidden 
              md:block'>
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default SideBar;
