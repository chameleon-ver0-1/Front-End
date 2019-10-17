/**
 * 담당자:조윤영 Edit By.한예지
 * [OUTLINE]
 * VideoItem파일은 화상회의 비디오를 표시하는 비디오 컴포넌트이다.
 * <p>
 * [METHOD]
 * getScreenId(error, sourceId, screen_constraints): 화면 공유 함수
 * disableInputButtons(): 상황에 맞춰 버튼들을 비활성화하는 함수
 * openRoom(): 신규 화상회의 방 개설하는 함수
 * joinRoom(): 기존 개설된 화상회의 방을 들어가는 함수
 * openOrJoinRoom(): 신규 화상회의방을 개설하고 들어가는 함수
 *
 * <p>
 * [LIBRARY]
 * 1. io: socket에 연결하기 위한 라이브러리
 */
import React, { Component } from "react";
import html2canvas from "html2canvas";
import axios from "axios";
import * as service from "./getHTMLMediaElement";

import {
  VideoFrame,
  EmotionStatus,
  VideosContainer,
  EmotionCircle,
  EmotionButton,
  EmotionSwitch,
  ConnectLine
} from "./webrtc.style";

var connection = new window.RTCMultiConnection();
connection.autoCloseEntireSession = true; //개설자가 방을 나가면 방을 닫는 설정
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/"; //socket.io 신호 서버 URL을 설정

export class VideoItem extends Component {
  //FIXME:state값 추가함
  state = {
    roomToken: "",
    dummy: [],
    isShowEmotionStart: false,
    isEmotionHearing: false
  };

  /*script가져오는 함수 */
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.webrtc-experiment.com/RTCMultiConnection.js";
    script.src = "https://cdn.webrtc-experiment.com/conversation.js";

    script.src =
      "https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/node_modules/webrtc-adapter/out/adapter.js";
    script.src = "./getHTMLMediaElement.jsx";

    script.src = "https://cdn.WebRTC-Experiment.com/getScreenId.js";
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";

    script.async = true;

