import React, { Component } from "react";

import styled from "styled-components";
import "./webrtc.style.css";
import { getHTMLMediaElement } from "./getHTMLMediaElement";
import html2canvas from "html2canvas";
import axios from "axios";
var connection = new window.RTCMultiConnection();

connection.autoCloseEntireSession = true;
// connection.publicRoomIdentifier = window.params.publicRoomIdentifier;

// FIXME: 우리 소켓링크로 연결 변경
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

const VideoFrame = styled.div`
  padding-left: 50px;
  padding-top: 19px;
  padding-right: 50px;
  width: 100%;
`;
const EmotionStatus = styled.div`
  position: fixed;
  top: 80%;
  width: 50%;
  text-align: center;
  display: inline-block;
  background: black;
  color: white;
  font-size: 15px;
  opacity: 0.4;
  border-radius: 45px;
`;

export class VideoItem extends Component {
  //FIXME:state값 추가함
  state = { roomToken: "", dummy: [] };

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
  componentDidMount() {}

  state = { roomKey: "undefined" };
  render() {
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

    // if you want audio+video conferencing
    connection.socketMessageEvent = "video-conference-demo";

    connection.session = {
      audio: true,
      video: true
    };
    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };

    connection.onstream = function(event) {
      //connection1
      connection.videosContainer = document.getElementById("videos-container");
      var video = document.createElement("video");
      // var video = event.mediaElement;
      video.id = event.streamid;

      console.log("onstream 정상 작동 중");

      var existing = document.getElementById(event.streamid);
      // if (existing && existing.parentNode) {
      //   existing.parentNode.removeChild(existing);
      // }
      event.mediaElement.removeAttribute("src");
      event.mediaElement.removeAttribute("srcObject");
      event.mediaElement.muted = true;
      event.mediaElement.volume = 0;

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

      video.srcObject = event.stream;

      var width = 400;
      var height = 1000;
      video.width = width;

      video.buttons = "full-screen";
      video.style.marginLeft = "16px";

      connection.videosContainer.appendChild(video);

      //FIXME: 이 부분 제거해야함.
      // var mediaElement = getHTMLMediaElement(video, {
      //   title: event.userid,
      //   buttons: ["full-screen"],
      //   width: width,
      //   height: height,
      //   showOnMouseEnter: false
      // });

      // setTimeout(function() {
      //   mediaElement.media.play();
      // }, 5000);

      // mediaElement.id = event.streamid;
      // to keep room-id in cache
      localStorage.setItem(connection.socketMessageEvent, connection.sessionid);
      if (event.type === "local") {
        connection.socket.on("disconnect", function() {
          if (!connection.getAllParticipants().length) {
            window.location.reload();
          }
        });
      }
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

    const disableInputButtons = enable => {
      // document.getElementById("room-id").onkeyup();

      document.getElementsByClassName("open-or-join-room").disabled = !enable;
      document.getElementsByClassName("open-room").disabled = !enable;
      document.getElementsByClassName("join-room").disabled = !enable;
      document.getElementsByClassName("room-id").disabled = !enable;
    };

    //TODO: 화면 공유 버튼 on/off state에 따라서 함수 실행시키기
    //화면  공유 기능
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

    /*신규 화상회의 방 개설하기 */
    const openRoom = () => {
      disableInputButtons();
      connection.open(document.getElementById("room-id").value, function(
        isRoomOpened,
        roomid,
        error
      ) {
        if (isRoomOpened === true) {
          showRoomURL(connection.sessionid);
          //FIXME:state값 추가함
          // this.state.isRoomAppear = true;
        } else {
          disableInputButtons(true);
          if (error === "Room not available") {
            alert(
              "이미 개설된 방입니다. 참여하기 버튼을 누르거나 새로운 방을 개설해주세요."
            );
            return;
          }
          alert(error);
        }
      });
    };

    /*기존 개설된 화상회의 방 들어가기 */
    const joinRoom = () => {
      disableInputButtons();
      connection.join(document.getElementById("room-id").value, function(
        isJoinedRoom,
        roomid,
        error
      ) {
        if (error) {
          disableInputButtons(true);
          if (error === "Room not available") {
            alert("현재 이 방은 존재하지 않는 방입니다.");
            return;
          }
          alert(error);
        }
      });
    };

    /*신규 화상회의방 개설하고 들어가기 */
    const openOrJoinRoom = () => {
      disableInputButtons();
      connection.openOrJoin(
        document.getElementById("room-id".value, function(
          isRoomExist,
          roomid,
          error
        ) {
          if (error) {
            disableInputButtons(true);
            alert(error);
          } else if (connection.isInitiator === true) {
            showRoomURL(roomid);
          }
        })
      );
    };
    //TODO: 예지 - 실시간 전송하기 위한 변수
    var playTran;

    //TODO: 예지 - 비디오 캡처하는 함수
    const capture = () => {
      //TODO: 예지 - videos-container 캡쳐하기 전 비디오 위에 비디오 캡쳐 이미지 놓기
      connection.showImage = document.getElementById("show-image");
      var transImg = document.getElementById("transImg");
      var canvas = document.createElement("canvas");
      var videos = document.querySelectorAll("video");

      var context = canvas.getContext("2d");

      //TODO: 예지 - 비디오 각각을 반복문을 통해 별도로 캡쳐
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
          //context.clearRect(0, 0, w, h);
        } catch (e) {
          continue;
        }
      }

