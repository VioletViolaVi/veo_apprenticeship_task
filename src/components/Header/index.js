import earthImg from "../../assets/images/earth.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={earthImg} alt="company logo" />
        <a href="#home">Home</a>
        <a href="#aboutUs">About Us</a>
        <a href="#ourSuppliers">Our Suppliers</a>
        <a href="#ourValues">Our Values</a>
        <a href="#products">Products</a>
        <a href="#contactUs">Contact Us</a>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user"></i>
      </nav>
    </header>
  );
}

export default Header;
