import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { sendBook } from '../../redux/thunks/actionThunks';
import classes from './AddBook.module.css';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const authorInputHandler = (e) => {
    setAuthor(e.target.value);
  };

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const id = uuid().slice(0, 8);
    if (title !== '' && author !== '') {
      const book = {
        item_id: id,
        title,
        author,
        category: author,
      };

      dispatch(sendBook(book));
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <section className={classes.form_section}>
      <h3> ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="book title"
          onChange={titleInputHandler}
          required
        />
        <input
          type="text"
          placeholder="book author"
          onChange={authorInputHandler}
          required
        />
        <button type="submit" onClick={addBookHandler}>
          ADD
        </button>
        {error && <p className={classes.error}>Invalid input</p>}
      </form>
    </section>
  );
};

export default AddBooks;
