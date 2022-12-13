import { useSelector, useDispatch } from 'react-redux';
import { categoriesAction } from '../../redux/categories/categories';

const CategoryContent = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    dispatch(categoriesAction.checkStatus());
  };
  return (
    <div style={{ marginTop: '20%', marginLeft: '5%' }}>
      <p style={{ color: 'white' }}>{categories}</p>
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </div>
  );
};

export default CategoryContent;
