import React, { Component } from "react";
import "./navbar.style.css";

import userProfile from "../../../assets/home/userProfile.png";

import moreInfo from "../../../assets/home/moreInfo.png";
import notice from "../../../assets/home/alert_off.png";
import Dropdown from './dropdownmenu/Dropdown';

export class Navbar extends Component {


  render() {
    if (
      window.location.pathname === "/auth/signIn" ||
      window.location.pathname === "/auth/signUp"
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

              {/* <button className="notice-btn">
                <img src={notice} className="notice_im" />
              </button> */}
              <Dropdown />

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
