import React, { Component } from 'react'
import './navbar.style.css';

export class navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
        <p className="logo">카멜레On</p>
        <div className="btn-container">
          <div className="btn-p"><button className="nav-btn">로그인</button></div>
          <button className="nav-btn">회원가입</button>
        </div>
        </div>
      </div>
    )
  }
}

export default navbar
