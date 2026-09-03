import React from "react";
import { Link } from "react-router-dom";

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

export default function ProductCard({ product }) {
  const variant = product.variants[0];

  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="card-image-wrap">
        <img src={variant.image} alt={`${product.name} ${variant.name}`} />
      </div>
      <div className="card-content">
        <span className="brand">{product.brand}</span>
        <h3>{product.name}</h3>
        <p className="muted">{variant.storage} • {variant.name}</p>
        <div className="price-row">
          <strong>{money(variant.price)}</strong>
          <span className="mrp">{money(variant.mrp)}</span>
        </div>
        <span className="view-link">View EMI plans →</span>
      </div>
    </Link>
  );
}
