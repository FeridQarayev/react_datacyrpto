import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { products } = useSelector((state) => state.favorites);
  return (
    <div
      style={{
        fontSize: "20px",
        backgroundColor: "rgba(207, 216, 220, 0.6)",
        height: "80px",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Link className="navbar__link" to="/">
          Home
        </Link>
        <Link className="navbar__link" to="/favorites">
          Favorites
          <span
            style={{
              position: "absolute",
              bottom: "50%",
              backgroundColor: "red",
              borderRadius: "50%",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              padding: "1px 4px",
            }}
          >
            {products.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
