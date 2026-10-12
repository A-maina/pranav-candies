import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { formatKsh, type Product } from "../data/products.ts";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="card product-card">
      <Link to={`/products/${product.slug}`} className="product-img" style={{ background: product.bg }}>
        {product.badge && <span className="pill-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-body">
        <span className="tag">{product.flavour}</span>
        <h3><Link to={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.description}</p>
        <div className="product-foot">
          <strong>{formatKsh(product.price)}</strong>
          <button className="btn btn-sm" onClick={() => add(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}