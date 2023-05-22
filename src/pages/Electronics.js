import UseFetch from "../Hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import "../styles/Electronics.css";

const Electronics = () => {
  const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

  const { data, error, loading } = UseFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container elelctronics">
      <div className="component-title-electronics">
        <h2>ELECTRONIC CATEGORY</h2>
      </div>
      <div className="electronics-container">
        {data.map((datumElectronics) => {
          const { id, image, price, title } = datumElectronics;
          return (
            <div className="h-100 p-1 text-center electronics-inner shadow-sm rounded border-3 border" key={id}>
              <Link
                className="text-decoration-none"
                to={`/SingleProduct/${id}`}
              >
                <div className="electronics-img">
                  <img className="img-fluid w-50 m-auto mt-3" src={image} alt={title} />
                </div>
                <p className="fw-bold ">${price}</p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumElectronics);
                  notify();
                }}
                className="btn btn-primary text-white mb-3"
              >
                add to cart
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
