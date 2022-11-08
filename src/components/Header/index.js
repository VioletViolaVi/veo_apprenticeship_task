import React, { useState } from "react";

import earthImg from "../../assets/images/earth.png";
import "./Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks((prevShowLinks) => {
      return !prevShowLinks;
    });
  };
  console.log(showLinks);

  return (
    <>
      <header className="header-bg">
        <i className="fa-solid fa-bars" onClick={handleClick}></i>

        {showLinks ? (
          <nav className="nav-container">
            <a href="#home">Home</a>
            <a href="#aboutUs">About Us</a>
            <a href="#ourSuppliers">Our Suppliers</a>
            <a href="#ourValues">Our Values</a>
            <a href="#products">Products</a>
            <a href="#contactUs">Contact Us</a>
          </nav>
        ) : null}

        <img src={earthImg} alt="company logo" className="logo-img" />

        <i className="fa-solid fa-user"></i>
      </header>

      <header className="header-bg2">
        <img src={earthImg} alt="company logo" className="logo-img" />

        <nav className="nav-container2">
          <a href="#home">Home</a>
          <a href="#aboutUs">About Us</a>
          <a href="#ourSuppliers">Our Suppliers</a>
          <a href="#ourValues">Our Values</a>
          <a href="#products">Products</a>
          <a href="#contactUs">Contact Us</a>
        </nav>

        <div>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
