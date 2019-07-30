/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 인증번호 화면
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./authcheck.style.css";

export class AuthCheck extends Component {
  //TODO: 커서이동 외않되
  nextBlank = (N, Obj, nextID) => {
    if (document.getElementsById(Obj).value.length == N) {
      document.getElementsById(nextID).focus();
    }
  };

  render() {
    return (
      <div className="authCheck_container">
        <div className="authCheck_text">이메일 인증</div>

        <div className="authCheck_texts_div">
          <div className="authCheck_texts">
            이메일로 전송된 인증번호를 입력해주세요
          </div>
          <div className="authCheck_texts">
            인증이 완료되면, 바로 카멜레On을 이용할 수 있습니다
          </div>
        </div>

        <div className="authCheck_num_div">
          <input
            className="authCheck_num"
            type="text"
            name="test1"
            id="test1"
            size="1"
            maxLength="1"
            OnKeyUp="nextBlank(1, this.id, 'test2')"
          />

          <input
            className="authCheck_num"
            type="text"
            name="test2"
            id="test2"
            size="1"
            maxLength="1"
            OnKeyUp="nextBlank(1, this.id, 'test3')"
          />
          <input className="authCheck_num" id="g01" />
          <input className="authCheck_num" id="g02" />
          <input className="authCheck_num" id="g03" />
        </div>

        {/* <button className="authCheck_reAuth">인증번호 재전송</button> */}

        <Link to="/home/issue">
          <button className="start_cameleon">카멜레On 시작하기</button>
        </Link>
      </div>
    );
  }
}

export default AuthCheck;
