import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    secrets: state.secrets
  };
};

const Shop = props => (
  <div>
    <h1 className="cover-heading">Secrets...........</h1>
    <ul>
      {props.secrets.map(s => (
        <li key={s.id}>
          {s.title}
          <button className="btn btn-default">${s.price}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Shop);
