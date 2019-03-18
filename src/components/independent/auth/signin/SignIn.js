import React, { Component } from "react";
// import styled from 'styled-components'
import { Link } from "react-router-dom";
import "./signin.style.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    checked: false
  };

  submitLogin(e) { }

  handleChange = e => {
    const {
      target: { checked }
    } = e;
    this.setState({ checked });
  };

  render() {
    return (
      <div className="inner-container">
        <div className="box-container">
          <div className="header">로그인</div>
          <div className="input-group">
            {/* <label className="label" htmlFor="username">이메일</label> */}
            <div className="label">아이디</div>

            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이메일 형식의 아이디를 입력해주세요"
            />
          </div>

          <div className="input-group">
            {/* <label className="label" htmlFor="password">비밀번호</label> */}
            <div className="label">비밀번호</div>

            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <div className="checks">
            <input
              onChange={this.handleChange}
              id={this.id}
              type="checkbox"
              checked={this.state.Checked}
            />
            <label className="check" htmlFor={this.id}>
              로그인 상태 유지
            </label>

            <input
              onChange={this.handleChange}
              id={this.id}
              type="checkbox"
              checked={this.state.Checked}
            />
            <label className="check" htmlFor={this.id}>
              이메일 기억하기
            </label>
          </div>

          <Link to="/home/issue" className="linklogin">
            <button className="login-btn">로그인</button>
          </Link>

          <div className="buttons">
            <button
              type="button"
              className="google-btn"
              onClick={this.submitLogin.bind(this)}
            >
              Google 로그인
            </button>

            <button
              type="button"
              className="kakao-btn"
              onClick={this.submitLogin.bind(this)}
            >
              카카오 로그인
            </button>
          </div>

          <button
            type="button"
            className="forget-btn"
            onClick={this.submitLogin.bind(this)}
          >
            아이디/비밀번호를 잊으셨나요?
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
