/**
 * 담당자:조윤영
 * [OUTLINE]
 * VideoMenubar파일은 화상회의실의 좌측의 메뉴화면 컴포넌트이다.
 */
import React, { Component } from "react";
import styled from "styled-components";
import home from "../../../assets/conferenceRoom/videohome_home_on.png";
import sharingIcon from "../../../assets/conferenceRoom/videohome_sharing_off.png";
import doc from "../../../assets/conferenceRoom/videohome_doc_off.png";
import logoIcon from "../../../assets/conferenceRoom/videohome_logo.png";

import { Logo, LeftNav, ButtonItem, HomeItem } from "./webrtc.style";

const onSharing = () => {
  //TODO: 화면 공유 버튼 on/off state에 따라서 함수 실행시키기
  //화면  공유 기능
  const getScreenId = (error, sourceId, screen_constraints) => {
    if (
      navigator.userAgent.indexOf("Edge") !== -1 &&
      (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)
    ) {
      navigator.getDisplayMedia(screen_constraints).then(
        stream => {
          document.querySelector("video").srcObject = stream;
        },
        error => {
          alert("Please make sure to use Edge 17 or higher.");
        }
      );
      return;
    }
  };
  //TODO: 화면 공유 버튼 on/off state에 따라서 함수 실행시키기
  //chrome extension 설치 여부 detection
  const getChromeExtensionStatus = status => {
    if (status === "installed-enabled") alert("installed");
    if (status === "installed-disabled") alert("installed but disabled");
    // etc.
  };

  console.log("1");
};

export class VideoMenubar extends Component {
  render() {
    return (
      <LeftNav>
        <Logo>
          <img width="62px" height="69px" margin="7px" src={logoIcon} />
        </Logo>
        <HomeItem>
          <img width="35px" height="35px" src={home} />
        </HomeItem>
        <ButtonItem>
          <img
            width="35px"
            height="35px"
            src={sharingIcon}
            onClick={onSharing}
          />
        </ButtonItem>
        <ButtonItem>
          <img width="35px" height="35px" src={doc} />
        </ButtonItem>
      </LeftNav>
    );
  }
}

export default VideoMenubar;
