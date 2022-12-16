import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
