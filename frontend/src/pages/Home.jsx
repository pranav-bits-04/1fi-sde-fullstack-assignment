import React, { useEffect, useState } from "react";
import { getProducts } from "../api.js";
import ProductCard from "../components/ProductCard.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ loading: true, error: "" });

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setState({ loading: false, error: "" });
      })
      .catch((error) => setState({ loading: false, error: error.message }));
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">SMART PURCHASES • FLEXIBLE EMIs</span>
          <h1>Choose your next device.<br />Pay comfortably every month.</h1>
          <p>Explore premium smartphones with multiple EMI options backed by your investments.</p>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FEATURED PRODUCTS</span>
            <h2>Shop smartphones on EMI</h2>
          </div>
          <span className="count">{products.length} products</span>
        </div>

        {state.loading && <Loading />}
        {!state.loading && state.error && <ErrorMessage message={state.error} />}

        {!state.loading && !state.error && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
