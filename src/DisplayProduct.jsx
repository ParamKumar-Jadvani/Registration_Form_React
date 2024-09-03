import React from "react";
import "./DisplayProduct.css";

const DisplayProduct = ({ id, product }) => {
  return (
    <div key={id} className="product-div">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => console.log("Delete product")}>Delete</button>
    </div>
  );
};

export default DisplayProduct;
