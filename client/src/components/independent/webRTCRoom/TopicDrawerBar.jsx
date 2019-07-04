/**
 * 담당자:조윤영 Edit By.권소영
 * [OUTLINE]
 * TopicDrawerBar파일은 기존 DrawerBar컴포넌트를 고정하여 STT를 적용한 컴포넌트.
 * <p>
 * [METHOD]
 * recognition.onstart(): STT 인식 시작하는 함수
 * recognition.onend(): stt 인식 종료하는 함수
 * recognition.onresult(): 인식된 결과 처리하는 함수
 * recognition.onerror(): 에러를 처리하는 함수
 * onJoin(): STT 시작하는 함수
 * writeMessage(type, name, message): 인식된 메시지 프론트에 기록하는 함수
 * sender(text): socket.io 서버에 유저이름, 인식된 메시지 전송하는 함수
 *
 *
 * <p>
 * [LIBRARY]
 * 1. io: socket에 연결하기 위한 라이브러리
 */
import React, { Component } from "react";
import styled from "styled-components";
import topicCheckOff from "../../../assets/conferenceRoom/videohome_check_off.png";
import io from "socket.io-client";

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
  <React.Fragment>
    <div>
      <textarea
        value=""
        type="textarea"
        wrap="soft"
        id="stt-message"
        disabled="true"
        cols="37"
        rows="10"
        style={{
          fontSize: "12px",
          paddingTop: "29px",
          paddingLeft: "18px",
          paddingBottom: "22px"
        }}
      />
      <hr />
    </div>
  </React.Fragment>
];

//--------------------------------------------------------
//-----------------Speech Recognition Code----------------
//--------------------------------------------------------

var isRecognizing = false;
var ignoreEndProcess = false;
var finalTranscript = "";

window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;

var recognition = new window.webkitSpeechRecognition();
const language = "ko-KR";
recognition.continuous = true; // 음성이 인식될 때마다 결과값 반환
recognition.interimResults = true; // 끝나지 않은 상태의 음성 반환 설정

/** STT 인식 시작 함수*/
recognition.onstart = function() {
  console.log("onstart", arguments);
  isRecognizing = true;
};

/** STT 인식 종료 함수*/
recognition.onend = function() {
  console.log("onend", arguments);
  isRecognizing = false;

  if (ignoreEndProcess) {
    return false;
  }

  if (!finalTranscript) {
    console.log("empty finalTranscript");
    return false;
  }
};
/** 인식된 결과 처리 함수 */
recognition.onresult = function(event) {
  console.log("onresult", event);

  let interimTranscript = "";
  if (typeof event.results === "undefined") {
    recognition.onend = null;
    recognition.stop();
    return;
  }

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      // TODO: 소켓서버로 인식된 결과 문장 전송
      sender(event.results[i][0].transcript);
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }

  console.log("finalTranscript", finalTranscript);
  console.log("interimTranscript", interimTranscript);
};
/** 에러 처리 함수 */
recognition.onerror = function(event) {
  console.log("onerror", event);

  if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
    ignoreEndProcess = true;
  }
};

/** STT 시작하는 함수 */
const onJoin = () => {
  if (isRecognizing) {
    alert("이미 참여 중입니다.");
    return;
  }

  recognition.lang = language;
  recognition.start();
  ignoreEndProcess = false;

  finalTranscript = "";
};

/** STT 종료하는 함수 */
const onExit = () => {
  if (isRecognizing) {
    recognition.stop();
    return;
  }
};

//--------------------------------------------------------
//-----------------Send to socket.io Server---------------
//--------------------------------------------------------

var serverURL = "localhost:50000";
var name = "me";
var room = "100";
var socket = null;

var chatLogs = "";

/* 인식된 메시지 프론트에 기록하는 함수*/
function writeMessage(type, name, message) {
  console.log("[채팅방 기록]: " + message);

  var printName = "";
  if (type === "me") {
    printName = name + ":";
  }

  chatLogs += "\n" + printName + message;

  document.getElementById("stt-message").value = chatLogs;
}
/* socket.io 서버에 유저이름, 인식된 메시지 전송하는 함수 */
function sender(text) {
  socket.emit("user", {
    name: name,
    message: text
  });
  writeMessage("me", name, text);
}

export class STTTest extends Component {
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "http://cdn.socket.io/socket.io-1.4.0.js";

    socket = io.connect(serverURL);
    socket.on("connection", function(data) {
      console.log("connect");
      if (data.type === "connected") {
        socket.emit("connection", {
          type: "join",
          name: name,
          room: room
        });
      }
    });

    socket.on("system", function(data) {
      writeMessage("system", "system", data.message);
    });
    socket.on("message", function(data) {
      writeMessage("other", data.name, data.message);
    });
  }
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
        <section className="center">
          <div className="button-panel">
            <button id="btnJoin" onClick={onJoin} className="off">
              Join
            </button>
            <button id="btnExit" onClick={onExit}>
              Exit
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default STTTest;
