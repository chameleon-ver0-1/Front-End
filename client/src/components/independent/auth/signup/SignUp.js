/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 회원가입 화면 구성
 */

import React, { Component } from "react";
import "./signup.style.css";
import { Link } from "react-router-dom";
import TagsCompany from "./TagsCompany";
import TagsDepart from "./TagsDepart";

class SignUp extends Component {
  submitRegister(e) {
    /**DB에 저장 */
  }

  render() {
    return (
      <div className="inner-container2">
        <div className="login-container">
          <div className="header2">회원가입</div>
          <div className="input-group2">
            <div className="label-div">
              <div className="label">이름</div>
              <div className="star">*</div>
              <div className="green-message">* 문항은 필수 입력사항입니다</div>
            </div>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="input-group2">
            <div className="label">영문 이름</div>

            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="영문 이름을 입력하세요"
            />
          </div>

          <div className="input-group2">
            <div className="label-div">
              <div className="label">아이디 </div>
              <div className="star">*</div>
            </div>

            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="이메일 형태의 아이디를 입력하세요"
            />
          </div>

          <div className="input-group2">
            <div className="label-div">
              <div className="label">비밀번호 </div>
              <div className="star">*</div>
            </div>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="영문 및 숫자를 포함하여 8자 이상으로 입력하세요"
            />
          </div>

          <div className="input-group2">
            <div className="label">회사 및 부서</div>

            <div className="text_search">
              <input
                type="text"
                name="company"
                className="small-input"
                placeholder="회사명을 검색하세요"
                //TODO: 태그로 바꿔야함
              />
              <TagsCompany />
              <input
                type="text"
                name="company"
                className="small-input"
                placeholder="부서명을 검색하세요"
              />
              <TagsDepart />
            </div>
          </div>

          <Link to="/auth/authCheck">
            <button className="join-btn" onClick={this.submitRegister}>
              가입하기
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SignUp;
