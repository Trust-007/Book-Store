import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../redux/books/books';
import classes from './AddBook.module.css';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const authorInputHandler = (e) => {
    setTitle(e.target.value);
  };
  const titleInputHandler = (e) => {
    setAuthor(e.target.value);
  };
  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(booksActions.addBook({ title, author }));
  };
  return (
    <section className={classes.form_section}>
      <h3> Add new Book</h3>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={titleInputHandler}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={authorInputHandler}
          required
        />
        <button type="submit" onClick={addBookHandler}>
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBooks;
