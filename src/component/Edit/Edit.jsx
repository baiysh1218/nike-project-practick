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
    <div>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={price}
        onChange={e => setPrice(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={gender}
        onChange={e => setGender(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Edit;
