import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    modal: modalReducer,
  },
});
