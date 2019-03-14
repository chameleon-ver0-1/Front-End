import React, { Component } from 'react'
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

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
        <SignIn/>
        {/* <SignUp/> */}
      </React.Fragment>

    )
  }
}

export default Auth
