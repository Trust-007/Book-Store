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
      <div className={classes.title_author}>
        <div>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className={classes.btns}>
          <button type="button" className={classes.btn}>
            Comments
          </button>
          <button
            type="button"
            className={classes.removeBtn}
            onClick={removeBookHandler}
          >
            Remove
          </button>
          <button type="button" className={classes.btn}>
            Edit
          </button>
        </div>
      </div>
      <div className={classes.unused}>
        <div className={classes.progress}>
          <div className={classes.circular}> </div>
          <div className={classes.progress_describe}>
            <h4>75%</h4>
            <p>Completed</p>
          </div>
        </div>
        <div className={classes.chapter}>
          <p>CURRENT CHAPTER</p>
          <h5>Chapter 8</h5>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
