import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/features/modalSlice";

function Modal() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen px-4'>
          <div
            className='fixed inset-0 transition-opacity bg-neutral-900 bg-opacity-75'
            onClick={handleCloseModal}></div>
          <div className='bg-white rounded-md max-w-md w-full mx-auto  p-6 z-10'>
            {/* Add your modal content here */}
            <h1 className='font-bold text-3xl py-5'>
              Subscribe to our newsletter!
            </h1>
            <div className='text-xl'>
              Mediabutton1 Mediabutton2 Mediabutton3{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
