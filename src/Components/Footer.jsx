import Logo from "../assets/food.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <img src={Logo} alt="Fresh Guard Logo" className="footer-logo" />
            <h3 className="footer-brand-name">Fresh Guard</h3>
            <p className="footer-tagline">
              Your smart companion for tracking food expiry dates.
              Stay fresh, stay safe, save money.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#mobile-app">Mobile App</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press Kit</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <div className="footer-contact">
              <div className="contact-item">📧 freshguard@gmail.com</div>
              <div className="contact-item">📱 +63 917 123 4567</div>
              <div className="contact-item">📍 Sorsogon, Philippines</div>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter">
              <h4 style={{ color: "var(--green-light)", marginBottom: "var(--space-xs)", fontSize: "1rem" }}>
                Stay Updated
              </h4>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Fresh Guard. All rights reserved. Made with 💚 in the Philippines.
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
