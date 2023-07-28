/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-dropdown";
import Navbar from "./Navbar";
import "react-dropdown/style.css";
import {
    createBookForApp,
    fetchData,
    removeBookFromApp,
} from "../redux/books/booksSlice";

const BookStore = () => {
    const data = useSelector((state) => state.data.data);
    console.log(data);
    const loading = useSelector((state) => state.data.loading);
    console.log(loading);
    const error = useSelector((state) => state.data.error);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const options = [
        "Actions",
        "Science Fiction",
        "Economy",
        "Fiction",
        "NonFiction",
    ];

    const item_id = Date.now();
    const newBook = { item_id, title, author, category };

    const handleAddBook = () => {
        console.log("clicked");
        dispatch(createBookForApp(newBook));
        setTitle("");
        setAuthor("");
        setCategory("");
    };

    const handleRemoveBook = (itemId) => {
        console.log("clicked");
        dispatch(removeBookFromApp(itemId));
    };

    const bookArr = Object.entries(data).map(([id, data]) => {
        const [item] = data;
        return { id, ...item };
    });
    console.log(bookArr);

    return (
        <div>
            <Navbar />
            <div className="bookstore">
                <div className="book-center">
                    {bookArr.map((book, i) => {
                        return (
                            <div className="books" key={i}>
                                <div className="book-left">
                                    <p>{book.category}</p>
                                    <h1>{book.title}</h1>
                                    <p>{book.author}</p>
                                </div>
                                <div className="book-actions">
                                    <button type="button">Comments</button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveBook(book.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                    <button type="button">Edit</button>
                                </div>
                            </div>
                        );
                    })}

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
                                onChange={(selectedOptions) =>
                                    setCategory(selectedOptions.value)
                                }
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
/* eslint-enable */
