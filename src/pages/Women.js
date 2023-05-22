import UseFetch from "../Hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import "../styles/Women.css";

const Women = () => {
  const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

  const { data, error, loading } = UseFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container women">
      <div className="component-title-women">
        <h2>WOMEN'S CATEGORY</h2>
      </div>
      <div className="women-container">
        {data.map((datumWomen) => {
          const { id, image, price, title } = datumWomen;
          return (
            <div className="h-100 p-1 text-center shadow-sm rounded border-3 border" key={id}>
              <Link
                className="text-decoration-none"
                to={`/SingleProduct/${id}`}
              >
                <div className="women-img">
                  <img className="img-fluid w-50 m-auto mt-3 " src={image} alt={title} />
                </div>
                <p className="fw-bold">${price}</p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumWomen);
                  notify();
                }}
                className="btn btn-primary text-white mb-3 "
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

export default Women;
