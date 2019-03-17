import React, { Component } from 'react'
// import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './signin.style.css'

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    checked: false
  };

  submitLogin(e) {}

  handleChange = (e) => {
    const { target: { checked } } = e;
    this.setState({ checked });
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          로그인
        </div>
        <div className="box-container">

          <div className="input-group">
            <label htmlFor="username">이메일</label>
            <br/>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이메일 주소를 입력해주세요"/>
          </div>
          <br/>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <br/>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="비밀번호를 입력해주세요"/>
          </div>
          <br/>

          <div>
            <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.Checked} />
            <label htmlFor={this.id}>로그인 상태 유지</label>

            <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.Checked} />
            <label htmlFor={this.id}>이메일 기억하기</label>
          </div>

          <br/>

          <Link className="login-btn" to="/issue">로그인</Link>

          <button
           type="button"
           className="google-btn"
           onClick={this.submitLogin.bind(this)}>Google 로그인</button>

           <button
           type="button"
           className="kakao-btn"
           onClick={this.submitLogin.bind(this)}>카카오 로그인</button>

          <br/>
          <button
          type="button"
          className="forget-btn"
          onClick={this.submitLogin.bind(this)}>아이디/비밀번호를 잊으셨나요?</button>
        </div>
      </div>
    );
  }
}

export default SignIn
