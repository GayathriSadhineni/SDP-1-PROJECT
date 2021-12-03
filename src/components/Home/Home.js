import React from 'react';
import Carousel from '../carousel/Carousel';
import Card from '../cards/Card';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carousel />
            <Card />
        </div>
    )
}

export default Home
