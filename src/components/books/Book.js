import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/thunks/actionThunks';
import classes from './Book.module.css';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className={classes.book}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={removeBookHandler}>
        Remove
      </button>
    </div>
  );
};

export default Book;
