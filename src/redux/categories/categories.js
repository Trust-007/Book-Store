import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const categoriesAction = categorySlice.actions;

export default categorySlice.reducer;
