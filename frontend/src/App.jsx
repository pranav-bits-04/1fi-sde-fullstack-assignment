import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          <span className="logo-mark">1</span>Fi
        </Link>
        <nav>
          <Link to="/">Products</Link>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
