import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import { SignIn, SignUp, AuthCheck } from './components/independent/auth/Auth';
import {
  Issue,
  ConferenceRoom,
  ConferenceDocument
} from "./components/independent";
import { Navbar, Menu, Chat } from "./components/common";

class App extends Component {
  componentDidMount() { }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="wrapper">
            <Menu />
            <Route
              exact
              path="/auth/signIn"
              render={props => (
                <React.Fragment>
                  <SignIn />
                </React.Fragment>
              )}
            />
            <Route path="/auth/signUp" component={SignUp} />
            <Route path="/auth/authCheck" component={AuthCheck} />
            <Route path="/home/issue" component={Issue} />
            <Route path="/home/conferenceRoom" component={ConferenceRoom} />
            <Route
              path="/home/conferenceDocument"
              component={ConferenceDocument}
            />
            <Chat />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
