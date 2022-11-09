import { useState } from "react";

import earthImg from "../../assets/images/earth.png";
import "./Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  // toggles side nav bar appearance
  const handleClick = () => {
    setShowLinks((prevShowLinks) => {
      return !prevShowLinks;
    });
  };

  return (
    <header>
      {/* nav bar for smaller screens */}
      <section className="small-header-bg">
        {/* changes icons when side nav bar opens & closes */}
        {showLinks ? (
          <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={handleClick}></i>
        )}

        {/* displays side nav bar when icon is clicked */}
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
      </section>

      {/* nav bar for larger screens */}
      <section className="large-header-bg">
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
      </section>
    </header>
  );
}

export default Header;
