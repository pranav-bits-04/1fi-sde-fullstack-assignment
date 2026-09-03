import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api.js";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import EmiPlan from "../components/EmiPlan.jsx";

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [state, setState] = useState({ loading: true, error: "" });
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setState({ loading: true, error: "" });
    getProduct(slug)
      .then((data) => {
        setProduct(data);
        setSelectedVariant(0);
        setSelectedPlan(data.emiPlans[0]);
        setState({ loading: false, error: "" });
      })
      .catch((error) => setState({ loading: false, error: error.message }));
  }, [slug]);

  const variant = useMemo(
    () => product?.variants[selectedVariant],
    [product, selectedVariant]
  );

  if (state.loading) {
    return <main className="container section"><Loading /></main>;
  }

  if (state.error || !product || !variant) {
    return <main className="container section"><ErrorMessage message={state.error || "Product not found"} /></main>;
  }

  function proceed() {
    if (!selectedPlan) {
      setNotice("Please select an EMI plan first.");
      return;
    }

    setNotice(
      `Selected ${product.name} (${variant.storage}, ${variant.name}) on ${selectedPlan.tenure}-month EMI at ${selectedPlan.interestRate}% interest.`
    );
  }

  return (
    <main className="container section">
      <Link className="back-link" to="/">← Back to products</Link>

      <div className="product-layout">
        <section className="product-visual">
          <div className="large-image-wrap">
            <img src={variant.image} alt={`${product.name} ${variant.name}`} />
          </div>
          <div className="variant-thumbs">
            {product.variants.map((item, index) => (
              <button
                key={`${item.name}-${item.storage}`}
                type="button"
                className={selectedVariant === index ? "thumb active" : "thumb"}
                onClick={() => setSelectedVariant(index)}
              >
                <img src={item.image} alt={item.name} />
              </button>
            ))}
          </div>
        </section>

        <section className="product-info">
          <span className="brand">{product.brand}</span>
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>

          <div className="variant-section">
            <h3>Choose variant</h3>
            <div className="variant-options">
              {product.variants.map((item, index) => (
                <button
                  type="button"
                  key={`${item.name}-${item.storage}`}
                  className={selectedVariant === index ? "variant-option active" : "variant-option"}
                  onClick={() => setSelectedVariant(index)}
                >
                  <strong>{item.name}</strong>
                  <span>{item.storage}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="price-box">
            <span>MRP <s>{money(variant.mrp)}</s></span>
            <strong>{money(variant.price)}</strong>
            <span className="saving">Save {money(variant.mrp - variant.price)}</span>
          </div>

          <div className="emi-section">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">FLEXIBLE PAYMENT</span>
                <h2>Select an EMI plan</h2>
              </div>
            </div>

            <div className="emi-list">
              {product.emiPlans.map((plan) => (
                <EmiPlan
                  key={`${plan.tenure}-${plan.interestRate}`}
                  plan={plan}
                  selected={selectedPlan?.tenure === plan.tenure && selectedPlan?.interestRate === plan.interestRate}
                  onSelect={setSelectedPlan}
                />
              ))}
            </div>
          </div>

          <button className="primary-button" onClick={proceed}>
            Proceed with selected plan →
          </button>

          {notice && <div className="success-message">{notice}</div>}
        </section>
      </div>
    </main>
  );
}
