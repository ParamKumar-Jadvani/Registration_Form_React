import React, { useState } from "react";
import "./Form.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ValidationForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !price || !category) {
      toast.error("All Fields Required !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      return;
    }
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <div className="input-Div">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ValidationForm;
