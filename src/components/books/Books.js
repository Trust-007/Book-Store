import Book from './Book';
import classes from './Books.module.css';

const Books = () => {
  const books = [];
  const bookList = books.map((item) => (
    <Book key={item.id} title={item.title} author={item.author} />
  ));
  let content;
  if (bookList.length === 0) {
    content = 'No Books Found';
  } else {
    content = bookList;
  }
  return <div className={classes.content}>{content}</div>;
};

export default Books;
