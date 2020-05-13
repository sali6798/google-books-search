import React, { useState } from "react";
import BookContainer from "../../components/BookContainer"
import API from "../../utils/API"
import "./style.css"

function Search() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    
    const handleInputChange = event => {
        setSearch(event.target.value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();

        API.search(search)
            .then(({ data }) => {
                console.log(data);
                setBooks(data.items);
            })
            .catch(err => console.log(err))
    }

    const handleClick = book => {
        console.log(book)
        API.save({
            title: book.title,
            subtitle: book.subtitle,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: "https://www.google.com/books/edition/_/" + book.id
        })
        .then(newBook => console.log(newBook.data))

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
            handleClick={handleClick}
        />;
    }

    return (
        <div className="Search">
            <form className="uk-search uk-search-default" onSubmit={handleSubmit}> 
                <button className="uk-search-icon-flip" type="submit" uk-search-icon="true"></button>
                <input className="uk-search-input" type="search" value={search} placeholder="Search For A Book" onChange={handleInputChange}/>
            </form>
            {books.map(book => displayBook(book))}
        </div>
    );
}

export default Search;