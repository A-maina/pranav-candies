import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.price <= maxPrice &&
      (p.name + p.flavour + p.description).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container section">
      <h1>Shop all sweets</h1>
      <div className="filters">
        <input placeholder="Search sweets or flavours…" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}>
          <option value={1000}>Any price</option>
          <option value={400}>Up to KSh 400</option>
          <option value={600}>Up to KSh 600</option>
          <option value={700}>Up to KSh 700</option>
        </select>
      </div>
      {filtered.length === 0 ? <p>No sweets match your search 🍬</p> : (
        <div className="grid">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      )}
    </div>
  );
}