import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Welcome</h1>
        </div>
        <Switch>
          <Route />
          <Route />
        </Switch>
      </>
    );
  }
}

export default App;
