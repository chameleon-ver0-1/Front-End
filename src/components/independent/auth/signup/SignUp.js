import React, { Component } from 'react'
import './signup.style.css'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          회원가입
        </div>
        <div className="box-container">

          <div className="input-group">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이름"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input type="text" name="email" className="login-input" placeholder="이메일"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="비밀번호"/>
          </div>

          <div className="input-group">
            <label htmlFor="company">회사 및 부서</label>
            <br/>
            <input
              type="text"
              name="company"
              className="login-input2"
              placeholder="회사명"/>

              <input
              type="text"
              name="company"
              className="login-input2"
              placeholder="부서명"/>
          </div>

          <br/>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}>가입하기</button>
        </div>
      </div>
    );
  }
}
export default SignUp
