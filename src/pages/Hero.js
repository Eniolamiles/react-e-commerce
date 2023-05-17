import { useState, useEffect } from "react";
import "../styles/Hero.css";
import useFetch from "../Hooks/useFetch";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";

const Hero = ({cartItem,setCartItem}) => {
  const { data: data2, loading: loading2, error:error2,} = useFetch(
    "https://fakestoreapi.com/products/14"
  );
  const { data: data3, loading: loading3 } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

  let handleAddToCart=(product)=>{
    const productSelected = cartItem.find((singleCartItem)=>singleCartItem.id === product.id)
    if(productSelected){
        setCartItem(cartItem.map((oneItem)=> oneItem.id === product.id ? 
        {...productSelected, quantity:productSelected.quantity + 1} : oneItem
        ))
    }else{
        setCartItem([...cartItem,{...product,quantity:1}])
    }
  }

  return (
    <div className='container hero-container'>
      <h2> {loading3 && <FadeLoader color={'red'} size={150} />}</h2>
      {error2 && <h2> {error2.message}</h2>}
      <div className='row justify-content-between gap-5'>
        <div className='col-sm-12 col-lg-6 shadow-sm border border-5 rounded '>
          <img className='w-100 hero-img' src={data2.image} alt={data2.title} />
        </div>
        {/* Card section */}
        <div className='col-sm-12 col-lg-5'>
          <div className='card-container'>
            {data3.map((datum3) => {
                const {id,title,image,price} = datum3
              return (
                <div className='h-100 p-1 text-center card-inner shadow-sm border border-3 rounded' key={id}>
                    <Link className="text-decoration-none" to={`/SingleProduct/${id}`}>
                  <img className=' img-fluid w-75' src={image} alt={title} />
                  <p className="fw-bold">${price} </p>
                    </Link>
                  <button onClick={()=>handleAddToCart(datum3)} className="btn text-white btn-primary">add to cart</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
