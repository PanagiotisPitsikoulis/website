import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/features/sidebarSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 transition-opacity bg-neutral-800 bg-opacity-75 z-20'
          onClick={handleToggleSidebar}
        />
      )}
      <div className='bg-neutral-900 text-gray-100 h-screen w-full md:w-64 px-4 flex flex-col fixed top-0 right-0 z-30'>
        <div className='flex items-center justify-center h-16'>
          <h1 className='text-xl font-bold'>My App</h1>
        </div>
        <nav className='flex-grow'>
          <ul className='flex flex-col py-4'>
            <li>
              <a
                href='#'
                className='px-4 py-2 hover:bg-gray-700'>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-4 py-2 hover:bg-gray-700'>
                Profile
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-4 py-2 hover:bg-gray-700'>
                Settings
              </a>
            </li>
            <li>
              <button
                className='px-4 py-2'
                onClick={handleToggleSidebar}>
                Close
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
