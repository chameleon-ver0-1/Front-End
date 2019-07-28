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
`;
const SideBar = styled.div`
  height: 80%;
  width: 0;
  position: fixed;
  z-index: 0;
  top: 122px;
  right: 0;
  background-color: var(--white-four);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;
const VideoBaseContainer = styled.div`
  width: 100%;
`;
const NavDivider = styled.div`
  display: flex;
`;
const SecondBox = styled.div`
  width: 100%;
  height: 767px;
  background: var(--brownish-grey);

  display: flex;
  flex-direction: row;
`;
const ToggleBtn = styled.div`
  flex: 0.3;
  background: var(--white-four);
  width: 10px;
  height: 51px;
  display: flex;
  align-items: center;
`;
const ButtonItem = styled.button`
  width: 52px;
  height: 52px;
  text-align: center;
  padding: 5px;
  border: none;
  background: none;
  outline: none;
`;
var cnt = 1;
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
        <NavDivider>
          <VideoNav />
          <ToggleBtn onClick={this.onToggle}>
            <img
              id="toggleBtn"
              src={
                this.state.slideMenuActive == false ? closeDrawer : openDrawer
              }
              width="10px"
              height="22px"
              style={{ background: "var(--white-four)" }}
            />
          </ToggleBtn>
        </NavDivider>
        <MainView id="main">
          <SecondBox>
            <div
              style={{ width: "80%", display: "flex", flexDirection: "row" }}
            >
              <VideoMenubar />
              <VideoItem />
            </div>

            <SideBar id="mySidebar" class="sidebar">
              <TopicDrawerBar />
              <button
                style={{
                  position: "absolute",
                  top: "0",
                  right: "25px",
                  fontSize: "36px",
                  marginLeft: "50px"
                }}
              >
                ×
              </button>
            </SideBar>
          </SecondBox>
        </MainView>
      </VideoBaseContainer>
    );
  }
}

export default WebRTCRoom;
