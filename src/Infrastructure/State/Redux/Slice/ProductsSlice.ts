import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '@Domain/Entities/Product';

interface GlobalState {
  products: Product[];
}

const initialState: GlobalState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export default {
  reducer: productsSlice.reducer,
  actions: productsSlice.actions,
};
