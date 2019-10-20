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
  EmotionButton,
  EmotionDiv
} from "./webrtc.style";
import { Animate } from "react-rebound";

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
          <Animate
            scaleX={status.emotion == "긍정" ? 1.4 : 1}
            scaleY={status.emotion == "긍정" ? 1.4 : 1}
            tension={200}
            friction={400}
            delay={100}
          >
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
          </Animate>
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
            <EmotionDiv
              id="emotionDiv"
              style={{ display: status.isWaiting ? "none" : "inline" }}
            >
              OFF
            </EmotionDiv>
          </EmotionButton>

          <ConnectLine
            id="test"
            style={{
              visibility: status.isEmotionHearing ? "visible" : "hidden"
            }}
          />
          <Animate
            scaleX={status.emotion == "부정" ? 1.4 : 1}
            scaleY={status.emotion == "부정" ? 1.4 : 1}
            tension={200}
            friction={400}
            delay={100}
          >
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
          </Animate>
        </EmotionSwitch>
      </div>
    );
  }
}

export default EmotionStatusBar;
