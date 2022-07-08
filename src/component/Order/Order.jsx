import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container" id="PaymentForm">
        <div className="credit-card-block"></div>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <div className="credit-card-inp-block">
            <input
              className="credit-card-inp"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="credit-card-inp"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="credit-card-inp"
              type="number"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="credit-card-inp"
              type="number"
              name="expiry"
              placeholder="expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <button
              onClick={() => {
                alert("заказ оформлен!");
              }}
              className="btn-by btn-admin btn-ordering">
              succses
            </button>
          </div>
          ...
        </form>
      </div>
    );
  }
}
