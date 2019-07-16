/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 로그인 화면 구성
 */

import React, { Component } from "react";
// import styled from 'styled-components'
import { Link } from "react-router-dom";
import "./signin.style.css";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import google from "../../../../assets/signIn/google.png";
import kakao from "../../../../assets/signIn/kakao.png";

const SignInContainer = styled.div`
  margin: 60px auto;
  display: flex;
`;
const SignInHeader = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const LoginContainer = styled.div`
  margin: auto;
`;
const InputGroup = styled.div`
  margin-bottom: 22px;
`;
const Label = styled.div`
  font-size: 14px;
  margin-left: 11px;
`;

const LoginInput = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  font-size: 12px;
`;
const InputBorder = styled.div`
  margin-top: 9px;
  width: 313px;
  height: 39px;

  border-radius: 18.8px;
  border: solid 1px var(--pinkish-grey);
  padding-left: 15px;
  align-items: center;
`;

const Checks = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;
  width: 313px;
  height: 12px;
  display: flex;
  justify-content: space-around;
`;

const Check = styled.div`
  font-size: 14px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ImgBtnContainer = styled.div`
  width: 153px;
  height: 40px;
  border: solid 1px var(--greenish-teal);
  border-radius: 18.8px;
  color: var(--greenish-teal);
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

const OtherLoginBtn = styled.button`
  background: none;
  border: none;
  online: none;
  height: 40px;
  margin-left: 13px;
  font-size: 14px;
`;
const ForgetBtn = styled.button`
  margin: auto;
  border: none;
  online: none;
  background: none;
  color: var(--brownish-grey);
  margin-top: 29px;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;
const LoginLinkContainer = styled.div`
  font-size: 16px;
  background-color: var(--greenish-teal);
  color: white;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 330px;
  height: 41px;

  border-radius: 18.8px;

  margin-top: 28px;
  margin-bottom: 10px;
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    checked: false
  };

  submitLogin(e) {}

  handleChange = e => {
    const {
      target: { checked }
    } = e;
    this.setState({ checked });
  };
  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <SignInContainer>
        <LoginContainer>
          <SignInHeader>로그인</SignInHeader>
          <InputGroup>
            <Label>아이디</Label>
            <InputBorder>
              <LoginInput
                type="text"
                name="username"
                placeholder="이메일 형식의 아이디를 입력해주세요"
              />
            </InputBorder>
          </InputGroup>

          <InputGroup>
            <Label>비밀번호</Label>
            <InputBorder>
              <LoginInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </InputBorder>
          </InputGroup>

          <Checks className="checks">
            <input
              onChange={this.handleChange}
              id={this.id}
              type="checkbox"
              checked={this.state.Checked}
            />
            <Check htmlFor={this.id}>로그인 상태 유지</Check>

            <input
              onChange={this.handleChange}
              id={this.id}
              type="checkbox"
              checked={this.state.Checked}
            />
            <Check htmlFor={this.id}>이메일 기억하기</Check>
          </Checks>

          <LoginLinkContainer>
            <Link to="/home/issue" className="link-login">
              로그인
            </Link>
          </LoginLinkContainer>

          <Buttons>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={renderProps => (
                <ImgBtnContainer>
                  <Img src={google} />

                  <OtherLoginBtn onClick={this.submitLogin.bind(this)}>
                    Google 로그인
                  </OtherLoginBtn>
                </ImgBtnContainer>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            <ImgBtnContainer>
              <Img src={kakao} />

              <OtherLoginBtn onClick={this.submitLogin.bind(this)}>
                카카오 로그인
              </OtherLoginBtn>
            </ImgBtnContainer>
          </Buttons>

          <ForgetBtn onClick={this.submitLogin.bind(this)}>
            아이디/비밀번호를 잊으셨나요?
          </ForgetBtn>
        </LoginContainer>
      </SignInContainer>
    );
  }
}

export default SignIn;
