import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { toast, Toaster } from "react-hot-toast";
import {
  clearFavorites,
  removeProductFromFavorites,
} from "../../redux/slice/favorites";

export const Favorites = () => {
  const { products } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  return (
    <div className="home">
      <Navbar />
      <div className="modal" style={{ textAlign: "center" }}>
        <h1 className="modal__up">Favorites</h1>
        {products &&
          products.map((product) => (
            <div key={product.market_cap_rank}>
              <span>
                <b>Rank:</b>
                {product.market_cap_rank}
              </span>
              &nbsp;
              <span>
                <b>Name:</b>
                {product.name}
              </span>
              &nbsp;
              <span>
                <b>Price:</b>${product.current_price}
              </span>
              &nbsp;
              <span>
                <b>Market Cap:</b>${product.market_cap}
              </span>
              &nbsp;
              <button
                className="favoritesRemoveBtn"
                onClick={() => {
                  dispatch(removeProductFromFavorites(product.id));
                  toast.success("Successfully deleted!");
                }}
              >
                Remove
              </button>
            </div>
          ))}
        {products.length != 0 ? (
          <button
            className="favoritesBtnClear"
            onClick={() => dispatch(clearFavorites())}
          >
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default Favorites;
