import React from 'react';
import Book from '../Book/Book';
import useBooks from '../hooks/useBooks';

const Review = () => {
    const [books] = useBooks()
    return (
        <div>
            <p style={{'font-size': '50px'}}>Here All Review of Our Books!</p>
            {
                books.map(book => <Book
                key={book.id}
                book={book}></Book>)
            }
        </div>
    );
};

export default Review;