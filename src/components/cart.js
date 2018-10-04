import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const Cart = props => (
  <div>
    <h1 className="cover-heading">
      Cart: ${props.cart.reduce((sum, x) => sum + x.price, 0)}
    </h1>
    {props.cart.map(s => (
      <div className="row d-flex justify-content-between" key={s.id}>
        {s.title}
        <span>${s.price}</span>
      </div>
    ))}
  </div>
);

export default connect(mapStateToProps)(Cart);
