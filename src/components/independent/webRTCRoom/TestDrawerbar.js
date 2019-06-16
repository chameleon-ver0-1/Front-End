// import "antd/dist/antd.css";
import React, { Fragment } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon, Input, Button, Checkbox } from "antd";
import delay from "delay";

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ x: 1440, from: { x: 1300 }, delay: 500 }, { x: 1440, delay: 800 }],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400);
    await call({ delay: 0, x: 1440 });
  }
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: 1440, opacity: 1, from: { x: 1300, opacity: 0 }, delay: 600 },
    { x: 1440, opacity: 0, delay: 0 }
  ],
  open: { x: 1300, opacity: 1, delay: 100 },
  close: { x: 1440, opacity: 0, delay: 0 }
});

const items = [
  <Fragment>
    <div>hi this is drawerbar test</div>
  </Fragment>
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
      <div style={{ background: "lightblue", width: "100%", height: "100%" }}>
        <Icon
          type={`menu-${icon}`}
          className="sidebar-toggle"
          onClick={this.toggle}
        />
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
