import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Home from "./components/home";
import Header from "./components/header";
import Shop from "./components/shop";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { secrets } from "./components/secretslist";

const initialstate = {
  secrets: secrets,
  cart: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "AddToCart":
      console.log(action.item);
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, { ...action.item, cartId: action.cartId }]
      };

    case "RemoveFromCart":
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart.cartId !== action.id)]
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <Header />
          <main className="inner cover mainSection">
            <Route exact path="/" component={Home} />
            <Route path="/secrets" component={Shop} />
            <Route path="/cart" component={Cart} />
          </main>
        </div>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
