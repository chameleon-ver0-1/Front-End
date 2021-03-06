/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 연동 계정 로그인 후 입력하는 화면 (회사 및 부서 입력)
 */

import React, { Component } from "react";
import "./connectsignin.style.css";
import chat_profile from "../../../../assets/chatting/chat_profile.png";
import search from "../../../../assets/signUp/search.png";
import { Link } from "react-router-dom";
import TagsCompany from "./TagsCompany";
import TagsDepart from "./TagsDepart";

class ConnectSignIn extends Component {
  state = {
    open: false
  };

  submitRegister(e) {}

  onOpenModal = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div className="inner-container">
        <div className="login-container">
          <div className="header">연동 계정 로그인</div>
          <img src={chat_profile} className="chat_profile" />
          <div className="add_information">추가 정보를 입력해주세요</div>

          <div className="input-group-connect">
            {/* <label className="label" htmlFor="username">영문 이름</label> */}
            <div className="label">영문 이름</div>

            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="영문 이름을 입력하세요"
            />
          </div>

          <div className="input-group-connect">
            {/* <label className="label" htmlFor="company">회사 및 부서</label> */}
            <div className="label">회사 및 부서</div>
            <div className="text_search">
              <TagsCompany/>
              <TagsDepart/>
              
            </div>
          </div>

          <Link to="/auth/signIn">
            <button className="join-btn">가입하기</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ConnectSignIn;
