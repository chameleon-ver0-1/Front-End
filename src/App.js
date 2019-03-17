import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import { Auth, Issue, ConferenceRoom } from "./components/independent";
import { Navbar, Navbar2, Menu, Chat } from "./components/common";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar2 />

          <div className="wrapper">
            <Menu />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Auth />
                </React.Fragment>
              )}
            />
            <Route path="/issue" component={Issue} />
            <Route path="/conferenceRoom" component={ConferenceRoom} />
            <Chat />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
