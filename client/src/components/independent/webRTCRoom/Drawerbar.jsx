/**
 * 담당자:조윤영
 * [OUTLINE]
 * Drawerbar파일은 화상회의실에서 우측 상단에 버튼 선택 시  우측에서 슬라이드 되는 drawer bar컴포넌트이다.
 * <p>
 * [METHOD]
 * componentWillReceiveProps(): 상위 컴포넌트로부터 전달받는 props를 판별하는 함수
 * <p>
 * [LIBRARY]
 * 1. react-spring: react-spring의 슬라이드 애니메이션 라이브러리
 * 2. delay: 애니메이션의 지연을 주는 라이브러리
 */

import React, { Fragment } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Form } from "antd";
import delay from "delay";
import styled from "styled-components";

import topicCheckOff from "../../../assets/conferenceRoom/videohome_check_off.png";

var state = undefined;

const DrawerFragment = styled.div`
  width: 200px;
  height: 100%;
  background: black;
  padding-left: 100px;
`;

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

/*Creates a spring with predefined animation slots*/
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

/*Creates a keyframed trail*/
const Content = Keyframes.Trail({
  peek: [
    { x: -10, opacity: 1, from: { x: 0, opacity: 0 }, delay: 600 },
    { x: 0, opacity: 0, delay: 0 }
  ],
  open: { x: -10, opacity: 1, delay: 100 },
  close: { x: 0, opacity: 0, delay: 0 }
});

/*토픽 컴포넌트*/
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

/*토픽에 따른 음성기록을 저장하는 컴포넌트*/
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
      기록 주제1에 대한 회의록 기록주제1에기록 주제1에 대한 회의록
      기록주제1에주제1에기록 주제1에 대한 회의록 기록주제1에
    </div>
    <hr />
  </Fragment>
];

/*애니메이션이 적용될 drawerbar 컴포넌트 아이템*/
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

export default class Drawerbar extends React.Component {
  state = { open: undefined }; //drawerbar의 open상태에 대해서 undefined로 초기화한다.

  render() {
    /*상위 컴포넌트로부터 전달받는 props를 판별하는 함수*/
    this.componentWillReceiveProps = () => {
      state =
        this.props.isToggle.open === undefined
          ? "peek"
          : this.props.isToggle.open
          ? "open"
          : "close";
    };
    return (
      <DrawerFragment>
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
                state={state}
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
      </DrawerFragment>
    );
  }
}
