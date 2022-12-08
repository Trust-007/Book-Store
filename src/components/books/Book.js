/*eslint-disable */
import classes from "./Book.module.css";

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className={classes.book}>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
