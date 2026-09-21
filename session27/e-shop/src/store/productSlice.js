import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// RTK query, ceateApi , fetchBaseQuery,

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    return data.products;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //pending
    // "products/fetchProducts/pending"
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    // API success
    // "products/fetchProducts/fulfilled"
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    // error
    // "products/fetchProducts/rejected"
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
