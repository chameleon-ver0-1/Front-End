import React, { Component } from "react";
import styled from "styled-components";
import topicCheckOff from "../../../assets/conferenceRoom/videohome_check_off.png";
// import webkitSpeechRecognition from "react-speech-recognition";

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
const Result = styled.div`
  padding: 10px 20px;
  height: 150px;
  border: solid 1px #000;
  border-radius: 6px;
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
/*음성인식 관련 선언부*/
var isRecognizing = false; // 현재 녹음 중인지
var ignoreEndProcess = false;
var finalTranscript = ""; // 누적된 인식 결과

window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
// var recognition = new webkitSpeechRecognition();
var recognition = new window.webkitSpeechRecognition();
const language = "ko-KR";
recognition.continuous = true; // 음성이 인식될 때마다 결과값 반환
recognition.interimResults = true; // 끝나지 않은 상태의 음성 반환 설정

//--------------------------------------------------------
//-----------------Speech Recognition Code----------------
//--------------------------------------------------------

/* 음성 인식 시작 처리*/

recognition.onstart = function() {
  console.log("onstart", arguments);
  isRecognizing = true;
  // document.getElementById("btnJoin").attr("class", "on");
};
/*음성 인식 종료 처리*/
recognition.onend = function() {
  console.log("onend", arguments);
  isRecognizing = false;

  // 에러 처리
  if (ignoreEndProcess) {
    return false;
  }

  // DO end process
  // document.getElementById("btnJoin").attr("class", "off");
  if (!finalTranscript) {
    // 인식된 결과가 없을 경우
    console.log("empty finalTranscript");
    return false;
  }
};
/*음성 인식 결과 처리
    @param event*/
recognition.onresult = function(event) {
  console.log("onresult", event);

  let interimTranscript = "";
  if (typeof event.results === "undefined") {
    // 에러 처리
    recognition.onend = null;
    recognition.stop();
    return;
  }

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    // 음성인식 이벤트 결과(string)
    if (event.results[i].isFinal) {
      // 음성인식 종료된 최종 결과일 경우
      finalTranscript += event.results[i][0].transcript;
    } else {
      // 중간 결과일 경우
      interimTranscript += event.results[i][0].transcript;
    }
  }

  /*Front 화면에 글자 표시*/
  //finalTranscript = capitalize(finalTranscript); // 최종본 첫 글자 대문자화(EN)
  document.getElementById("final_span").innerHTML = finalTranscript; // 최종본 개행 처리 linebreak(finalTranscript)
  document.getElementById("interim_span").innerHTML = interimTranscript; // 중간값 개행 처리 linebreak(interimTranscript)

  console.log("finalTranscript", finalTranscript);
  console.log("interimTranscript", interimTranscript);
  // fireCommand(interimTranscript); // undefined Funcion
};

/* 음성 인식 에러 처리
    @param event */
recognition.onerror = function(event) {
  console.log("onerror", event);

  if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
    ignoreEndProcess = true; // 에러의 경우 END Process 건너뛰기
  }

  document.getElementById("btnJoin").attr("class", "off");
};
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
const onExit = () => {
  if (isRecognizing) {
    recognition.stop();
    return;
  }
};

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
        {/* 여기서부터 STT코드 */}
        <section class="center">
          <div class="button-panel">
            <button id="btnJoin" onClick={onJoin} className="off">
              Join
            </button>
            <button id="btnExit" onClick={onExit}>
              Exit
            </button>
          </div>
        </section>

        <Result id="result">
          {/* 최종 음성인식 결과  */}
          <section class="center">
            <span class="final" id="final_span" />
          </section>

          {/* 음성인식 중 반환값 */}
          <section className="center">
            <span className="interim" id="interim_span" />
          </section>
        </Result>
      </div>
    );
  }
}

export default STTTest;
