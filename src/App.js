import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BooksPage from './pages/BooksPage';
import Category from './pages/Category';
import { getBooks } from './redux/thunks/actionThunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" />} replace />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
