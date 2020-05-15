import React, { useState, useEffect } from "react";
import BookContainer from "../../components/BookContainer"
import API from "../../utils/API"
import "./style.css"

function Search() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
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

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        API.search(search)
            .then(({ data }) => {
                setBooks(data.items);
            })
            .catch(err => console.log(err))
    }

    const handleClick = (book, action) => {
        if (action === "Save") {
            API.save({
                title: book.title,
                subtitle: book.subtitle,
                authors: book.authors,
                description: book.description,
                image: book.image,
                link: "https://www.google.com/books/edition/_/" + book.id
            })
                .then(newBook => {
                    setSavedBooks(savedBooks.concat(newBook.data));
                })
        }
        else {
            const removeBook = savedBooks.find(savedBook => savedBook.link === book.link)
            API.removeBook(removeBook._id)
                .then(res => loadBooks())
                .catch(err => console.log(err))
        }
    }

    const displayBook = book => {
        const info = book.volumeInfo;
        return <BookContainer
            key={book.id}
            id={book.id}
            title={info.title}
            subtitle={info.subtitle}
            authors={info.authors}
            description={info.description}
            image={info.imageLinks ? info.imageLinks.thumbnail : null}
            link={"https://www.google.com/books/edition/_/" + book.id}
            type="search"
            savedBooks={savedBooks}
            handleClick={handleClick}
        />;
    }

    return (
        <div className="Search">
            <form className="uk-search uk-search-default" onSubmit={handleSubmit}>
                <button className="uk-search-icon-flip" type="submit" uk-search-icon="true"></button>
                <input className="uk-search-input" type="search" value={search} placeholder="Search For A Book" onChange={handleInputChange} />
            </form>
            {!books ? <h3 className="error">No books exist with this title!</h3> : books.map(book => displayBook(book))}
        </div>
    );
}

export default Search;