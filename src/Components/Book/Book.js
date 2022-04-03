import React from 'react';
import './Book.css'

const Book = (props) => {
    const {name, ratings, img, price, reviewer, review} = props.book;
    return (
        <div className='cart-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-container'>
                <h1>Reviewer: {reviewer}</h1>
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
                <h3>Review: {review}</h3>
            </div>
        </div>
    );
};

export default Book;