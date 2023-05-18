import React, { useContext } from 'react'
import {useParams,Link} from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { FadeLoader } from 'react-spinners'
import CartContext from '../Hooks/CartContext'

const SingleProduct = () => {
  const {handleAddToCart} = useContext(CartContext)
    const {id} = useParams() 
    const {data,loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
    const {title, image, description, price, rating} = data

  return (
    <div>
        <div className='container'>
          {loading && <FadeLoader color={'red'} size={150} /> }
          <div className='row justify-content-center align-items-center mt-4'>
            <div className=' col-sm-12 text-center col-md-4'>
             <img className=' img-fluid w-100 ' src={image} alt="{title}" />
            </div>
            <div className='col-lg-8'>
                <h1 className='text-danger fw-bold'> {title} </h1>
                <h4 className='text-success lh-base'> {description} </h4>
                <h3>${price} </h3>
                <div className=' d-flex flex-column '>
                <button onClick={()=> handleAddToCart(data)} className='btn btn-primary my-4'>add to cart</button>
            <Link to='/' className='btn btn-primary my-1 '>
                Back to home
            </Link>
                </div>
          
            </div>

          </div>
        </div>

    </div>
  )
}

export default SingleProduct