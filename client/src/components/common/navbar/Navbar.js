import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Fade from "react-reveal/Fade";

import Dropdown from "./dropdownmenu/Dropdown";
import MessagePopUp from "./messagepopup/MessagePopUp";

import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

import { css } from "glamor";

import alertOff from "../../../assets/home/alert_off.png";
import alertOn from "../../../assets/home/alert_on.png";
import alertToast from "../../../assets/home/alrert_list.png";
import closedBtn from "../../../assets/message/closed_btn@3x.png";
import LogoWhiteIcon from "../../../assets/home/Logo_white.png";
import LogoBlackIcon from "../../../assets/home/Logo_black.png";
import userProfile from "../../../assets/home/userProfile.png";
import moreInfo from "../../../assets/home/moreInfo.png";

import {
  NavContainer,
  BtnContainer,
  BtnP,
  NavBtn,
  Row,
  ClosedBtn,
  AlertTitle,
  AlertContent,
  LogoContainer,
  Nav2Container,
  NavRight,
  NoticeBtn,
  UserInfoContainer,
  UserName,
  UserDepartment,
  MoreInfo,
  HomeNav,
  NavItem,
  NavClickItem,
  AuthBox
} from "./navbar.style";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, haveNotice: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  }

  render() {
    const Msg = ({ closeToast }) => (
      <Row>
        <img src={alertToast} width="35px" height="35px" />
        <div style={{ marginLeft: "15px" }}>
          <AlertTitle>4월 간행물 표지 초안</AlertTitle>
          <AlertContent>화상회의가 잠시 뒤 시작됩니다.</AlertContent>
        </div>
        <ClosedBtn onClick={closeToast} style={{ marginLeft: "38px" }}>
          <img width="10px" height="10px" src={closedBtn} />
        </ClosedBtn>
      </Row>
    );
    if (
      window.location.pathname === "/auth/signIn" ||
      window.location.pathname === "/auth/signUp" ||
      window.location.pathname === "/auth/authCheck" ||
      window.location.pathname === "/auth/connectSignIn" ||
      window.location.pathname === "/auth/projectAdd" ||
      window.location.pathname === "/auth/projectList"
    ) {
      return (
        <NavContainer>
          <LogoContainer>
            <img width="129px" height="40px" src={LogoBlackIcon} />
          </LogoContainer>
          <BtnContainer>
            <BtnP>
              <NavLink to="/auth/signIn">
                <NavBtn>로그인</NavBtn>
              </NavLink>
            </BtnP>
            <NavLink to="/auth/signUp">
              <NavBtn>회원가입</NavBtn>
            </NavLink>
          </BtnContainer>
        </NavContainer>
      );
    } else if (
      window.location.pathname === "/" ||
      window.location.pathname === "/home"
    ) {
      return (
        <div>
          <HomeNav>
            <img
              src={LogoBlackIcon}
              width="129px"
              height="40px"
              style={{ marginRight: "338px" }}
            />
            <Link to="/">
              <NavClickItem>Home</NavClickItem>
            </Link>
            <Link to="/home/issue">
              <NavItem>Service</NavItem>
            </Link>
            <Link to="/about">
              <NavItem>About</NavItem>
            </Link>
            <Link to="/faq">
              <NavItem>FAQ</NavItem>
            </Link>
            <AuthBox style={{ marginLeft: "57px" }}>
              <Link to="/auth/signIn">
                <NavBtn>로그인</NavBtn>
              </Link>

              <Link to="/auth/signUp">
                <NavBtn style={{ marginLeft: "7px" }}>회원가입</NavBtn>
              </Link>
            </AuthBox>
          </HomeNav>
        </div>
      );
    } else if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument" ||
      window.location.pathname ===
        "/home/conferenceDocument/conferenceDocumentDetail"
    ) {
      return (
        <div className="container">
          <Nav2Container>
            <LogoContainer>
              <img width="129px" height="40px" src={LogoWhiteIcon} />
            </LogoContainer>
            <NavRight>
              <Fade when={this.state.show}>
                <Dropdown style={{ zIndex: 100 }} />
              </Fade>

              <NoticeBtn>
                <img
                  width="20px"
                  height="30px"
                  src={this.state.haveNotice ? alertOn : alertOff}
                  onClick={this.handleClick}
                />
              </NoticeBtn>

              <img
                width="45px"
                height="46px"
                src={userProfile}
                alt="프로필이미지"
                style={{ marginRight: "13px" }}
              />
              <UserInfoContainer>
                <UserName>권주희 Kwonju hee</UserName>
                <UserDepartment>디자인 부서</UserDepartment>
              </UserInfoContainer>
              <MoreInfo onClick={() => toast(<Msg />)}>
                <img width="12px" height="6px" src={moreInfo} />
              </MoreInfo>
            </NavRight>
          </Nav2Container>
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Navbar;
