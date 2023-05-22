import React from "react";
import "../styles/Home.css";
import Hero from "../pages/Hero";
import Jewelry from "../pages/Jewelry";
import Electronics from "../pages/Electronics";
import Women from "../pages/Women";
const Home = ({cartItem,setCartItem, handleAddToCart}) => {
  return (
    <div className="container">
      <Hero cartItem={cartItem} setCartItem={setCartItem} handleAddToCart={handleAddToCart}/>
      <Jewelry/>
      <Electronics/>
      <Women/>
    </div>
  );
};

export default Home;
