import React, { Component } from "react";

import axios from "axios";

class Users extends Component {
  state = {
    isLoading: true,
    error: false,
    users: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      this.setState({
        isLoading: false,
        users: res.data
      })
    }).catch(err => {
      this.setState({
        ...this.state,
        error: true,
        isLoading: false,
      })
      console.log(err)
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>;
    }
    if (this.state.error) {
      return <div>Error</div>;
    }
    return(
      <div>
        {this.state.users.map((user,index) => (
          <div key={index}>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Users;
