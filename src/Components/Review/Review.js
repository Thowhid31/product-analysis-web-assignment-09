import React from 'react';
import Book from '../Book/Book';
import useBooks from '../hooks/useBooks';

const Review = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
            <h2 style={{color: 'blue'}}>Here Some Review of Our Books</h2>
            {
                books.map(book => <Book
                key={book.id}
                book={book}></Book>)
            }
        </div>
    );
};

export default Review;