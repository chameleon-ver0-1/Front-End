import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import { Auth, Issue } from "./components/independent";
import { Navbar, Navbar2, Menu } from "./components/common";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
