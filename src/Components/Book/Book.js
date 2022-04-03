import React from 'react';

const Book = (props) => {
    const {name, ratings, img, price} = props.book;
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>Name: {name}</h1>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Book;