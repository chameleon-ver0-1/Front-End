import React, { Component } from "react";

import styled from "styled-components";

import logo from "../../../assets/conferenceRoom/videohome_logo.png";
import user from "../../../assets/conference/people.png";
import mic from "../../../assets/conferenceRoom/videohome_mic.png";
import volume from "../../../assets/conferenceRoom/videohome_volume.png";
import video from "../../../assets/conferenceRoom/videohome_video.png";
import setting from "../../../assets/conferenceRoom/videohome_setting.png";
import openDrawer from "../../../assets/conferenceRoom/openDrawer@3x.png";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon } from "antd";
import delay from "delay";

const UpperNav = styled.div`
  width: 100%;
  height: 56px;
  background: var(--white-four);

  display: flex;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const WhiteLogo = styled.div`
  width: 63px;
  height: 56px;
  background: var(--greenish-teal);
  text-align: center;
  padding-top: 8px;
`;
const ConferenceTitle = styled.div`
  margin-left: 26px;
  font-size: 22px;
  color: var(--light-black);
  margin-top: 16px;
  overflow: hidden;
`;
const UserCount = styled.div`
  margin-top: 17px;
  margin-left: 20px;
`;
const CountText = styled.div`
  color: var(--greenish-teal);
  font-size: 22px;

  padding: 0px;
  margin-left: 8px;
  margin-top: 12px;
  overflow: auto;
`;
const Timer = styled.div`
  background: var(--greenish-teal);
  width: 65px;
  height: 26px;
  margin-top: 14px;
  margin-left: 14px;

  border-radius: 11.5px;
  color: white;
  font-size: 15px;
  text-align: center;

  overflow: hidden;
`;
const ButtonBox = styled.div`
  margin-left: 155px;

  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
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

const Closed = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 507px;
  padding-left: 16px;
  flex: 1;
`;
const FixFlexContainer = styled.div`
  flex: 8;
`;

export class VideoNav extends Component {
  state = { open: undefined };
  toggle = () => this.setState(state => ({ open: !state.open }));
  render() {
    const state =
      this.state.open === undefined
        ? "peek"
        : this.state.open
        ? "open"
        : "close";

    const icon = this.state.open ? "fold" : "unfold";

    return (
      <FixFlexContainer>
        <UpperNav>
          <ContainerLeft>
            <WhiteLogo>
              <img width="45px" margin="8px" src={logo} />
            </WhiteLogo>
            <ConferenceTitle>4월 간행물 표지 초안</ConferenceTitle>
            <UserCount>
              <img width="20px" height="21px" margin="17px" src={user} />
            </UserCount>
            <CountText>6</CountText>
            <Timer>1:34:03</Timer>
          </ContainerLeft>
          <ButtonBox>
            <ButtonItem>
              <img width="52px" src={mic} />
            </ButtonItem>
            <ButtonItem>
              <img width="52px" src={volume} />
            </ButtonItem>
            <ButtonItem>
              {" "}
              <img width="52px" src={video} />
            </ButtonItem>
            <ButtonItem>
              {" "}
              <img width="52px" src={setting} />
            </ButtonItem>
          </ButtonBox>
          <Closed>
            <ButtonItem>
              <img
                width="10px"
                height="22px"
                src={openDrawer}
                type={`menu-${icon}`}
                className="sidebar-toggle"
                onClick={this.toggle}
              />
            </ButtonItem>
          </Closed>
        </UpperNav>

        <div />
      </FixFlexContainer>
    );
  }
}

export default VideoNav;
