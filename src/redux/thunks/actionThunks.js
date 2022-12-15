import axios from 'axios';
import { booksActions } from '../books/books';

const apiKey = process.env.REACT_APP_KEY;

const converter = (obj) => {
  const arr = [];
  /* eslint-disable */
  for (const item in obj) {
    /* eslint-enable */
    const newObj = {
      id: item,
      title: obj[item][0].title,
      author: obj[item][0].author,
    };
    arr.push(newObj);
  }
  return arr;
};

export const getBooks = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.get(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}
/books`,
    );
    const data = await response;
    const obj = data.data;
    const result = converter(obj);
    dispatch(booksActions.getBooks(result));
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export const sendBook = (book) => async (dispatch) => {
  const sendRequest = async () => {
    await axios.post(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}
/books`,
      { ...book },
    );
    dispatch(getBooks());
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteBook = (itemId) => async (dispatch) => {
  const sendRequest = async () => {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}
/books/${itemId}`,
      { item_id: itemId },
    );
    dispatch(getBooks());
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};
