import React, { useState, useEffect } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";
import { ImBook } from "react-icons/im";
import { FaBaseballBall } from "react-icons/fa";

function TopBar() {
  const categories = [
    { name: "Electronics", icon: <BsFillPhoneFill /> },
    { name: "Clothing", icon: <FaTshirt /> },
    { name: "Home & Kitchen", icon: <BsHouseFill /> },
    { name: "Beauty", icon: <GiLargeDress /> },
    { name: "Toys & Games", icon: <FaBaseballBall /> },
    { name: "Books", icon: <ImBook /> },
    { name: "Sports & Outdoors", icon: <FaBaseballBall /> },
  ];

  return (
    <>
      <div className='bg-neutral-900 -mx-5 -mt-5 py-3 mb-5 text-center sticky top-0'>
        {/* Search bar */}
        <div className='my-1 mx-5'>
          <input
            className='px-4 w-full py-3 rounded-2xl bg-neutral-800 border-none text-neutral-100 placeholder-neutral-400 focus:outline-none'
            type='text'
            placeholder='Search products...'
          />
        </div>
        {/* Categories */}
        <div className='flex overflow-x-scroll mx-5'>
          {categories.map((category) => (
            <div
              key={category.name}
              className='flex-shrink-0 mx-3 flex flex-row justify-center items-center py-1 my-3 border-r border-neutral-600 pr-3'>
              {category.icon}
              <a
                href='#'
                className='block text-neutral-200 hover:text-white ml-2 text-sm'>
                {category.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopBar;
