import React from "react";
import { Transition, animated } from "react-spring/renderprops";
import lorem from "lorem-ipsum";
import emoji from "random-unicode-emoji";
import classnames from "classnames";
import "./chatting.style.css";
import styled from "styled-components";
import FreeScrollbar from "react-free-scrollbar";
import FileIcon from "../../../assets/issue/issue_file.png";
import MessageSendIcon from "../../../assets/message/message_send.png";

const ChatMessageBox = styled.div`
  --box-main-color: rgba(0, 0, 0, 0.2);
  --box-shadow-h-offset: 0.8px;
  --box-shadow-v-offset: 0.6px;
  --box-shadow-blur: 7px;
  margin-top: 10px;

  width: 286px;
  height: 222px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);
`;
const ChatOpponent = styled.div`
  padding-top: 10px;
  padding-left: 12px;
  height: 34px;
  background: var(--white-four);

  color: var(--greenish-teal);
  font-size: 0.7rem;
`;
const ChatInput = styled.div`
  display: flex;
`;
const FileBtn = styled.button`
  width: 32px;
  height: 29px;
  border: none;
  background: none;
  online: none;
  margin-top: 3px;
`;
const InputBorder = styled.div`
  width: 220px;
  height: 29px;
  background: white;
  display: flex;
  align-items: center;
`;
const MessageInput = styled.input`
  width: 225px;
  height: 29px;
  border: none;
  font-size: 12px;
`;
const SendBtn = styled.button`
  width: 21px;
  height: 21px;
  border: none;
  inline: none;
  background: none;
  margin-top: 3px;
`;

function addItem(state) {
  const items = [...state.items];
  const previous = state.items[state.items.length - 1];
  const left = Math.round(Math.random()) === 1;
  const first = previous === undefined || previous.left !== left;
  const text = "hi";
  if (previous !== undefined) previous.last = first;
  items.push({ key: state.items.length, text, left, first, last: true });
  return { items };
}

let count = 0;
export default class Chattings extends React.PureComponent {
  state = { items: [] };

  list = React.createRef();
  el = React.createRef();

  addItems = () =>
    setTimeout(
      () => void (this.setState(addItem), count++ < 10 && this.addItems()),
      this.state.items.length ? Math.random() * 1000 : 0
    );

  componentDidMount() {
    this.addItems();
  }
  render() {
    return (
      <ChatMessageBox>
        <ChatOpponent>이름 Cho yoon young</ChatOpponent>
        <div style={{ height: "140px" }}>
          <div className="chat-container">
            <ul className="ul-c" ref={this.list}>
              <Transition
                native
                items={this.state.items}
                keys={item => item.key}
                from={{ opacity: 0, transform: "translate3d(0,60px,0)" }}
                enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                config={{ tension: 50, friction: 25 }}
              >
                {({ text, left, first, last }, i, state) => styles => (
                  <animated.li
                    ref={state === "enter" && this.el}
                    className={classnames({
                      left,
                      right: !left,
                      first,
                      last
                    })}
                    style={styles}
                  >
                    {text}
                  </animated.li>
                )}
              </Transition>
            </ul>
          </div>
        </div>
        <ChatInput>
          <FileBtn>
            <img width="15px" height="19px" src={FileIcon} alt="file" />
          </FileBtn>
          <InputBorder>
            <MessageInput placeholder="메시지를 입력하세요" />
          </InputBorder>
          <SendBtn>
            <img
              width="21px"
              height="21px"
              src={MessageSendIcon}
              alt="sendbtn"
            />
          </SendBtn>
        </ChatInput>
      </ChatMessageBox>
    );
  }
  componentDidUpdate() {
    if (this.el.current)
      this.el.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
  }
}
