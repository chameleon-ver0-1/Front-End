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
import topicCheckOff from "../../../assets/conferenceRoom/videohome_check_off.png";
import io from "socket.io-client";
import {
  DrawerContainer,
  DrawerTitleContainer,
  RecordTime,
  TopicContainer,
  TopicItem,
  DarkDivideLine,
  RecordItem,
  RecordItemColor,
  RecordBorder,
  TimeStamp
} from "./webrtc.style";

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
  // console.log("onresult", event);

  let interimTranscript = "";
  if (typeof event.results === "undefined") {
    recognition.onend = null;
    recognition.stop();
    return;
  }

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      // 인식된 문장이 끝났을 경우
      sender(event.results[i][0].transcript);
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }

  // console.log("finalTranscript", finalTranscript);
  // console.log("interimTranscript", interimTranscript);
};
/** 에러 처리 함수 */
recognition.onerror = function(event) {
  console.log("onerror", event);

  if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
    ignoreEndProcess = true;
  }
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

var serverURL = "https://s.chameleon4switch.cf/";
var name = localStorage.getItem("name");
var room = localStorage.getItem("roomId");
var color;
var socket = null;

var boxes = new Array();

/* 인식된 메시지 프론트에 기록하는 함수*/
function writeMessage(color, name, message) {
  var box = new Object();

  //console.log("here is color => " + color);
  box.color = color;
  box.name = name;
  box.message = message;

  boxes.push(box);
  // console.log(JSON.stringify(boxes) + "***");
}

/* socket.io 서버에 유저이름, 인식된 메시지 전송하는 함수 */
function sender(text) {
  socket.emit("user", {
    color: color,
    name: name,
    message: text
  });
  writeMessage(color, name, text);
}

export class TopicDrawerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: new Date(),
      chatLogs: "",
      startTime: new Date(),
      isTopicClicked: [],
      currentTopic: ""
    };
    this.items = [];
    for (let i = 1; i <= 5; i++) {
      this.items.push(i);
    }
  }
  componentDidMount() {
    /*회의 시작 시간 state에 담아둔다: 회의 종료 시간과 계산하여 회의 총 시간 계산 예정 */
    this.setState({
      startTime: new Date()
    });

    // Clockcmp 컴포넌트가 불러올때마다 1초씩 this.Change()를 부른다
    this.timeID = setInterval(() => this.onChangeTime(), 1000);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.mainTopics.forEach((topic, index) => {
      if (index == 0) {
        this.state.isTopicClicked.push(true);
      } else {
        this.state.isTopicClicked.push(false);
      }
    });
  }
  componentWillUnmount() {
    //종료되면 반복하는것도 클리어시키기
    clearInterval(this.timeID);

    //회의록 기록 종료
    if (isRecognizing) {
      recognition.stop();
      return;
    }
  }
  onChangeTime = () => {
    this.setState({
      d: new Date()
    });
  };

  componentWillReceiveProps = () => {
    //FIXME:소영
    //props를 전달받으면 현재 선택된 토픽을 초기화한다.
    console.log("현재 토픽:", this.props.mainTopics[0]);

    const initTopicClicked = [];
    this.state.isTopicClicked.forEach(index => {
      initTopicClicked.push(false);
    });
    initTopicClicked[0] = true;

    this.setState({ isTopicClicked: initTopicClicked });
  };
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "http://cdn.socket.io/socket.io-1.4.0.js";

    socket = io.connect(serverURL);

    socket.on("connection", function(data) {
      if (data.type === "connected") {
        color = data.color;

        // console.log('here is my color! => '+color);

        socket.emit("connection", {
          type: "join",
          name: name,
          room: room
        });
      }
    });

    socket.on("system", function(data) {
      writeMessage(color, "system", data.message);
    });

    socket.on("message", function(data) {
      writeMessage(data.color, data.name, data.message);
    });

    /*******************************/
    /** STT 시작하는 함수 */
    /*******************************/
    if (isRecognizing) {
      alert("이미 참여 중입니다.");
      return;
    }

    recognition.lang = language;
    recognition.start();
    ignoreEndProcess = false;

    finalTranscript = "";
    /*******************************/
  }
  onTopicChange = e => {
    console.log("토픽이름:", e.target.innerHTML);

    //여기서부터는 토픽 선택 시, 해당 토픽 선택에 대한 스타일링을 입힌 부분.(소여이는 이 아래는 신경쓰지 않아도 됨.)
    const newIsTopicClicked = [];
    this.state.isTopicClicked.forEach(index => {
      newIsTopicClicked.push(false);
    });
    newIsTopicClicked[e.target.id] = true;

    this.setState({ isTopicClicked: newIsTopicClicked });
  };
  render() {
    var currentDate =
      this.state.d.getFullYear() +
      "." +
      this.state.d.getMonth() +
      "." +
      this.state.d.getDate() +
      "." +
      this.state.d.getHours() +
      ":" +
      this.state.d.getMinutes() +
      ":" +
      this.state.d.getSeconds();

    const { startTime, mainTopics } = this.props;
    return (
      <DrawerContainer>
        <DrawerTitleContainer>
          실시간 회의록
          <RecordTime>{currentDate}</RecordTime>
        </DrawerTitleContainer>
        <TopicContainer>
          {/* Topic GET API 받아와서 map으로 for문 돌릴 부분 */}
          {Object.keys(mainTopics).map(topicId => {
            const topic = mainTopics[topicId];
            return (
              <TopicItem
                onClick={this.onTopicChange}
                id={topicId}
                style={{
                  color: this.state.isTopicClicked[topicId]
                    ? "var(--greenish-teal)"
                    : "white"
                }}
              >
                {topic}
              </TopicItem>
            );
          })}
        </TopicContainer>

        <DarkDivideLine />
        {/* RecordBox: 정적이 길게 흐르기 전까지를 기준으로 기록을 보여주는 RecordBox,즉 소영이 너가 쌓아내려갈 DIV */}
        {Object.keys(boxes).map(id => {
          const box = boxes[id];
          // console.log(box.name + "*******");
          return (
            <RecordBorder>
              <TimeStamp>
                {this.state.d.getHours()}:{this.state.d.getMinutes()}
              </TimeStamp>
              <RecordItem>
                <RecordItemColor
                  style={{
                    color: box.color
                  }}
                >
                  {box.name}:
                </RecordItemColor>
                {box.message}
              </RecordItem>
            </RecordBorder>
          );
        })}

        <section className="center"></section>
      </DrawerContainer>
    );
  }
}

export default TopicDrawerBar;
