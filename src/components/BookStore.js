import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BookStore = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(
      addBook({
        item_id: '4',
        title: 'Awesome book',
        author: 'Kingsley Igbor',
      }),
    );
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook({ id }));
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
            />
            <select name="" id="" className="book-select">
              <option value="">Action</option>
              <option value="">Science Fiction</option>
              <option value="">Economy</option>
            </select>
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
  );
};

export default BookStore;
