import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, flavours, testimonials } from "../data/products";
import mascot from "../assets/mascot.png";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="tag">Made fresh in Nairobi</span>
            <h1>All sweet things start here.</h1>
<p className="lead">Cool mints, fruity bursts, spicy kicks and creamy classics, delivered to your door.</p>
            <div className="btn-row">
              <Link to="/shop" className="btn">Shop Now</Link>
              <Link to="/stores" className="btn btn-outline">Visit a store</Link>
            </div>
          </div>
          <div className="hero-art">
              <img src={mascot} alt="Pranav Candies mascot holding the Pranav sign" />
            </div>
        </div>
      </section>

      <section className="section container">
        <h2>Best sellers</h2>
        <div className="grid">
          {products.filter((p) => p.bestSeller).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="section container">
        <h2>Pick your flavour</h2>
        <div className="grid">
          {flavours.map((f) => (
            <div key={f.name} className="card flavour" style={{ background: f.bg }}>
              <span className="emoji">{f.emoji}</span>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>Sweet words</h2>
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card quote">
              <div className="stars">★★★★★</div>
              <p>“{t.text}”</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}