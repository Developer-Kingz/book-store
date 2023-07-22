import React from 'react';
import Navbar from './Navbar';

const BookStore = () => {
  const lists = [
    {
      header: 'Action',
      title: 'The Hunger Games',
      name: 'Susanne Collins',
    },
    {
      header: 'Action',
      title: 'The Hunger Games',
      name: 'Susanne Collins',
    },
    {
      header: 'Action',
      title: 'The Hunger Games',
      name: 'Susanne Collins',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bookstore">
        <div className="book-center">
          {lists.map((list) => (
            <div className="books" key={list.id}>
              <div className="book-left">
                <p>{list.header}</p>
                <h1>{list.title}</h1>
                <p>{list.name}</p>
              </div>
              <div className="book-actions">
                <button type="button">Comments</button>
                <button type="button">Remove</button>
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
            <button className="add-btn" type="button">
              ADD BOOK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
