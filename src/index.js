import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Home, Create, Shop, Cart, Header } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer";
import thunk from "redux-thunk";
import { FetchSecrets } from "./actions/actions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(FetchSecrets());

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <Header />
          <main className="inner cover mainSection">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/secrets" component={Shop} />
              <Route path="/cart" component={Cart} />
              <Route path="/create" component={Create} />
              <Route
                render={() => (
                  <div>
                    Page Not Found
                    <br />
                    <span
                      className="notfound"
                      role="img"
                      aria-label="not found"
                    >
                      🤓
                    </span>
                  </div>
                )}
              />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
