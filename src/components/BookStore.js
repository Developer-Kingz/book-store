import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import Navbar from './Navbar';
import 'react-dropdown/style.css';
import {
  createBookForApp,
  fetchData,
  removeBookFromApp,
} from '../redux/books/booksSlice';

const BookStore = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const options = [
    'Actions',
    'Science Fiction',
    'Economy',
    'Fiction',
    'NonFiction',
  ];

  const itemId = Date.now();
  const newBook = {
    item_id: itemId,
    title,
    author,
    category,
  };

  const handleAddBook = () => {
    dispatch(createBookForApp(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookFromApp(itemId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const bookArr = Object.entries(data).map(([id, data]) => {
    const [item] = data;
    return { id, ...item };
  });

  return (
    <div className="book-container">
      <Navbar />
      <div className="bookstore">
        <div className="book-center">
          {bookArr.map((book) => (
            <div className="books" key={book.id}>
              <div className="book-left">
                <p className="book-cat">{book.category}</p>
                <h1 className="book-title">{book.title}</h1>
                <p className="book-auth">{book.author}</p>
              </div>
              <div className="book-actions">
                <button type="button" className="book-btn">
                  Comments
                </button>
                <button
                  type="button"
                  className="book-btn"
                  onClick={() => handleRemoveBook(book.id)}
                >
                  Remove
                </button>
                <button type="button" className="book-btn">
                  Edit
                </button>
              </div>
              <div className="progress">
                <div className="progress-circle" />
                <div className="show-progress">
                  <h1>64%</h1>
                  {' '}
                  <p>completed</p>
                </div>
              </div>
              <div className="chapter">
                <p className="book-cat">CURRENT CHAPTER</p>
                <p className="chapt">Chapter 17</p>
                <button type="button" className="progress-btn">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          ))}

          <div className="input-cont">
            <span className="add-new">
              <h1>ADD NEW BOOK</h1>
            </span>
            <form className="input-form">
              <input
                type="text"
                placeholder="Book title"
                className="book-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Author"
                className="book-input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Dropdown
                options={options}
                value={category}
                onChange={(selectedOptions) => setCategory(selectedOptions.value)}
              />
              <button
                className="add-btn"
                type="button"
                onClick={handleAddBook}
              >
                ADD BOOK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
