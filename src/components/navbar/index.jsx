import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        fontSize: "20px",
        backgroundColor: "rgba(207, 216, 220, 0.6)",
        height: "80px",
        width: "100%",
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
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