    document.body.appendChild(script);
  }
  componentDidMount() {
    /*신규 화상회의방을 개설하고 들어가는 함수 */
    connection.openOrJoin(
      document.getElementById("testRoomId", function(
        isRoomExist,
        roomid,
        error
      ) {
        if (error) {
          // disableInputButtons(true);
          alert(error);
        } else if (connection.isInitiator === true) {
          // showRoomURL(roomid);
        }
      })
    );
    // this.props 는 아직 바뀌지 않은 상태
    /*******************************************/
    //감정인식 로직: 화면의 비율 가로길이 기준으로 2/3이상은 펼쳐져 있어야 정상 작동하는 모습 볼 수 있음..
    /*******************************************/
    let playTran; //실시간 전송하기 위한 변수

    /* 비디오 캡처하는 함수*/
    const capture = () => {
      /*videos-container 캡쳐하기 전 비디오 위에 비디오 캡쳐 이미지 놓기*/
      connection.showImage = document.getElementById("show-image");
      var canvas = document.createElement("canvas");
      var videos = document.querySelectorAll("video");

      var context = canvas.getContext("2d");

      /*비디오 각각을 반복문을 통해 별도로 캡쳐*/
      for (var i = 0, len = videos.length; i < len; i++) {
        var v = videos[i];
        if (!v.id) continue;
        try {
          var ratio = v.videoWidth / v.videoHeight;
          var w = v.videoWidth - 100;
          var h = parseInt(w / ratio, 10);
          canvas.setAttribute("width", w);
          canvas.setAttribute("height", h);
          context.fillRect(0, 0, w, h);
          context.drawImage(v, 0, 0, w, h);
          v.style.width = "400px";
          v.style.height = "300px"; //-->이걸로 해결
          v.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;
          v.style.backgroundSize = "cover";
        } catch (e) {
          continue;
        }
      }
      /*videos-container 캡쳐*/
      html2canvas(document.getElementById("videos-container")).then(function(
        canvas
      ) {
        axios
          .post("/emotion", {
            img: canvas.toDataURL("image/png")
          })
          .then(response => {
            console.log(response.data);
            if (response.data.data === false) {
              document.getElementById("showEmotion").style.visibility =
                "hidden";
            } else {
              document.getElementById("showEmotion").style.visibility =
                "visible";
            }
            document.getElementById("showEmotion").innerHTML =
              response.data.message;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      });
    };

    this.state = { roomKey: "undefined" };

    const EmotionStart = () => {
      /*5초마다 capture() 호출*/
      //capture();
      this.setState({
        isShowEmotionStart: true,
        isEmotionHearing: true
      });

      setTimeout(() => {
        this.setState({
          isShowEmotionStart: false
        });
      }, 2000); // 시간. 2초 후 실행

      playTran = setInterval(function() {
        console.log("감정인식 중입니다.");
        capture();
      }, 6000);
    };
  }

  render() {
    const { emotionStatus } = this.props;
    (function() {
      var params = {},
        r = /([^&=]+)=?([^&]*)/g;
      function d(s) {
        return decodeURIComponent(s.replace(/\+/g, " "));
      }
      var match,
        search = window.location.search;
      while ((match = r.exec(search.substring(1))))
        params[d(match[1])] = d(match[2]);
      window.params = params;
    })();

    connection.socketMessageEvent = "video-conference-demo";

    connection.session = {
      audio: true,
      video: true
    };

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };

    var videoCpy;

    connection.onstream = function(event) {
      //connection1
      // event.mediaContainer.style.width=""
      connection.videosContainer = document.getElementById("videos-container"); //1개 이상의 비디오들을 담을 div공간을 id값으로 가져온다.
      var video = document.createElement("video"); //비디오 컴포넌트를 생성한다.
      video.id = event.streamid; //각 비디오 화면에 각 스트림의 고유 식별자를 붙인다.
      video.style.width = "100%";
      video.style.height = "100%";

      video.style.border = "solid 1px var(--greenish-teal)";

      event.mediaElement.removeAttribute("src");
      event.mediaElement.removeAttribute("srcObject");
      event.mediaElement.muted = true;
      event.mediaElement.volume = 0;

      //FIXME:
      var existing = document.getElementById(event.streamid);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }

      try {
        video.setAttributeNode(document.createAttribute("autoplay"));
        video.setAttributeNode(document.createAttribute("playsinline"));
      } catch (e) {
        video.setAttribute("autoplay", true);
        video.setAttribute("playsinline", true);
      }

      if (event.type === "local") {
        video.volume = 0;
        try {
          video.setAttributeNode(document.createAttribute("muted"));
        } catch (e) {
          video.setAttribute("muted", true);
        }
      }

      video.srcObject = event.stream; //비디오에 stream을 연결한다.

      connection.videosContainer.style.width = "100%";
      var width = "500px";

      var mediaElement = service.getHTMLMediaElement(video, {
        title: event.userid,
        buttons: ["mute-audio", "mute-video"],
        width: width,
        showOnMouseEnter: false
      });

      connection.videosContainer.appendChild(mediaElement); //비디오를 div공간에 추가한다.

      //TODO: get
      setTimeout(function() {
        mediaElement.media.play();
      }, 5000);
      mediaElement.id = event.streamid;

      if (event.type === "local") {
        connection.socket.on("disconnect", function() {
          if (!connection.getAllParticipants().length) {
            window.location.reload();
          }
        });
      }
      localStorage.setItem(connection.socketMessageEvent, connection.sessionid);
      videoCpy = video;
    };

    //connection2
    connection.onstreamended = function(event) {
      var mediaElement = document.getElementById(event.streamid);
      if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
      }
    };
    connection.onMediaError = function(e) {
      if (e.message === "Concurrent mic process limit.") {
        if (window.DetectRTC.audioInputDevices.length <= 1) {
          alert(
            "Please select external microphone. Check github issue number 483."
          );
          return;
        }
        var secondaryMic = window.DetectRTC.audioInputDevices[1].deviceId;
        connection.mediaConstraints.audio = {
          deviceId: secondaryMic
        };
        connection.join(connection.sessionid);
      }
    };

    //TODO: 화면 공유 버튼 on/off state에 따라서 함수 실행시키기
    /*화면 공유 함수*/
    const getScreenId = (error, sourceId, screen_constraints) => {
      if (
        navigator.userAgent.indexOf("Edge") !== -1 &&
        (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)
      ) {
        navigator.getDisplayMedia(screen_constraints).then(
          stream => {
            document.querySelector("video").srcObject = stream;
          },
          error => {
            alert("Please make sure to use Edge 17 or higher.");
          }
        );
        return;
      }
      //TODO: 화면 공유 버튼 on/off state에 따라서 함수 실행시키기
      //chrome extension 설치 여부 detection
      // const getChromeExtensionStatus = status => {
      //   if (status === "installed-enabled") alert("installed");
      //   if (status === "installed-disabled") alert("installed but disabled");
      //   // etc.
      // };

      navigator.mediaDevices
        .getUserMedia(screen_constraints)
        .then(function(stream) {
          document.querySelector("video").srcObject = stream;

          // share this "MediaStream" object using RTCPeerConnection API
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    // const onStop = () => {
    //   clearInterval(playTran);
    //   console.log("종료");
    // };

    const showRoomURL = roomid => {
      var roomHashURL = "#" + roomid;
      var roomQueryStringURL = "?roomid=" + roomid;
      var html = "<h2>Unique URL for your room:</h2><br>";
      html +=
        'Hash URL: <a href="' +
        roomHashURL +
        '" target="_blank">' +
        roomHashURL +
        "</a>";
      html += "<br>";
      html +=
        'QueryString URL: <a href="' +
        roomQueryStringURL +
        '" target="_blank">' +
        roomQueryStringURL +
        "</a>";
      var roomURLsDiv = document.getElementById("room-urls");
      roomURLsDiv.innerHTML = html;
      roomURLsDiv.style.display = "block";
      //FIXME:state값 추가함
      // this.state.roomToken = roomQueryStringURL;
      // this.state.roomKey = html;
      this.state.roomToken = roomQueryStringURL;
    };

    /*roomid setting*/
    var roomid = "";
    if (localStorage.getItem(connection.socketMessageEvent)) {
      roomid = localStorage.getItem(connection.socketMessageEvent);
    } else {
      roomid = connection.token();
    }
    var txtRoomId = document.getElementsByClassName("room-id");

    txtRoomId.value = roomid;
    txtRoomId.onkeyup = txtRoomId.oninput = txtRoomId.onpaste = function() {
      localStorage.setItem(
        connection.socketMessageEvent,
        document.getElementById("room-id").value
      );
    };
    var hashString = window.location.hash.replace("#", "");
    if (hashString.length && hashString.indexOf("comment-") === 0) {
      hashString = "";
    }

    //TODO: roomid를 직접 받아와야하는 부분
    var roomid = localStorage.getItem("roomId");

    if (!roomid && hashString.length) {
      roomid = hashString;
    }
    if (roomid && roomid.length) {
      localStorage.setItem(connection.socketMessageEvent, roomid);

      /*auto-join-room*/
      (function reCheckRoomPresence() {
        connection.checkPresence(roomid, function(isRoomExist) {
          if (isRoomExist) {
            connection.join(roomid);
            return;
          }
          setTimeout(reCheckRoomPresence, 5000);
        });
      })();
    }

    /*detect 2G*/
    if (
      navigator.connection &&
      navigator.connection.type === "cellular" &&
      navigator.connection.downlinkMax <= 0.115
    ) {
      alert("2G is not supported. Please use a better internet service.");
    }

    return (
      <VideoFrame id="video-home-container">
        {/* <button id="share-screen" onClick={testShare}>
          화면 공유
        </button> */}
        {/* <button type="button" onClick={onStop}>
        감정인식 종료
        </button> */}
        <VideosContainer id="videos-container" />
        <div id="room-urls" style={{ width: "100%" }} />
        <EmotionStatus
          id="showEmotion"
          style={{ display: this.state.isShowEmotionStart ? "inline" : "none" }}
        >
          감정 인식을 시작합니다.
        </EmotionStatus>
        <EmotionSwitch>
          <EmotionCircle />
          <ConnectLine />
          <EmotionButton onClick={this.EmotionStart}>OFF</EmotionButton>
          <ConnectLine />
          <EmotionCircle />
        </EmotionSwitch>
      </VideoFrame>
    );
  }
}

export default VideoItem;
