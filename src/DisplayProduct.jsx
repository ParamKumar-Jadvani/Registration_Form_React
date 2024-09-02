import React from "react";
import "./DisplayProduct.css";

const DisplayProduct = ({ index, product }) => {
  console.log(index, product);

  if (!product) return null;
  return (
    <li className="product-list-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">Price: {product.price}</p>
      <p className="product-category">Category: {product.category}</p>
    </li>
  );
};

export default DisplayProduct;
