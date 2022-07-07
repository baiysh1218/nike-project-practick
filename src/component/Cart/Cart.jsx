import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../productContext/cartContext";

const Cart = ({ item }) => {
  const { deleteProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(item.id);
  const { addToCart, checkProductInCart } = useContext(cartContext);
  const [productCart, setProductState] = useState(checkProductInCart(item.id));

  return (
    <div className="section-card">
      <div className="img-cart">
        <img className="cart-img-width" src={item.image} />
      </div>
      <p className="cart-item">{item.name}</p>
      <p className="cart-item">{item.price}</p>
      <p className="cart-item cart-p">{item.gender}</p>
      <div className="cart-block">
        <button
          onClick={() => navigate(`/edit/${item.id}`)}
          className="btn-edit-cart">
          Edit
        </button>
        <button
          onClick={() => deleteProduct(item.id)}
          className="btn-edit-cart">
          Delete
        </button>
        <button
          onClick={() => navigate(`/details/${item.id}`)}
          className="btn-edit-cart">
          Details
        </button>
        <IconButton
          onClick={() => {
            addToCart(item);
            setProductState(checkProductInCart(item.id));
          }}>
          <AddShoppingCartIcon
            color={setProductState ? "secondary" : "primary"}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Cart;
