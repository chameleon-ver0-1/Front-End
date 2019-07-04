import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import {
  SignIn,
  SignUp,
  AuthCheck,
  ConnectSignIn
} from "./components/independent/auth/Auth";
import {
  Issue,
  ConferenceRoom,
  ConferenceDocument,
  WebRTCRoom,
  ConferenceDocumentDetail,
  Test
} from "./components/independent";

import { Navbar, Menu, Chat } from "./components/common";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content-container">
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
              <Route path="/auth/connectSignIn" component={ConnectSignIn} />
              <Route path="/home/issue" component={Issue} />
              <Route path="/home/conferenceRoom" component={ConferenceRoom} />
              {/* FIXME: parameter이어 붙여 놓음. 오류 시 되돌리기 */}
              <Route path="/room/:roomTokenId" component={WebRTCRoom} />

              <Route
                path="/home/conferenceDocument"
                component={ConferenceDocument}
              />
              <Route
                path="/home/conferenceDocumentDetail"
                component={ConferenceDocumentDetail}
              />
              <Chat />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
