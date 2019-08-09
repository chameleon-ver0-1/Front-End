import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import {
  SignIn,
  SignUp,
  AuthCheck,
  ConnectSignIn,
  ProjectManage,
  ProjectList
} from "./components/independent/auth/Auth";
import {
  Issue,
  ConferenceRoom,
  ConferenceDocument,
  WebRTCRoom,
  ConferenceDocumentDetail,
  VideoSharing
} from "./components/independent";

import { Navbar, Menu, Chat } from "./components/common";
import { Welcome } from "./components/independent/welcome/Welcome";

import PostTest from "../src/services/postTest";

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
              <Route
                exact
                path="/auth/signUp"
                render={props => (
                  <React.Fragment>
                    <SignUp />
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Welcome />
                  </React.Fragment>
                )}
              />
              <Route path="/home/issue" component={Issue} />
              <Route path="/auth/authCheck" component={AuthCheck} />
              <Route path="/auth/connectSignIn" component={ConnectSignIn} />
              <Route path="/auth/projectManage" component={ProjectManage} />
              <Route path="/auth/projectList" component={ProjectList} />
              <Route path="/home/conferenceRoom" component={ConferenceRoom} />
              <Route path="/room/:roomTokenId" component={WebRTCRoom} />
              <Route
                exact
                path="/home/conferenceDocument"
                render={props => (
                  <React.Fragment>
                    <ConferenceDocument />
                  </React.Fragment>
                )}
              />

              <Route
                path="/home/conferenceDocument/conferenceDocumentDetail"
                component={ConferenceDocumentDetail}
              />
              <Route path="/postTest" component={PostTest} />
              <Route path="/share" component={VideoSharing} />
              <Chat />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
