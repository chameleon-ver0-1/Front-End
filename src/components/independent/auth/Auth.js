import React, { Component } from 'react'
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

class Auth extends Component {
  render() {
    return (
      <React.Fragment>
        <SignIn/>
        <SignUp/>
      </React.Fragment>
    )
  }
}

export default Auth
