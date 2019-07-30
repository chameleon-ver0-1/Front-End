/**
 * 담당자:조윤영
 * [OUTLINE]
 * WebRTCRoom의 전체 구성 컴포넌트를 조합하는 파일
 */
import React, { Component } from "react";
import VideoItem from "./VideoItem";
import VideoNav from "./VideoNav";
import VideoMenubar from "./VideoMenubar";
import styled from "styled-components";
import openDrawer from "../../../assets/conferenceRoom/toggleOpen.png";
import closeDrawer from "../../../assets/conferenceRoom/toggleClosed.png";
import TopicDrawerBar from "./TopicDrawerBar";

import SlideMenu from "react-slide-menu";

const MainView = styled.div`
  transition: margin-left 0.5s;
  width: 0;
`;
const SideBar = styled.div`
  height: calc(100% - 48px);
  width: 0;
  position: fixed;
  z-index: 0;
  top: 56px;
  right: 0;
  background-color: var(--white-four);
  overflow-x: hidden;
  transition: 0.5s;
`;
const VideoBaseContainer = styled.div`
  width: 100vw;
  display: flex;
  background: var(--brownish-grey);
`;

const SecondBox = styled.div`
  width: calc(100vw - 64px);
  height: calc(100vh - 56px);
  background: var(--brownish-grey);
`;
const ToggleBtn = styled.div`
  width: 30px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  width: calc(100vw - 64px);
`;
const ToggleDiv = styled.div`
  width: calc((100vw - 64px) / 2);
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

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
