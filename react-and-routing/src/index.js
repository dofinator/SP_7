import bookFacade from "./bookFacade";
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import App from "./App"
import "./index.css"

const AppWithRouter = () => {
  return (
      <Router>
        <App bookFacade={bookFacade} />
      </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));