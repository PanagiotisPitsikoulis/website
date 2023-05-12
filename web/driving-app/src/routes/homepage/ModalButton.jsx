import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/features/modalSlice";
function ModalButton() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
    </div>
  );
}

export default ModalButton;
