import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Fade from "react-reveal/Fade";
import Dropdown from "./dropdown/Dropdown";

import "react-toastify/dist/ReactToastify.css";

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
  AuthBox,
  MoveBtn
} from "./navbar.style";

const active = {
  fontSize: "13.5px",
  fontFamily: "NanumSquareB",
  cursor: "pointer",
  width: "80px",
  height: "33px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1px solid var(--greenish-teal)",
  borderRadius: "16.5px",
  outline: "none",

  color: "var(--greenish-teal)"
};
export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roomid = "9월 졸업프로젝트 긴급 회의";
    const test = () => {};
    const Msg = ({ closeToast }) => (
      <Row>
        <img src={alertToast} width="35px" height="35px" />
        <div style={{ marginLeft: "15px" }}>
          <AlertTitle>{roomid}</AlertTitle>
          <AlertContent>화상회의가 잠시 뒤 시작됩니다.</AlertContent>
        </div>
        <MoveBtn to={`/room/${roomid}`} className="linklogin">
          Go!
        </MoveBtn>
        {/* <ClosedBtn onClick={closeToast} style={{ marginLeft: "38px" }}>
          <img width="10px" height="10px" src={closedBtn} />
        </ClosedBtn> */}
      </Row>
    );
    if (
      window.location.pathname === "/auth/signIn" ||
      window.location.pathname === "/auth/signUp" ||
      window.location.pathname === "/auth/authCheck" ||
      window.location.pathname === "/auth/connectSignIn"
    ) {
      return (
        <NavContainer>
          <Link to="/">
            <LogoContainer>
              <img width="129px" height="40px" src={LogoBlackIcon} />
            </LogoContainer>
          </Link>
          <BtnContainer>
            <NavBtn to="/auth/signIn" activeStyle={active}>
              로그인
            </NavBtn>

            <NavBtn
              to="/auth/signUp"
              style={{ marginLeft: "7px" }}
              activeStyle={active}
            >
              회원가입
            </NavBtn>
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavClickItem>Home</NavClickItem>
            </Link>
            <Link to="/home/issue" style={{ textDecoration: "none" }}>
              <NavItem>Service</NavItem>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <NavItem>About</NavItem>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <NavItem>FAQ</NavItem>
            </Link>
            <AuthBox style={{ marginLeft: "57px" }}>
              <NavBtn to="/auth/signIn">로그인</NavBtn>

              <NavBtn to="/auth/signUp" style={{ marginLeft: "7px" }}>
                회원가입
              </NavBtn>
            </AuthBox>
          </HomeNav>
        </div>
      );
    } else if (
      window.location.pathname === "/auth/projectManage" ||
      window.location.pathname === "/auth/projectAdd" ||
      window.location.pathname === "/auth/projectManage" ||
      window.location.pathname === "/auth/projectList"
    ) {
      return (
        <NavContainer>
          <Link to="/">
            <LogoContainer>
              <img width="129px" height="40px" src={LogoBlackIcon} />
            </LogoContainer>
          </Link>
          <NavRight>
            <img
              width="45px"
              height="46px"
              src={userProfile}
              alt="프로필이미지"
              style={{ marginRight: "13px" }}
            />
            <UserInfoContainer>
              <UserName style={{ color: "var(--brownish-grey)" }}>
                권주희 Kwonju hee
              </UserName>
            </UserInfoContainer>
            <MoreInfo>
              <img width="12px" height="6px" src={moreInfo} />
            </MoreInfo>
          </NavRight>
        </NavContainer>
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
            <Link to="/">
              <LogoContainer>
                <img width="129px" height="40px" src={LogoWhiteIcon} />
              </LogoContainer>
            </Link>
            <NavRight>
              <Dropdown style={{ zIndex: 100 }} />

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
