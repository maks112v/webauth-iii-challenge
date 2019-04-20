import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Users from "./Users";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Welcome</h1>
        </div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/users">Users</Link>

        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />{" "}
          <Route exact path="/users" render={props => <Users {...props} />} />
        </Switch>
      </>
    );
  }
}

export default App;
