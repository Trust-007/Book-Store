import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Harry Potter', author: 'J.K.Rowling' },
  { id: '2', title: 'Percy Jackson', author: 'Rick Riordan' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      if (action.payload.title !== '' && action.payload.author !== '') {
        const newBook = {
          id: new Date().toISOString(),
          title: action.payload.title,
          author: action.payload.author,
        };
        state.push(newBook);
      }
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
