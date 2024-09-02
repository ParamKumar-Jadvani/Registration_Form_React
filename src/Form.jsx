import React, { useState } from "react";
import DisplayProduct from "./DisplayProduct";
import "./Form.css";

const Form = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({
      image: "",
      title: "",
      price: "",
      category: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Image URL:
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Title:
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Category:
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <button type="submit" className="form-button">
            Add Product
          </button>
        </form>
      </div>
      <div>
        <ul>
          {products.map((product, index) => (
            <DisplayProduct key={index} index={index} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
