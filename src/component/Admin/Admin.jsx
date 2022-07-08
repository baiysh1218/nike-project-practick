import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Admin = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [delivery, setDelivery] = useState("");
  const [imageTwo, setImageTwo] = useState("");

  function handleSave() {
    let newProduct = {
      name,
      price: +price,
      description,
      image,
      imageTwo,
      delivery,
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
      <div className="inp-admin-style">
        <h2 className="h2-admin">Add Product</h2>
        <input
          className="inp-admin"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          className="inp-admin"
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          placeholder="price"
        />
        <input
          className="inp-admin"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        />

        <input
          className="inp-admin"
          value={delivery}
          onChange={e => setDelivery(e.target.value)}
          type="text"
          placeholder="delivery"
        />
        <input
          className="inp-admin"
          value={image}
          onChange={e => setImage(e.target.value)}
          type="text"
          placeholder="img"
        />
        <input
          className="inp-admin"
          value={imageTwo}
          onChange={e => setImageTwo(e.target.value)}
          type="text"
          placeholder="imgTwo"
        />

        <button className="btn-admin" onClick={() => handleSave()}>
          save
        </button>
      </div>
    </div>
  );
};

export default Admin;
