import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import useBooks from '../hooks/useBooks';
import './Home.css'


const Home = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
            <div className='home-container'>
                <div className='h1-container-home'>
                    <h1>Explore Our <br></br> Wimpy Kid<br></br>Collection...</h1>
                    <p style={{'color': 'black'}}>Wimpy Kid is an international best seller book, <br></br>which is very popular to our kid and also young people. <br></br>Book lovers Always want this types of book...</p>
                </div>
                <div className='home-img'>
                    <img src="https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg" alt="" />
                </div>
            </div>
            <div>
                <h2>Here some reviews of our Customers</h2>
                {
                    books.slice(0, 3).map(book => <Book
                        key={book.id}
                        book={book}></Book>)
                }
            </div>
            <div>
                <button className='review-btn'>
                    <Link to='/review'>See All Reviews</Link>
                </button>
            </div>
        </div>

    );
};

export default Home;