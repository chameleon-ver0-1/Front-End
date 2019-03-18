import React, { Component } from 'react'
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Connectsignin from './connectsignin/Connectsignin'

// showLoginBox() {
//   this.setState({isLoginOpen: true, isRegisterOpen: false});
// }

// showRegisterBox() {
//   this.setState({isRegisterOpen: true, isLoginOpen: false});
// }

class Auth extends Component {
  render() {
    return (
      <React.Fragment>
        <SignIn />
        {/* <SignUp />
        <Connectsignin /> */}
      </React.Fragment>

    )
  }
}

export default Auth
