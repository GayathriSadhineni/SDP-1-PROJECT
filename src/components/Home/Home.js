import React from 'react';
import Carousel from '../carousel/Carousel';
import Card from '../cards/Card';
import {FooterContainer} from '../FooterModule/containers/footer';
const Home = () => {
    return (
        <div>
            <Carousel />
            <Card />
            <FooterContainer />
        </div>
    )
}

export default Home
