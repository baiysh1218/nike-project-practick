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

  useEffect(() => {
    editProduct(id);
  }, []);
  console.log(id);

  useEffect(() => {
    if (newProducts) {
      setName(newProducts.name);
      setPrice(newProducts.price);
    }
  }, [newProducts]);

  function handleSave() {
    let editObj = {
      name,
      price,
    };
    updateProduct(id, editObj);
    navigate("/all-product");
  }
  return newProducts ? (
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
          onChange={e => setPrice(+e.target.value)}
          variant="outlined"
        />
        <button className="edit-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  ) : (
    <h1>Loadng</h1>
  );
};

export default Edit;
