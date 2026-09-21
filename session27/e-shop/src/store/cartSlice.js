import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload; // {id:1,}
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (quantity > 0) {
        existingItem.quantity = quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, removeCartItem, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((t, i) => t + i.quantity, 0);
export const cartTotal = (state) =>
  state.cart.items.reduce((t, i) => t + i.price * i.quantity, 0);

export default cartSlice.reducer;
