import React, { Component } from 'react'
import './signup.style.css'
import Modal from "react-responsive-modal";
import Popup from '../popup/Popup';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open : false
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  submitRegister(e) {}

  render() {
    const { open } = this.state;
    return (
      <div className="inner-container">
        <div className="header">
          회원가입
        </div>
        <div className="box-container">

          <div className="input-group">
            <label htmlFor="username">이름</label>
            <br/>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이름을 입력하세요"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">아이디</label>
            <br/>
            <input type="text" name="email" className="login-input" placeholder="이메일 형태의 아이디를 입력하세요"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <br/>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="영문 및 숫자를 포함하여 8자 이상으로 입력하세요"/>
          </div>

          <div className="input-group">
            <label htmlFor="company">회사 및 부서</label>
            <br/>
            <input
              type="text"
              name="company"
              className="login-input2"
              placeholder="회사명"
              />

            <button>
              <img src="../../../../assets/search.png"
                   onClick={this.onOpenModal}/></button>

              <Popup/>

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
