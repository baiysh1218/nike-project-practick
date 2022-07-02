import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Admin = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    let newProduct = {
      name,
      price,
      description,
      image,
    };
    if (!name.trim() || !price.trim() || !description.trim() || !image) {
      alert("заполните поля!");
    } else {
      createProduct(newProduct);
      navigate("/all-product");
    }
    console.log(newProduct);
  }
  return (
    <div className="container">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="text"
        placeholder="price"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        type="text"
        placeholder="img"
      />
      <button onClick={() => handleSave()}>save</button>
    </div>
  );
};

export default Admin;
