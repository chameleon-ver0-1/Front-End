import React, { Component } from "react";
import styled from "styled-components";
import home from "../../../assets/conferenceRoom/videohome_home.png";
import monitor from "../../../assets/conferenceRoom/videohome_monitor.png";
import doc from "../../../assets/conferenceRoom/videohome_doc.png";
const LeftNav = styled.div`
  width: 63px;
  height: 767px;
  background: #4dcf99;
`;
const ButtonItem = styled.button`
  width: 63px;
  height: 55px;
  text-align: center;

  border: none;
  background: none;
  outline: none;
`;
const HomeItem = styled.button`
  width: 63px;
  height: 55px;
  text-align: center;

  border: none;
  background: #88dfba;
  outline: none;
`;

export class VideoMenubar extends Component {
  render() {
    return (
      <div>
        <LeftNav>
          <HomeItem>
            <img width="63px" height="55px" src={home} />
          </HomeItem>
          <ButtonItem>
            <img width="63px" height="55px" src={monitor} />
          </ButtonItem>
          <ButtonItem>
            <img width="63px" height="55px" src={doc} />
          </ButtonItem>
        </LeftNav>
      </div>
    );
  }
}

export default VideoMenubar;
