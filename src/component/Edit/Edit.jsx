import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Edit = () => {
  const { newProducts, editProduct, updateProduct } =
    useContext(productsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    editProduct(id);
  }, []);
  console.log(id);

  useEffect(() => {
    if (newProducts) {
      setName(newProducts.name);
      setPrice(newProducts.price);
      setGender(newProducts.gender);
    }
  }, [newProducts]);

  function handleSave() {
    let editObj = {
      name,
      price,
      gender,
    };
    updateProduct(id, editObj);
    navigate("/all-product");
  }
  return (
    <div className="container">
      <div className="edit-block">
        <input
          className="edit-inp"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="outlined"
        />
        <input
          className="edit-inp"
          value={price}
          onChange={e => setPrice(e.target.value)}
          variant="outlined"
        />
        <input
          className="edit-inp"
          value={gender}
          onChange={e => setGender(e.target.value)}
          variant="outlined"
        />
        <button className="edit-btn" variant="contained" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
