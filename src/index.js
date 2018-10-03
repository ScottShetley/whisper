import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Home from "./components/home";
import Header from "./components/header";
import Shop from "./components/shop";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => (
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
);

ReactDOM.render(<App />, document.getElementById("root"));
