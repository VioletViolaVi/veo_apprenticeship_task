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
      <header className="small-header-bg">
        {showLinks ? (
          <i class="fa-solid fa-xmark" onClick={handleClick}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={handleClick}></i>
        )}

        {showLinks ? (
          <nav className="small-nav-container">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#aboutUs">About Us</a>
            <a href="#ourSuppliers">Our Suppliers</a>
            <a href="#ourValues">Our Values</a>
            <a href="#contactUs">Contact Us</a>
          </nav>
        ) : null}

        <a href="#home">
          <img src={earthImg} alt="company logo" className="logo-img" />
        </a>

        <a href="#profile">
          <i className="fa-solid fa-user"></i>
        </a>
      </header>

      <header className="large-header-bg">
        <img src={earthImg} alt="company logo" className="logo-img" />

        <nav className="large-nav-container">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#aboutUs">About Us</a>
          <a href="#ourSuppliers">Our Suppliers</a>
          <a href="#ourValues">Our Values</a>
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
