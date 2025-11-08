// App.js
import React from "react";
import ProductCard from "./components/productCard";

const App = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Products List</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard name="Wireless Mouse" price="25.99" status="In Stock" />
        <ProductCard name="Keyboard" price="45.5" status="Out of Stock" />
        <ProductCard name="Monitor" price="199.99" status="In Stock" />
      </div>
    </div>
  );
};

export default App;
