import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="section-card">
      <div className="img-cart">
        <img className="cart-img-width" src={item.image} />
      </div>
      <p className="cart-item">{item.name}</p>
      <p className="cart-item">{item.price}</p>
      <p className="cart-item cart-p">{item.gender}</p>
      <div className="cart-block">
        <button className="btn-edit-cart">Edit</button>
        <button className="btn-edit-cart">Delete</button>
        <button className="btn-edit-cart">Deteils</button>
      </div>
    </div>
  );
};

export default Cart;
