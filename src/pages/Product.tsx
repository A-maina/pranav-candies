import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { formatKsh, products } from "../data/products";

export default function Product() {
  const { slug } = useParams();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="container section"><h1>Sweet not found</h1><Link to="/shop">Back to shop</Link></div>;
  }

  return (
    <div className="container section product-page">
      <div className="product-big" style={{ background: product.bg }}>
        <div className="cart-thumb" style={{ background: product.bg }}>
  <img src={product.image} alt={product.name} />
</div>
      </div>
      <div>
        <span className="tag">{product.flavour}</span>
        <h1>{product.name}</h1>
        <p className="lead">{product.description}</p>
        <p className="price">{formatKsh(product.price)}</p>
        <div className="qty">
          <button className="icon-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button className="icon-btn" onClick={() => setQty(qty + 1)}>+</button>
        </div>
        <div className="btn-row">
          <button className="btn" onClick={() => { add(product, qty); setAdded(true); }}>Add to cart</button>
          <Link to="/cart" className="btn btn-outline">View cart</Link>
        </div>
        {added && <p className="success">Added to your cart ✓</p>}
      </div>
    </div>
  );
}