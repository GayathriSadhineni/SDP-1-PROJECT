import React from "react";
import Carousel from "../carousel/Carousel";
import Card from "../cards/Card";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <h1 className="popchoice">Popular Choices</h1>
      <Card />
    </div>
  );
};

export default Home;
