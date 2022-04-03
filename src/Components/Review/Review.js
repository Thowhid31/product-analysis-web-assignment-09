import React from 'react';
import useBooks from '../Books/useBooks';

const Review = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
            <div>
                <h1>{books.length}</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Review;