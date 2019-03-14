import React, { Component } from 'react'
import './navbar2.style.css';


import userProfile from'../../assets/profile-image.png';
import moreInfo from '../../assets/more-info.png';

export class Navbar2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav2-container">
          <p className="logo2">카멜레On</p>
          <div className="nav-right">
            <button className="notice-btn"/>
            <img  className="userProfile" src={userProfile} alt="프로필이미지"/>
            <div className="userInfo-container">
            <p className="userName">권주희 Kwonju hee</p>
            <p className="userDepartment">디자인 부서</p>
            </div>
            <button className="moreInfo" src={moreInfo}></button>
          </div>




      </div>
    </div>
    )
  }
}

export default Navbar2
