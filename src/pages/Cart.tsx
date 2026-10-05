import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { formatKsh } from "../data/products";

export default function Cart() {
  const { items, total, setQty, remove, clear } = useCart();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="container section">
        <h1>Thank you! 🎉</h1>
        <p className="lead">Your order details were captured (demo only, nothing was sent anywhere).</p>
        <Link to="/shop" className="btn">Keep shopping</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container section">
        <h1>Your cart is empty</h1>
        <Link to="/shop" className="btn">Browse sweets</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1>Your cart</h1>
      <div className="cart-layout">
        <div>
          {items.map(({ product, qty }) => (
            <div key={product.id} className="card cart-row">
              <div className="cart-thumb" style={{ background: product.bg }}>{product.emoji}</div>
              <div className="cart-info">
                <strong>{product.name}</strong>
                <span>{formatKsh(product.price)}</span>
              </div>
              <div className="qty">
                <button className="icon-btn" onClick={() => setQty(product.id, qty - 1)}>−</button>
                <span>{qty}</span>
                <button className="icon-btn" onClick={() => setQty(product.id, qty + 1)}>+</button>
              </div>
              <strong>{formatKsh(product.price * qty)}</strong>
              <button className="icon-btn" onClick={() => remove(product.id)} aria-label="Remove">🗑</button>
            </div>
          ))}
        </div>

        <form
          className="card checkout"
          onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); }}
        >
          <h3>Checkout</h3>
          <input required placeholder="Full name" />
          <input required placeholder="Phone number" />
          <input required placeholder="Delivery address" />
          <div className="total"><span>Total</span><strong>{formatKsh(total)}</strong></div>
          <button className="btn" type="submit">Place order</button>
        </form>
      </div>
    </div>
  );
}