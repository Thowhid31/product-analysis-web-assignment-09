import React from 'react';
import Book from '../Book/Book';
import useBooks from '../hooks/useBooks';

const Review = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
            {
                books.map(book => <Book
                key={book.id}
                book={book}></Book>)
            }
        </div>
    );
};

export default Review;