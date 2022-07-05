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
  const [gender, setGender] = useState("");
  const [delivery, setDelivery] = useState("");
  const [functional, setFunctional] = useState("");

  function handleSave() {
    let newProduct = {
      name,
      price,
      description,
      gender,
      image,
      delivery,
      functional,
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
          type="text"
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
          value={gender}
          onChange={e => setGender(e.target.value)}
          type="text"
          placeholder="gender"
        />
        <input
          className="inp-admin"
          value={functional}
          onChange={e => setFunctional(e.target.value)}
          type="text"
          placeholder="functional"
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
        <button className="btn-admin" onClick={() => handleSave()}>
          save
        </button>
      </div>
    </div>
  );
};

export default Admin;
