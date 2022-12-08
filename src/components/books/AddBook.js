import classes from './AddBook.module.css';

const AddBooks = () => (
  <section className={classes.form_section}>
    <h3> Add new Book</h3>
    <form>
      <input type="text" placeholder="Author" required />
      <input type="text" placeholder="Title" required />
      <button type="submit">Add</button>
    </form>
  </section>
);

export default AddBooks;
