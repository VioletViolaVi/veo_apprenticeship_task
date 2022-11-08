import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-bg">
      <section className="upper-half">
        <div>
          <h4>Partnership</h4>
          <p>Websites</p>
          <p>Social Media</p>
          <p>Branding</p>
        </div>

        <div>
          <h4>About</h4>
          <p>Our Projects</p>
          <p>Careers</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Support Request</p>
          <p>Contact</p>
        </div>
      </section>

      <hr />

      <section className="lower-half">
        <div>
          <p>All rights reserved 2022</p>
        </div>

        <div>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
