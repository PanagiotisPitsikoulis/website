import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/features/sidebarSlice";

function Navbar() {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div className='py-4 md:py-2 bg-neutral-900 flex flex-row justify-start items-center px-5'>
        <h1 className='font-bold text-xl text-blue-500'>Copmany</h1>
        <div className='mx-auto'></div>
        <button onClick={handleToggleSidebar}>
          <Bars3Icon className='h-6 w-6 text-white' />
        </button>
      </div>
    </>
  );
}

export default Navbar;
