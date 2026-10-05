import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/stores", label: "Find Us" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>🍬 Pranav Candies</Link>

        <nav className="nav-desktop">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            🛒{count > 0 && <span className="badge-count">{count}</span>}
          </Link>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile container">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}