import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../productContext/userContext";

const LogIn = () => {
  const { createLogIn } = useContext(userContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [emeil, setEmeil] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  function handleSave() {
    let dataUser = {
      name,
      emeil,
      password,
      number,
    };
    if (!name.trim() || !emeil.trim() || !password.trim() || !number.trim()) {
      alert("заполните регестрационное поле!");
    }
    createLogIn(dataUser);
    navigate("/profile");
  }
  return (
    <div className="container">
      <div className="inp-admin-style">
        <input
          className="inp-admin"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="inp-admin"
          type="text"
          placeholder="emeilName@.com"
          value={emeil}
          onChange={e => setEmeil(e.target.value)}
        />
        <input
          className="inp-admin"
          type="password"
          placeholder="qwerty1233"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="inp-admin"
          type="text"
          placeholder="comments"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />

        <button onClick={() => handleSave()} className="btn-admin">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
