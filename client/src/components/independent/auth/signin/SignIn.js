/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 로그인 화면 구성
 * 수정 : 조윤영 - 현재 Googlye 및 KaKao 연동 Login은 서버상 도메인에서만 가능함.
 */
import React, { Component } from "react";
// import styled from 'styled-components'
import { Link } from "react-router-dom";
import "./signin.style.css";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import google from "../../../../assets/signIn/google.png";
import kakao from "../../../../assets/signIn/kakao.png";
import KakaoLogin from "react-kakao-login";
import { connect } from "react-redux";
import { login } from "../../../../helpers/SignInHelpers";
import PropTypes from "prop-types";
import * as service from "../../../../helpers/SignInHelpers";

const GoogleKey =
  "419409692345-cjddji3koajma5occofknl50cl27scie.apps.googleusercontent.com";
const KaKaoKey = "e5e36f8b6e47e733a86feb3afb06e56c";

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
  outline: none;
  height: 40px;
  margin-left: 13px;
  font-size: 14px;
`;
const ForgetBtn = styled.button`
  margin: auto;
  border: none;
  outline: none;
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
const OriginLoginBtn = styled.button`
  font-size: 16px;

  color: white;
  background: none;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 314px;
  height: px;
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      checked: false,
      id: "",
      name: "",
      provider: "",
      email: "",
      password: ""
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  submitLogin(e) {}

  handleChange = e => {
    const {
      target: { checked }
    } = e;
    this.setState({ checked });
  };

  /*Google 로그인 함수 */
  responseGoogle = res => {
    /*Google로그인 성공할 경우 */
    this.setState({
      id: res.googleId,
      email: res.profileObj.email,
      name: res.profileObj.name,
      provider: "google"
    });
    console.log(res);
  };
  responseFail = err => {
    /*Login Fail*/
    console.error(err);
  };

  /*Kakao 로그인 함수 */
  success = response => {
    /*Kakao 로그인 성공할 경우 */
    console.log(response);
  };

  failure = error => {
    /*Kakao 로그인 실패할 경우 */
    console.log(error);
  };

  /*일반 로그인 함수 */
  originLogin = e => {
    console.log("일반 로그인 선택");
    service
      .login(this.state.email, this.state.password)
      .then(
        res => this.context.router.push("/"),
        err => console.log("로그인에 오류가 생겼습니다.")
      );
    // axios.post("/auth/signin", {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(res => {
    //     localStorage.setItem("cool-jwt", res.data);
    //     this.props.history.push("/Protected");
    //   });
  };

  componentDidMout = () => {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    /*이 API 는 여러분의 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다.
  여기선 주로 D3, masonry 처럼 DOM 을 사용해야하는 외부 라이브러리 연동을 하거나,
  해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나,
   DOM 의 속성을 읽거나 직접 변경하는 작업을 진행합니다.*/
  };
  componentWillReceiveProps = () => {
    /*이 API 는 컴포넌트가 새로운 props 를 받게됐을 때 호출됩니다.
    이 안에서는 주로, state 가 props 에 따라 변해야 하는 로직을 작성합니다.
    새로 받게될 props 는 nextProps 로 조회 할 수 있으며,
    이 때 this.props 를 조회하면 업데이트 되기 전의 API 이니 참고하세요.*/
  };
  componentWillUpdate = () => {
    /*이 API는 shouldComponentUpdate 에서 true 를 반환했을때만 호출됩니다.
    만약에 false 를 반환했었다면 이 함수는 호출되지 않습니다.
    여기선 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 합니다.
    이 함수가 호출되고난 다음에는, render() 가 호출됩니다.*/
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { id, name, email, password } = this.state;

    if (this.state.error) return <h1>에러발생!</h1>;
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
                onChange={this.change}
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
                onChange={this.change}
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
            <OriginLoginBtn onClick={this.originLogin}>로그인</OriginLoginBtn>
          </LoginLinkContainer>

          <Buttons>
            <GoogleLogin
              clientId={GoogleKey}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={renderProps => (
                <ImgBtnContainer>
                  <Img src={google} />

                  <OtherLoginBtn
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Google 로그인
                  </OtherLoginBtn>
                </ImgBtnContainer>
              )}
            />

            <KakaoLogin
              jsKey={KaKaoKey}
              onSuccess={this.success}
              onFailure={this.failure}
              render={props => (
                <ImgBtnContainer>
                  <Img src={kakao} />

                  <OtherLoginBtn
                    onClick={e => {
                      e.preventDefault();
                      props.onClick();
                    }}
                  >
                    카카오 로그인
                  </OtherLoginBtn>
                </ImgBtnContainer>
              )}
            />
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
