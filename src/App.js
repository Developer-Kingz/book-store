import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from './components/Categories';
import BookStore from './components/BookStore';

library.add(faUser);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/book-store" element={<BookStore />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
