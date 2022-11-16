import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

const HelloMarco = () => <h1>Hello Marco!</h1>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HelloMarco />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
