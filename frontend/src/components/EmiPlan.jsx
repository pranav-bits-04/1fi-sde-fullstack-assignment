import React from "react";
const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

export default function EmiPlan({ plan, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`emi-plan ${selected ? "selected" : ""}`}
      onClick={() => onSelect(plan)}
    >
      <span className="radio">{selected ? "●" : "○"}</span>
      <span className="emi-main">
        <strong>{money(plan.monthlyPayment)} / month</strong>
        <span>{plan.tenure} months</span>
      </span>
      <span className="emi-meta">
        <span>{plan.interestRate}% interest</span>
        {plan.cashback > 0 && <span className="cashback">₹{plan.cashback.toLocaleString("en-IN")} cashback</span>}
      </span>
    </button>
  );
}