      //TODO: 예지 -  videos-container 캡쳐
      html2canvas(document.getElementById("videos-container")).then(function(
        canvas
      ) {
        //document.body.appendChild(canvas);
        transImg.value = canvas.toDataURL("image/png");

        // fetch('http://localhost:5000/trans_data', {
        //   method: 'post',
        //   body: JSON.stringify({transImg : canvas.toDataURL("image/png")})
        // }).then(function(response) {
        //   //return response.text();
        //   console.log(response.text());

        // }).then(function(data) {
        //   console.log(data);
        // }) .catch(function (error) {
        //   console.log('Request failed', error);
        // });

        document.getElementById("form").submit();
      });
    };

    const onRekog = () => {
      //TODO: 5초마다 capture() 호출
      //capture();
      playTran = setInterval(function() {
        capture();
      }, 5000);

      fetch("/happy")
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.log(err));

      fetch("/default")
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.log(err));

      console.log("윤영만세");
    };

    const onStop = () => {
      clearInterval(playTran);
      console.log("종료");
    };

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

    //roomid setting 부분
    var roomid = "";
    if (localStorage.getItem(connection.socketMessageEvent)) {
      roomid = localStorage.getItem(connection.socketMessageEvent);
    } else {
      roomid = connection.token();
    }
    var txtRoomId = document.getElementsByClassName("room-id"); //FIXME:className으로 해야 작동이 되나 원래는 id로 해야함. 둘의 차이를 잘 모르겠음.

    txtRoomId.value = roomid; //FIXME:
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
    var roomid = window.params.roomid;

    // var roomid = params.roomid; //FIXME:
    if (!roomid && hashString.length) {
      roomid = hashString;
    }
    if (roomid && roomid.length) {
      document.getElementsByClassName("room-id").value = roomid;
      localStorage.setItem(connection.socketMessageEvent, roomid);

      // auto-join-room
      (function reCheckRoomPresence() {
        connection.checkPresence(roomid, function(isRoomExist) {
          if (isRoomExist) {
            connection.join(roomid);
            return;
          }
          setTimeout(reCheckRoomPresence, 5000);
        });
      })();
      disableInputButtons();
    }

    // detect 2G
    if (
      navigator.connection &&
      navigator.connection.type === "cellular" &&
      navigator.connection.downlinkMax <= 0.115
    ) {
      alert("2G is not supported. Please use a better internet service.");
    }

    return (
      <VideoFrame id="video-home-container">
        <div style={{ width: "100%" }}>
          <div id="videos-container" />
          <input
            type="text"
            id="room-id"
            className="room-id"
            autoCorrect="off"
            autoCapitalize="off"
            size="20"
            defaultValue="abcded"
          />
          <button
            className="open-room"
            onClick={openRoom}
            // isRoomAppear={this.state.isRoomAppear}
            // roomToken={this.state.roomToken}
          >
            회의실 개설하기
          </button>
          {/* <button className="join-room" onClick={joinRoom}>
            회의실 참여하기
          </button>
          <button className="open-or-join-room" onClick={openOrJoinRoom}>
            회의실 개설/참여하기
          </button> */}
        </div>

        <div id="room-urls" style={{ width: "100%" }} />
        <div id="image-container" style={{ background: "pink" }}>
          <button type="button" onClick={onRekog}>
            지금부터 감정인식 시작
          </button>
          <button type="button" onClick={onStop}>
            회의 종료
          </button>
        </div>
        <EmotionStatus>안녕</EmotionStatus>
      </VideoFrame>
    );
  }
}

export default VideoItem;
