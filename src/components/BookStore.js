import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import Navbar from './Navbar';
import { addBook, removeBook } from '../redux/books/booksSlice';
import 'react-dropdown/style.css';

const BookStore = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const options = [
    'Actions',
    'Science Fiction',
    'Economy',
    'Fiction',
    'NonFiction',
  ];

  const id = books.length + 1;

  const handleAddBook = () => {
    dispatch(
      addBook({
        item_id: `item${id}`,
        title,
        author,
        category,
      }),
    );
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook({ itemId }));
  };

  return (
    <div>
      <Navbar />
      <div className="bookstore">
        <div className="book-center">
          {books.map((book) => (
            <div className="books" key={book.item_id}>
              <div className="book-left">
                <p>{book.category}</p>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
              </div>
              <div className="book-actions">
                <button type="button">Comments</button>
                <button
                  type="button"
                  onClick={() => handleRemoveBook(book.item_id)}
                >
                  Remove
                </button>
                <button type="button">Edit</button>
              </div>
            </div>
          ))}

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
            <div>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
