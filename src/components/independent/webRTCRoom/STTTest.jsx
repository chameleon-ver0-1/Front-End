import React, { Component } from "react";
import styled from "styled-components";
import topicCheckOff from "../../../assets/conferenceRoom/videohome_check_off.png";
const TopicItem = styled.div`
  font-size: 12px;
  height: 31px;
  padding-left: 13px;
  padding-top: 5px;
  color: var(--brownish-grey);
  display: flex;
  flex-direction: row;
`;
const TopicButton = styled.button`
  display: block;
  margin-left: 100px;
  margin-top: 0px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
`;

const topics = [
  <div>
    <TopicItem>
      첫 번째 토픽
      <TopicButton>
        <img src={topicCheckOff} width="16px" />
      </TopicButton>
    </TopicItem>
    <hr />
  </div>
];
const records = [
  <React.Fragment>
    <div
      style={{
        fontSize: "12px",
        paddingTop: "29px",
        paddingLeft: "18px",
        paddingBottom: "22px"
      }}
    >
      주제1에 대한 회의록 기록 주제1에 대한 회의록 기록주제1에 대한 회의록 기록
      주제1에 대한 회의록 기록주제1에 대한 회의록 기록 주제1에 대한 회의록
      기록주제1에 대한 회의록 기록 주제1에 대한 회의록 기록 주제1에 대한 회의록
      기록 주제1에 대한 회의록 기록주제1에기록 주제1에 대한 회의록
      기록주제1에주제1에기록 주제1에 대한 회의록 기록주제1에
    </div>
    <hr />
  </React.Fragment>
];
export class STTTest extends Component {
  render() {
    return (
      <div style={{ background: "var(--white-five)", width: "252px" }}>
        <div className="test" style={{ backgroundColor: "var(--white-five)" }}>
          <div>
            <div
              style={{
                color: "var(--greenish-teal)",
                fontSize: "16px",
                background: "var(--white-five)",
                height: "28px",
                paddingLeft: "13px",
                paddingTop: "5px"
              }}
            >
              메인 토픽
            </div>
            <div style={{ height: "125px" }}>
              {topics}
              {topics}
              {topics}
            </div>
          </div>
          <div
            style={{
              color: "var(--greenish-teal)",
              fontSize: "16px",
              background: "var(--white-five)",
              height: "28px",
              paddingLeft: "13px",
              paddingTop: "5px"
            }}
          >
            실시간 회의 기록
          </div>
          <div>{records}</div>
        </div>
      </div>
    );
  }
}

export default STTTest;
