import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  const handleAddProduct = () => {
    if (productId && sellingPrice && productName) {
      onAddProduct({ productId, sellingPrice, productName });
      setProductId("");
      setSellingPrice("");
      setProductName("");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
