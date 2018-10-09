import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const AllocateDashboardPage = () => (
  <div>This is from my dashboard component.</div>
);

const AddExpensePage = () => <div>This is from my add expense component.</div>;

const EditExpensePage = () => (
  <div>This is from my edit expense component.</div>
);

const HelpPage = () => <div>This is from my help component.</div>;

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Allocate</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      New Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AllocateDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
