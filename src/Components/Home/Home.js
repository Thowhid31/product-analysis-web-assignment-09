import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='h1-container-home'>
                    <h1>Explore Our <br></br> Wimpy Kid<br></br>Collection...</h1>
                </div>
                <div className='home-img'>
                    <img src="https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg" alt="" />
                </div>
            </div>
            <div>
                <h2>Here some reviews of our Customers</h2>
                
            </div>
            <div>
                <button className='review-btn'>
                    <Link to='/review'>See More</Link>
                </button>
            </div>
        </div>

    );
};

export default Home;