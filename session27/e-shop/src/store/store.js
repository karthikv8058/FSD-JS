import { configureStore } from "@reduxjs/toolkit";
import cartRedcuer from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartRedcuer,
  },
});
