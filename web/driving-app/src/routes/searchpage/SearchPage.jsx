import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Product from "../products/Product";

function SearchPage() {
  const items = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for Item 1",
      category: "Category 1",
      image: "https://picsum.photos/500",
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for Item 2",
      category: "Category 2",
      image: "https://picsum.photos/800",
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description for Item 3",
      category: "Category 1",
      image: "https://picsum.photos/600",
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description for Item 4",
      category: "Category 3",
      image: "https://picsum.photos/700",
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description for Item 5",
      category: "Category 2",
      image: "https://picsum.photos/900",
    },
    {
      id: 6,
      name: "Item 6",
      description: "Description for Item 6",
      category: "Category 3",
      image: "https://picsum.photos/550",
    },
  ];

  return (
    <div>
      <div className='md:hidden'>
        <TopBar />
      </div>
      <div>
        {/* <div className='hidden md:col-span-2 bg-neutral-700 rounded-r-xl -ml-5'>
          <SideBar />
        </div> */}
        <div>
          <div className='grid md:grid-cols-3 min-h-screen w-full gap-10 my-5'>
            {items.map((item) => (
              <Product item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
