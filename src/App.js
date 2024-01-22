import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from local storage on mount
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Save products to local storage whenever products change
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

  const calculateTotalValue = () => {
    let total = 0;

    for (const product of products) {
      total += Math.floor(product.sellingPrice);
    }

    return total;
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      <h3>Total Value Worth of Products: Rs.{calculateTotalValue()}</h3>
    </div>
  );
};

export default App;
