import React from 'react';
import Book from '../Book/Book';
import useBooks from '../Books/useBooks';

const Review = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
            {
                books.map(book => <Book></Book>)
            }
        </div>
    );
};

export default Review;