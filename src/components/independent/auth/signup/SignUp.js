import React, { Component } from 'react'
import './signup.style.css'
import Popup from '../popup/Popup';
import search from '../../../../assets/signUp/search.png';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    open: false,
    title: ""
  }

  submitRegister(e) { }

  onOpenModal = () => {
    this.setState({ open: true, title: "회사명", placeholder: "회사명을 입력하세요" });
  };

  onOpenModal2 = () => {
    this.setState({ open: true, title: "부서명", placeholder: "부서명을 입력하세요" });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {

    return (
      <div className="inner-container2">

        <div className="login-container">
          <div className="header2">
            회원가입
        </div>
          <div className="input-group2">
            {/* <label className="label" htmlFor="username">이름</label> */}
            <div className="label">
              이름
            </div>

            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="이름을 입력하세요" />
          </div>

          <div className="input-group2">
            {/* <label className="label" htmlFor="username">영문 이름</label> */}
            <div className="label">
              영문 이름
            </div>

            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="영문 이름을 입력하세요" />
          </div>

          <div className="input-group2">
            {/* <label className="label" htmlFor="email">아이디</label> */}
            <div className="label">
              아이디
            </div>

            <input type="text" name="email" className="login-input" placeholder="이메일 형태의 아이디를 입력하세요" />
          </div>

          <div className="input-group2">
            {/* <label className="label" htmlFor="password">비밀번호</label> */}
            <div className="label">
              비밀번호
            </div>

            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="영문 및 숫자를 포함하여 8자 이상으로 입력하세요" />
          </div>

          <div className="input-group2">
            {/* <label className="label" htmlFor="company">회사 및 부서</label> */}
            <div className="label">
              회사 및 부서
            </div>

            <div className="buttons">
              <div className="text_search">
                <input
                  type="text"
                  name="company"
                  className="small-input"
                  placeholder="회사명"
                >
                </input>

                <button className="search">
                  <img src={search} className="search2"
                    onClick={this.onOpenModal} /></button>

              </div>
              <Popup open={this.state.open} title={this.state.title}
                placeholder={this.state.placeholder} onCloseModal={this.onCloseModal} />

              <div className="text_search">
                <input
                  type="text"
                  name="company"
                  className="small-input"
                  placeholder="부서명"
                >
                </input>

                <button className="search">
                  <img src={search} className="search2"
                    onClick={this.onOpenModal2} /></button>
              </div>
            </div>
          </div>

          <Link to="/auth/authCheck">
            <button className="join-btn">
              가입하기
            </button>
          </Link>

        </div>
      </div>
    );
  }
}
export default SignUp
