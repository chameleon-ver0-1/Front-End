/**
 * 담당자:조윤영
 * [OUTLINE]
 * VideoMenubar파일은 화상회의실 상단의 네비게이션 화면 컴포넌트이다.
 * <p>
 * [METHOD]
 * handleClick(): 초대링크를 나타내도록 show의 state값을 toggle하는 함수
 * openRoom(): 신규 화상회의 방 개설하는 함수
 * joinRoom(): 기존 개설된 화상회의 방을 들어가는 함수
 * openOrJoinRoom(): 신규 화상회의방을 개설하고 들어가는 함수
 *
 * <p>
 * [LIBRARY]
 * 1. Fade: 자연스럽게 나타나고 사라지게 하는 애니메이션 라이브러리
 */
import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../../assets/conferenceRoom/videohome_logo.png";
import user from "../../../assets/conference/people.png";
import mic from "../../../assets/conferenceRoom/videohome_speaking.png";

import Fade from "react-reveal/Fade";
import InviteDialog from "./InviteDialog";

const UpperNav = styled.div`
  width: calc((100vw - 64px) / 2);
  height: 56px;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConferenceTitle = styled.div`
  margin-left: 26px;
  font-size: 22px;
  color: white;

  overflow: hidden;
`;
const UserCount = styled.div`
  margin-left: 20px;
`;
const CountText = styled.button`
  color: var(--greenish-teal);
  font-size: 22px;
  height: 100%;
  display: flex;

  margin-left: 8px;
  align-items: center;
  overflow: auto;
  border: none;
  background: none;
  outline: none;
`;
const Timer = styled.div`
  background: var(--greenish-teal);
  width: 65px;
  height: 26px;

  margin-left: 14px;

  border-radius: 11.5px;
  color: white;
  font-size: 15px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export class VideoNav extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  /*초대링크를 나타내도록 show의 state값을 toggle하는 함수*/
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <UpperNav>
        <ConferenceTitle>4월 간행물 표지 초안</ConferenceTitle>
        <UserCount>
          <img width="20px" height="21px" margin="17px" src={user} />
        </UserCount>
        <CountText onClick={this.handleClick}>6</CountText>
        <Fade when={this.state.show}>
          <InviteDialog />
        </Fade>
        <Timer>1:34:03</Timer>
      </UpperNav>
    );
  }
}

export default VideoNav;
