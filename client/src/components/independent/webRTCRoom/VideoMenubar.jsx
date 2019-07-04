/**
 * 담당자:조윤영
 * [OUTLINE]
 * VideoMenubar파일은 화상회의실의 좌측의 메뉴화면 컴포넌트이다.
 */
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
      <div>
        <LeftNav>
          <HomeItem>
            <img width="63px" height="55px" src={home} />
          </HomeItem>
          <ButtonItem>
            <img width="63px" height="55px" src={monitor} onClick={onSharing} />
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
