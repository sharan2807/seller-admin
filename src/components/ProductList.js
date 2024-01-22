import React from "react";

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div>
      <h2>Products:</h2>
      {products.map((product) => (
        <div key={product.productId}>
          <li>
            {product.productName} - Rs.{product.sellingPrice}
            {""}
            {""}
            <button onClick={() => onDeleteProduct(product.productId)}>
              Delete Product
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
