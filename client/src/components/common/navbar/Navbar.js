import React, { Component } from "react";
import "./navbar.style.css";
import userProfile from "../../../assets/home/userProfile.png";
import moreInfo from "../../../assets/home/moreInfo.png";
import Dropdown from "./dropdownmenu/Dropdown";
import Fade from "react-reveal/Fade";
import alertOff from "../../../assets/home/alert_off.png";
import alertOn from "../../../assets/home/alert_on.png";
import alertToast from "../../../assets/home/alrert_list.png";
import MessagePopUp from "./messagepopup/MessagePopUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import closedBtn from "../../../assets/message/closed_btn@3x.png";
import { css } from "glamor";
import LogoWhiteIcon from "../../../assets/home/Logo_white.png";
const Row = styled.div`
  display: flex;
`;
const ClosedBtn = styled.button`
  border: none;

  background: none;
  outline: none;
`;
const AlertTitle = styled.div`
  font-size: 12px;
  font-family: NanumSquareEB;
  color: var(--greenish-teal);
`;
const AlertContent = styled.div`
  font-size: 12px;
  color: var(--brownish-grey);
`;
const LogoContainer = styled.div`
  height: 64px;
  width: 200px;
  display: flex;
  padding-left: 31px;
  align-items: center;
`;
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
  notify = () =>
    toast("Wow so easy !", {
      closeButton: true
    });

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
      window.location.pathname === "/auth/connectSignIn"
    ) {
      return (
        <div className="container">
          <div className="nav-container">
            <LogoContainer>
              <img width="129px" height="41px" src={LogoWhiteIcon} />
            </LogoContainer>
            <div className="btn-container">
              <div className="btn-p">
                <button className="nav-btn">로그인</button>
              </div>
              <button className="nav-btn">회원가입</button>
            </div>
          </div>
        </div>
      );
    }
    // window.location.pathname === "/home/issue" ||
    // window.location.pathname === "/home/conferenceRoom" ||
    // window.location.pathname === "/home/conferenceDocument" ||
    // window.location.pathname === "/home/conferenceDocumentDetail"
    else {
      return (
        <div className="container">
          <div className="nav2-container">
            <LogoContainer>
              <img width="129px" height="41px" src={LogoWhiteIcon} />
            </LogoContainer>
            <div className="nav-right">
              <Fade when={this.state.show}>
                <Dropdown />
              </Fade>
              <button className="notice-btn">
                <img
                  id="notice_im"
                  src={this.state.haveNotice ? alertOn : alertOff}
                  onClick={this.handleClick}
                />
              </button>

              <img
                className="userProfile"
                src={userProfile}
                alt="프로필이미지"
              />
              <div className="userInfo-container">
                <p className="userName">권주희 Kwonju hee</p>
                <p className="userDepartment">디자인 부서</p>
              </div>
              <button className="moreInfo" onClick={() => toast(<Msg />)}>
                <img src={moreInfo} className="moreInfo_im" />
              </button>
            </div>
          </div>

          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        </div>
      );
    }
    // } else {
    //   return <div />;
    // }
  }
}

export default Navbar;
