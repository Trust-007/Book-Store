import { useSelector, useDispatch } from 'react-redux';
import { categoriesAction } from '../../redux/categories/categories';
import classes from './CategoryContent.module.css';

const CategoryContent = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    dispatch(categoriesAction.checkStatus());
  };
  return (
    <div className={classes.category}>
      <p>{categories}</p>
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </div>
  );
};

export default CategoryContent;
