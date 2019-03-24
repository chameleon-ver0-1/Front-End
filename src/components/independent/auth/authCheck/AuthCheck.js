import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./authcheck.style.css";

export class AuthCheck extends Component {
  render() {
    return (
      <div className="authCheck_container">

        <text className="authCheck_text">인증 번호를 입력해주세요</text>

        <text className="authCheck_texts">이메일로 전송된 인증번호를 입력해주세요</text>
        <br />
        <text className="authCheck_texts">인증이 완료되면, 바로 카멜레On을 이용할 수 있습니다</text>

        <div className="authCheck_num_div">
          <input className="authCheck_num"></input>
          <input className="authCheck_num"></input>
          <input className="authCheck_num"></input>
          <input className="authCheck_num"></input>
          <input className="authCheck_num"></input>
        </div>

        {/* <button className="authCheck_reAuth">인증번호 재전송</button> */}

        <Link to="/auth/signIn">
          <button className="start_cameleon">
            카멜레On 시작하기
            </button>
        </Link>
      </div>
    )
  }
}

export default AuthCheck
