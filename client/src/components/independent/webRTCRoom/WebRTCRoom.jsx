/**
 * 담당자:조윤영
 * [OUTLINE]
 * WebRTCRoom의 전체 구성 컴포넌트를 조합하는 파일
 */
import React, { Component } from "react";
import VideoItem from "./VideoItem";
import VideoNav from "./VideoNav";
import VideoMenubar from "./VideoMenubar";
import TopicDrawerBar from "./TopicDrawerBar";

import openDrawer from "../../../assets/conferenceRoom/toggleOpen.png";
import closeDrawer from "../../../assets/conferenceRoom/toggleClosed.png";

import {
  MainView,
  SideBar,
  VideoBaseContainer,
  SecondBox,
  ToggleBtn,
  Row,
  ToggleDiv
} from "./webrtc.style";

export class WebRTCRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { slideMenuActive: false };
  }

  onToggle = () => {
    this.setState({
      slideMenuActive: !this.state.slideMenuActive
    });

    if (this.state.slideMenuActive == true) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
    } else {
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("main").style.marginRight = "0px";
    }
  };
  render() {
    // this.state.slideMenuActive = false;

    return (
      <VideoBaseContainer>
        <VideoMenubar />
        <div>
          <Row>
            <VideoNav />
            <ToggleDiv>
              <ToggleBtn onClick={this.onToggle}>
                <img
                  id="toggleBtn"
                  src={
                    this.state.slideMenuActive == false
                      ? closeDrawer
                      : openDrawer
                  }
                  width="16px"
                  height="23px"
                />
              </ToggleBtn>
            </ToggleDiv>
          </Row>
          <SecondBox>
            <VideoItem />
            <MainView id="main">
              <SideBar id="mySidebar" class="sidebar">
                <TopicDrawerBar />
              </SideBar>
            </MainView>
          </SecondBox>
        </div>
      </VideoBaseContainer>
    );
  }
}

export default WebRTCRoom;
