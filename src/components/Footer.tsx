import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">🍬 Pranav Candies</div>
          <p>Handmade sweets, made with joy in Nairobi.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/shop">Shop all sweets</Link>
          <Link to="/stores">Where to find us</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+254 700 000 000</p>
          <p>hello@pranavcandies.co.ke</p>
          <p>Industrial Area, Nairobi, Kenya</p>
        </div>
      </div>
      <div className="container copyright">© 2026 Pranav Candy Industries Limited</div>
    </footer>
  );
}