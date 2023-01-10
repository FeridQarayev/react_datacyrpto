import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer";

export const Home = () => {
  // const [products, setProducts] = useState(null);
  // const dispatch = useDispatch();

  return (
    <div>
      <Footer />
      {/* {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                dispatch(addProductToFavorites(product));
              }}
            >
              Add to Favorite
            </button>
          </div>
        ))} */}
    </div>
  );
};

export default Home;
