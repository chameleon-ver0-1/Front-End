import React, { Component } from "react";
import { getJwt } from "../helpers/jwt";
import { withRouter } from "react-router-dom";
import axios from "axios";

export class testAuthenticateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }
  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push("/signIn");
    }
    axios
      .get("/getUser/", { headers: { Authorization: `Bearer ${jwt}` } })
      .then(res =>
        res.setState({
          user: res.data
        })
      )
      .catch(err => {
        localStorage.removeItem("cool-jwt");
        this.props.history.push("/siginIn");
      });
  }
  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(testAuthenticateComponent);
