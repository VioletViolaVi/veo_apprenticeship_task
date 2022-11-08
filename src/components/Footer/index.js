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
          <a href="#twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#youtube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
