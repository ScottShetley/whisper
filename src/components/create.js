import React from "react";
import { connect } from "react-redux";
import { CreateSecrets, CreateSecret } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onCreateSecret: (title, price) => dispatch(CreateSecret(title, price))
  };
};

const Create = props => {
  let currentTitle;
  let currentPrice;

  return (
    <div>
      <h3>New Secret</h3>
      <div className="form-group">
        <input
          placeholder="title"
          className="form-control"
          ref={t => (currentTitle = t)}
        />
      </div>
      <div className="form-group">
        {" "}
        <input
          placeholder="price"
          className="form-control"
          ref={p => (currentPrice = p)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-secondary"
          onClick={() => {
            //console.log(currentTitle.value);
            //console.log(currentPrice.value);

            let priceCheck = parseInt(currentPrice.value);
            if (!isNaN(priceCheck)) {
              props.onCreateSecret(
                currentTitle.value,
                parseInt(currentPrice.value)
              );
              props.history.push("/secrets");
            }
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Create);
