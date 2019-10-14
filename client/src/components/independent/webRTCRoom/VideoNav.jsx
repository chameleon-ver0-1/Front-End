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
import participants from "../../../assets/conferenceRoom/videohome_participants.png";

import Fade from "react-reveal/Fade";
import InviteDialog from "./InviteDialog";

import {
  UpperNav,
  ConferenceTitle,
  UserCount,
  RoundDiv,
  NavP,
  CircleBtn
} from "./webrtc.style";

export class VideoNav extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, d: new Date() };
  }
  componentDidMount() {
    // Clockcmp 컴포넌트가 불러올때마다 1초씩 this.Change()를 부른다

    this.timeID = setInterval(() => this.onChangeTime(), 1000);
  }
  componentWillUnmount() {
    //종료되면 반복하는것도 클리어시키기
    clearInterval(this.timeID);
  }
  onChangeTime = () => {
    this.setState({
      d: new Date()
    });
  };
  /*초대링크를 나타내도록 show의 state값을 toggle하는 함수*/
  showUserList = e => {
    this.setState({ show: !this.state.show });
    document.getElementById("userListBtn").style.backgroundColor =
      "var(--greenish-teal)";
  };
  render() {
    var currentTime =
      this.state.d.getHours() +
      ":" +
      this.state.d.getMinutes() +
      ":" +
      this.state.d.getSeconds();

    const { memberList, title, onEmotionStart } = this.props;
    return (
      <UpperNav>
        <ConferenceTitle>{title}</ConferenceTitle>
        <UserCount>
          <RoundDiv
            id="userListBtn"
            style={{ width: "54px" }}
            onClick={this.showUserList}
          >
            <img width="15px" height="17px" margin="17px" src={participants} />
            <NavP style={{ color: "white", marginLeft: "5px" }}>4</NavP>
          </RoundDiv>
        </UserCount>

        <Fade when={this.state.show}>
          <InviteDialog memberList={memberList} />
        </Fade>
        <RoundDiv
          style={{
            width: "80px",
            color: "var(--greenish-teal)",
            marginLeft: "15px",
            fontSize: "16.5px",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}
        >
          {currentTime}
        </RoundDiv>
        <RoundDiv
          onClick={onEmotionStart}
          style={{
            width: "auto",
            color: "white",
            marginLeft: "10px",
            fontSize: "16.5px",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}
        >
          감정인식
        </RoundDiv>
      </UpperNav>
    );
  }
}

export default VideoNav;
