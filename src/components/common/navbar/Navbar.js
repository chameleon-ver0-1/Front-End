import React, { Component } from "react";
import "./navbar.style.css";

import userProfile from "../../../assets/home/userProfile.png";
import moreInfo from "../../../assets/home/moreInfo.png";
import notice from "../../../assets/home/alert_off.png";
import Dropdown from './dropdownmenu/Dropdown';
import Bounce from 'react-reveal/Bounce';
import alert from "../../../assets/home/alert_off.png";
export class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {

    if (
      window.location.pathname === "/auth/signIn" ||
      window.location.pathname === "/auth/signUp" ||
      window.location.pathname === '/auth/authCheck'
    ) {
      return (
        <div className="container">
          <div className="nav-container">
            <p className="logo">카멜레On</p>
            <div className="btn-container">
              <div className="btn-p">
                <button className="nav-btn">로그인</button>
              </div>
              <button className="nav-btn">회원가입</button>
            </div>
          </div>
        </div>
      );
    } else if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument"
    ) {
      return (
        <div className="container">
          <div className="nav2-container">
            <p className="logo2">카멜레On</p>
            <div className="nav-right">

              <Bounce when={this.state.show}>
                <Dropdown />
              </Bounce>
              <button className="notice-btn">
                <img src={alert} className="notice_im"
                  onClick={this.handleClick} /></button>

              <img
                className="userProfile"
                src={userProfile}
                alt="프로필이미지"
              />
              <div className="userInfo-container">
                <p className="userName">권주희 Kwonju hee</p>
                <p className="userDepartment">디자인 부서</p>
              </div>
              <button className="moreInfo">
                <img src={moreInfo} className="moreInfo_im" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Navbar;
