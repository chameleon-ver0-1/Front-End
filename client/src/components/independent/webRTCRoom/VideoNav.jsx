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
import logo from "../../../assets/conferenceRoom/videohome_logo.png";
import participants from "../../../assets/conferenceRoom/participants.png";
import mic from "../../../assets/conferenceRoom/videohome_speaking.png";

import Fade from "react-reveal/Fade";
import InviteDialog from "./InviteDialog";

import {
  UpperNav,
  ConferenceTitle,
  UserCount,
  RoundDiv,
  NavP
} from "./webrtc.style";

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
          <RoundDiv style={{ width: "74px" }}>
            <img width="15px" height="17px" margin="17px" src={participants} />
            <NavP style={{ color: "white", marginLeft: "5px" }}>4</NavP>
          </RoundDiv>
        </UserCount>
        <Fade when={this.state.show}>
          <InviteDialog />
        </Fade>
        <RoundDiv style={{ width: "74px", color: "var(--greenish-teal)" }}>
          1:34:03
        </RoundDiv>
      </UpperNav>
    );
  }
}

export default VideoNav;
