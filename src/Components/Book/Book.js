import React from 'react';

const Book = (props) => {
    const {name, ratings, img, price, reviewer} = props.book;
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>Reviewer: {reviewer}</h1>
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Book;