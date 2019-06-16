import React, { Fragment } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon } from "antd";
import delay from "delay";
import styled from "styled-components";
import topicCheckOn from "../../../assets/conferenceRoom/videohome_check_on.png";
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

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ x: -10, from: { x: 0 }, delay: 500 }, { x: 0, delay: 800 }],
  // single items,
  open: { delay: 0, x: -10 },
  // or async functions with side-effects
  close: async call => {
    await delay(400);
    await call({ delay: 0, x: 0 });
  }
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: -10, opacity: 1, from: { x: 0, opacity: 0 }, delay: 600 },
    { x: 0, opacity: 0, delay: 0 }
  ],
  open: { x: -10, opacity: 1, delay: 100 },
  close: { x: 0, opacity: 0, delay: 0 }
});
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
  <Fragment>
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
      기록 주제1에 대한 회의록 기록주제1에기록 주제1에 대한 회의록 기록주제1에
    </div>
    <hr />
  </Fragment>
];
const items = [
  <Fragment>
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
  </Fragment>,
  <Fragment>
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
  </Fragment>,
  <div>{records}</div>,
  <div>{records}</div>,
  <div>{records}</div>
];
var state = undefined;
export default class Drawerbar extends React.Component {
  state = { open: undefined };

  render() {
    //TODO: WebRTCRoom의 state 가져와서 적용시키기
    this.componentWillReceiveProps = () => {
      //TODO: state를 전역변수로 두고 삽입해야한다.
      state =
        this.props.isToggle.open === undefined
          ? "peek"
          : this.props.isToggle.open
          ? "open"
          : "close";
      console.log(state);
    };
    return (
      <div
        style={{
          width: "200px",
          height: "100%"
        }}
      >
        {/* TODO: 여기 아래랑 */}
        <Sidebar native state={state} style={{}}>
          {({ x }) => (
            <animated.div
              className="sidebar"
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              <Content
                native
                items={items}
                keys={items.map((_, i) => i)}
                reverse={!this.state.open}
                //  TODO: 여기 아래랑
                state={state}
                style={{}}
              >
                {(item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props,
                      background: "var(--white-four)",
                      width: "252px",
                      height: "100%"
                    }}
                  >
                    <Form.Item className={i === 0 ? "middle" : ""}>
                      {item}
                    </Form.Item>
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </div>
    );
  }
}
