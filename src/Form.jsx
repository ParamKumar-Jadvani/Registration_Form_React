import React, { useState } from "react";
import DisplayProduct from "./DisplayProduct";
import "./Form.css";

const Form = () => {
  const [product, setProductList] = useState([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      title,
      img,
      price,
      category,
      id: product.length ? product[product.length] + 1 : 1,
    };

    setProductList([...product, newData]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <div className="input-Div">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="input-Div">
          <label>Image</label>
          <input type="text" onChange={(e) => setImg(e.target.value)} />
        </div>
        <div className="input-Div">
          <label>Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input-Div">
          <label>Category</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div id="submit-btn">
          <input type="submit" />
        </div>
      </form>

      <div id="product-title">
        <h3>Product List</h3>
      </div>
      <div id="product-parent-div">
        {product.map((elem) => (
          <DisplayProduct id={elem.id} product={elem} />
        ))}
      </div>
    </div>
  );
};

export default Form;
