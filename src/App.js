import { Routes, Route, Navigate } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Category from './pages/Category';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" />} replace />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
