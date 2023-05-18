import React from "react";
import "../styles/Home.css";
import Hero from "../pages/Hero";
import Jewelry from "../pages/Jewelry";
const Home = ({cartItem,setCartItem, handleAddToCart}) => {
  return (
    <div className="container">
      <Hero cartItem={cartItem} setCartItem={setCartItem} handleAddToCart={handleAddToCart}/>
      <Jewelry/>
    </div>
  );
};

export default Home;
