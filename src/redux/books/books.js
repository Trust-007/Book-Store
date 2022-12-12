import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
      } else {
        return state;
      }
      return '';
    },
    removeBook(state, action) {
      if (action.payload) {
        state.filter((book) => {
          if (book.id !== action.payload) {
            return book;
          }
          return '';
        });
      } else {
        return state;
      }
      return '';
    },
  },
});

export const booksAction = booksSlice.actions;

export default booksSlice.reducer;
