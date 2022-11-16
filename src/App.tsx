import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/CategoryPage';
import ExperiencesPage from './components/ExperiencesPage';
import HomePage from './components/HomePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route path='/' element={<ExperiencesPage />} />
        <Route path='/category/:categoryId' element={<CategoryPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
