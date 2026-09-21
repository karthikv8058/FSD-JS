import { configureStore } from "@reduxjs/toolkit";
import cartRedcuer from "./cartSlice";
import productRedcuer from "./productSlice";
export const store = configureStore({
  reducer: {
    cart: cartRedcuer,
    products: productRedcuer,
  },
});
