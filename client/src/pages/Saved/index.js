import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import BookContainer from "../../components/BookContainer";
import "./style.css"

function Search() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = () => {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    const handleClick = book => {
        API.removeBook(book._id)
        .then(() => loadBooks())
        .catch(err => console.log(err))
    }

    return (
        <div className="Saved">
            <h3>Saved Books</h3>
            {savedBooks.map(book => <BookContainer key={book._id} {...book} handleClick={handleClick} />)}
        </div>
    );
}

export default Search;  