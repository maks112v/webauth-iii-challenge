import React, { Component } from "react";

import axios from "axios";

class Register extends Component {
  state = {
    inputs: {
      username: "",
      password: ""
    }
  };

  updateHandler = e => {
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    axios
      .post("http://localhost:5000/api/auth/register", this.state.inputs)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.inputs.username}
          onChange={this.updateHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.inputs.password}
          onChange={this.updateHandler}
        />
        <button onClick={this.submitHandler}>Submit</button>
      </div>
    );
  }
}

export default Register;
