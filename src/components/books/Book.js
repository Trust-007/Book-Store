/*eslint-disable */
import { useDispatch } from "react-redux";
import { booksActions } from "../../redux/books/books";
import classes from "./Book.module.css";

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(booksActions.removeBook(id));
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
