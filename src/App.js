import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import BookStore from './components/BookStore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
