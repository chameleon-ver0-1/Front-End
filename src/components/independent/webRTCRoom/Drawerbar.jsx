import React, { Fragment } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon } from "antd";
import delay from "delay";

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ x: -100, from: { x: 0 }, delay: 500 }, { x: 0, delay: 800 }],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400);
    await call({ delay: 0, x: 0 });
  }
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: -100, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: 0, opacity: 0, delay: 0 }
  ],
  open: { x: -100, opacity: 1, delay: 100 },
  close: { x: 0, opacity: 0, delay: 0 }
});
const items = [
  <React.Fragment>
    <div>hi this is drawerbar test</div>
  </React.Fragment>
];

export default class App extends React.Component {
  state = { open: undefined };
  toggle = () => this.setState(state => ({ open: !state.open }));
  render() {
    const state =
      this.state.open === undefined
        ? "peek"
        : this.state.open
        ? "open"
        : "close";
    const icon = this.state.open ? "fold" : "unfold";
    return (
      <div style={{ background: "lightblue", width: "50px", height: "100%" }}>
        {/* <Icon
          type={`menu-${icon}`}
          className="sidebar-toggle"
          onClick={this.toggle}
        /> */}
        <Sidebar native state={state}>
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
                      ...props
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
