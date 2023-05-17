import { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import SingleProduct from './layout/SingleProduct';

function App() {
  const[cartItem, setCartItem] = useState([])
  return (
    <div className="">
      <BrowserRouter>
      <Navbar cartItem={cartItem}/>
      <Routes>
        <Route index element={<Home cartItem={cartItem} setCartItem={setCartItem}/>}/>
        <Route path='/Cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>
        <Route path='/SingleProduct/:id' element={<SingleProduct cartItem={cartItem} setCartItem={setCartItem}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
