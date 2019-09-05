import React, { Component } from "react";
import { CircleBtn, VideoControlContainer, RoundDiv } from "./webrtc.style";

import videoOn from "../../../assets/conferenceRoom/videohome_video_on.png";
import videoOff from "../../../assets/conferenceRoom/videohome_video_off.png";
import micOn from "../../../assets/conferenceRoom/videohome_mic_on.png";
import micOff from "../../../assets/conferenceRoom/videohome_mic_off.png";
import speakerOn from "../../../assets/conferenceRoom/videohome_speaker_on.png";
import speakerOff from "../../../assets/conferenceRoom/videohome_speaker_off.png";
import setting from "../../../assets/conferenceRoom/videohome_setting_on.png";

export class VideoControlButtons extends Component {
  render() {
    return (
      <VideoControlContainer>
        <CircleBtn
          style={{ background: "#2e373e", border: "1px solid #2e373e" }}
        >
          <img width="14px" height="20px" src={speakerOn}></img>
        </CircleBtn>
        <CircleBtn>
          <img width="21px" height="15px" src={videoOn}></img>
        </CircleBtn>
        <CircleBtn>
          <img width="15px" height="21px" src={micOn}></img>
        </CircleBtn>
        <RoundDiv style={{ width: "54px", background: "var(--greenish-teal)" }}>
          <img width="22px" height="24px" src={setting} />
        </RoundDiv>
      </VideoControlContainer>
    );
  }
}

export default VideoControlButtons;
