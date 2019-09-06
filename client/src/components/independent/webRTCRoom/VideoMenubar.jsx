/**
 * 담당자:조윤영
 * [OUTLINE]
 * VideoMenubar파일은 화상회의실의 좌측의 메뉴화면 컴포넌트이다.
 */
import React, { Component } from "react";

import homeOn from "../../../assets/conferenceRoom/videohome_home_on.png";
import sharingIcon from "../../../assets/conferenceRoom/videohome_sharing_off.png";
import doc from "../../../assets/conferenceRoom/videohome_doc_off.png";
import logoIcon from "../../../assets/conferenceRoom/videohome_logo.png";
import exitOn from "../../../assets/conferenceRoom/videohome_exit_on.png";
import exitOff from "../../../assets/conferenceRoom/videdohome_exit_off.png";

import {
  Logo,
  LeftNav,
  ButtonItem,
  HomeItem,
  LeftBottomDiv,
  LeftUpperDiv
} from "./webrtc.style";

export class VideoMenubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseCheck: false
    };
  }
  onExit = () => {
    this.setState({
      open: true
    });
  };
  onExitCancel = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <LeftNav>
        <LeftUpperDiv>
          <Logo>
            <img width="62px" height="69px" margin="7px" src={logoIcon} />
          </Logo>
          <HomeItem>
            <img width="35px" height="35px" src={homeOn} />
          </HomeItem>
          <ButtonItem>
            <img width="35px" height="35px" src={sharingIcon} />
          </ButtonItem>
          <ButtonItem>
            <img width="35px" height="35px" src={doc} />
          </ButtonItem>
        </LeftUpperDiv>
        <LeftBottomDiv>
          <ButtonItem onClick={this.onExit}>
            <img width="29px" height="25px" src={exitOff} />
          </ButtonItem>
        </LeftBottomDiv>
      </LeftNav>
    );
  }
}

export default VideoMenubar;
