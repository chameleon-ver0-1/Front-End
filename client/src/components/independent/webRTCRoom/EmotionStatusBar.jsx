import React, { Component } from "react";
import positive_default from "../../../assets/conference/conference_emotion_default.png";
import negative_default from "../../../assets/conference/conference_emotion_default_bad.png";
import positive from "../../../assets/conference/conference_emotoin_good.png";
import negative from "../../../assets/conference/conference_emotion_bad.png";
import loading from "../../../assets/conference/emotion_loading.gif";
import {
  EmotionStatus,
  EmotionSwitch,
  EmotionCircle,
  ConnectLine,
  EmotionButton
} from "./webrtc.style";
import { useAnimation } from "react-rebound";

function toggle(Inner) {
  return props => {
    const [toggled, setToggled] = React.useState(false);
    const onClick = React.useCallback(() => setToggled(t => !t), []);
    return <Inner {...props} toggled={toggled} onClick={onClick} />;
  };
}

export class EmotionStatusBar extends Component {
  render() {
    const { status, EmotionCheck } = this.props;
    return (
      <div>
        <EmotionStatus
          id="showEmotion"
          style={{ display: status.isShowEmotionStart ? "inline" : "none" }}
        >
          감정 분석을 시작합니다.
        </EmotionStatus>
        <EmotionSwitch>
          <EmotionCircle
            style={{
              visibility: status.isEmotionHearing ? "visible" : "hidden"
            }}
          >
            <img
              width="43px"
              height="42px"
              src={status.emotion == "긍정" ? positive : positive_default}
            ></img>
          </EmotionCircle>
          <ConnectLine
            style={{
              visibility: status.isEmotionHearing ? "visible" : "hidden"
            }}
          />

          <EmotionButton id="emotionBtn" onClick={EmotionCheck}>
            <img
              width="60px"
              height="60px"
              style={{ display: status.isWaiting ? "inline" : "none" }}
              src={loading}
            ></img>
            <div
              id="emotionDiv"
              style={{ display: status.isWaiting ? "none" : "inline" }}
            >
              OFF
            </div>
          </EmotionButton>

          <ConnectLine
            id="test"
            style={{
              visibility: status.isEmotionHearing ? "visible" : "hidden"
            }}
          />
          <EmotionCircle
            style={{
              visibility: status.isEmotionHearing ? "visible" : "hidden"
            }}
          >
            <img
              width="43px"
              height="42px"
              src={status.emotion == "부정" ? negative : negative_default}
            ></img>
          </EmotionCircle>
        </EmotionSwitch>
      </div>
    );
  }
}

export default EmotionStatusBar;
