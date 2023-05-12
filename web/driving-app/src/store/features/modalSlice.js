import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      document.body.classList.add("overflow-hidden");
    },
    closeModal: (state) => {
      state.isOpen = false;
      document.body.classList.remove("overflow-hidden");
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
