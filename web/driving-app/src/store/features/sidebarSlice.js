import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSidebar(state) {
      state.isOpen = !state.isOpen;
      if (state.isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSidebar } = sidebarSlice.actions;
