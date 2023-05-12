import React from "react";
import ProductGrid from "../products/ProductGrid";
import Hero from "../hero/Hero";

function HomeLayout() {
  return (
    <div className='bg-gray-500'>
      <h1 className='pb-2 text-center'>Home page</h1>
      <div className='grid grid-cols-4 grid-rows-4 text-center min-h-[300vh]'>
        <div className='col-span-4 row-span-1 bg-gray'>
          <Hero />
        </div>
        <div className='col-span-4 row-span-3 bg-black'>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
