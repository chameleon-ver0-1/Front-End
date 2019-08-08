/**
 * 담당자:조윤영 Edit By.한예지
 * [OUTLINE]
 * VideoItem파일은 화상회의 비디오를 표시하는 비디오 컴포넌트이다.
 * <p>
 * [METHOD]
 * rgetScreenId(error, sourceId, screen_constraints): 화면 공유 함수
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
import { VideoFrame, EmotionStatus, VideosContainer } from "./webrtc.style";

var connection = new window.RTCMultiConnection();

connection.autoCloseEntireSession = true;
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

export class VideoItem extends Component {
  //FIXME:state값 추가함
  state = { roomToken: "", dummy: [] };

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

    script.src = "https://cdn.WebRTC-Experiment.com/getScreenId.js";
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";

    /*screen sharing을 위한 script */
    script.src = "https://cdn.WebRTC-Experiment.com/getScreenId.js";
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";
    script.src = "https://www.webrtc-experiment.com/common.js";

    script.async = true;

    document.body.appendChild(script);
  }
  componentDidMount() {}

  state = { roomKey: "undefined" };

  render() {
    //FIXME:
    var RMCMediaTrack = {
      cameraStream: null,
      cameraTrack: null,
      screen: null
    };

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

    // connection.socketMessageEvent = "video-conference-demo";
    //FIXME:
    connection.socketMessageEvent = "video-screen-demo";

    connection.session = {
      audio: true,
      video: true
    };

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };

    //FIXME:
    connection.iceServers = [
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun.l.google.com:19302?transport=udp"
        ]
      }
    ];

    connection.onstream = function(event) {
      //connection1
      console.log("onstream 정상 작동 중");

      connection.videosContainer = document.getElementById("videos-container"); //1개 이상의 비디오들을 담을 div공간을 id값으로 가져온다.
      var video = document.createElement("video"); //비디오 컴포넌트를 생성한다.
      video.id = event.streamid;
      video.style.border = "solid 1px var(--greenish-teal)";
      // video.style.marginLeft = "16px"; //각 비디오의 왼쪽 마진을 설정한다.

      event.mediaElement.removeAttribute("src");
      event.mediaElement.removeAttribute("srcObject");
      event.mediaElement.muted = true;
      event.mediaElement.volume = 0;

      //FIXME:
      var existing = document.getElementById(event.streamid);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }

      if (event.type === "local" && event.stream.isVideo) {
        RMCMediaTrack.cameraStream = event.stream;
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then(
            stream =>
              (RMCMediaTrack.cameraTrack = stream.getTracks(
                event.stream,
                "video"
              )[0])
          );
      }
      //

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

      var width = parseInt(connection.videosContainer.clientWidth / 3);

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

    /*상황에 맞춰 버튼들을 비활성화하는 함수*/
    const disableInputButtons = () => {
      // document.getElementsByClassName("open-or-join-room").disabled = true;
      document.getElementsByClassName("open-room").disabled = true;
      document.getElementsByClassName("join-room").disabled = true;
      document.getElementsByClassName("room-id").disabled = true;
    };

    /*신규 화상회의 방 개설하는 함수 */
    const openRoom = () => {
      disableInputButtons();
      var roomid = document.getElementById("room-id").value;
      connection.open(roomid, function(isRoomOpened, roomid, error) {
        if (isRoomOpened === true) {
          showRoomURL(connection.sessionid);
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
      // join callback
      afterOpenOrJoin();
    };

    /*기존 개설된 화상회의 방을 들어가는 함수 */
    const joinRoom = () => {
      disableInputButtons();
      var roomid = document.getElementById("room-id").value;
      connection.join(roomid, function(isJoinedRoom, roomid, error) {
        if (error) {
          disableInputButtons(true);
          if (error === "Room not available") {
            alert("현재 이 방은 존재하지 않는 방입니다.");
            return;
          }
          alert(error);
        }
      });
      afterOpenOrJoin();
    };

    function afterOpenOrJoin() {
      connection.socket.on(connection.socketCustomEvent, function(
        message,
        error
      ) {
        if (message.userid === connection.userid) return; // ignore self messages
        if (message.justSharedMyScreen === true) {
          var video = document.getElementById(message.userid);
          if (video) {
            video.querySelector("video").srcObject = null;
          }
        }
        if (message.justStoppedMyScreen === true) {
          var video = document.getElementById(message.userid);
          if (video) {
            video.querySelector("video").srcObject = null;
          }
        }
      });
    }

    /*신규 화상회의방을 개설하고 들어가는 함수 */
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

    var btnShareScreen = document.getElementById("share-screen");
    // connection.onUserStatusChanged = function() {
    //   btnShareScreen.disabled = connection.getAllParticipants().length <= 0;
    // };
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
    };

    const shareVideo = () => {
      this.disabled = true;

      getScreenStream(function(screen) {
        var isLiveSession = connection.getAllParticipants().length > 0;
        if (isLiveSession) {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then(stream => stream.replaceTrack(RMCMediaTrack.screen));
        }
        // now remove old video track from "attachStreams" array
        // so that newcomers can see screen as well
        connection.attachStreams.forEach(function(stream) {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then(stream =>
              stream.getTracks(stream, "video").forEach(function(track) {
                stream.removeTrack(track);
              })
            );

          // now add screen track into that stream object
          stream.addTrack(RMCMediaTrack.screen);
        });
      });
    };
    function screenHelper(callback, screen_constraints) {
      if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia(screen_constraints).then(
          stream => {
            callback(stream);
          },
          error => {
            alert("Please make sure to use Edge 17 or higher.");
          }
        );
      } else if (navigator.getDisplayMedia) {
        navigator.getDisplayMedia(screen_constraints).then(
          stream => {
            callback(stream);
          },
          error => {
            alert("Please make sure to use Edge 17 or higher.");
          }
        );
      } else {
        alert("getDisplayMedia API is not available in this browser.");
      }
    }
    function getScreenStream(callback) {
      screenHelper(function(screen) {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then(
            stream =>
              (RMCMediaTrack.screen = stream.getTracks(screen, "video")[0])
          );

        //FIXME:오류나는 부분
        RMCMediaTrack.selfVideo.srcObject = screen;
        // in case if onedned event does not fire
        (function looper() {
          // readyState can be "live" or "ended"
          if (RMCMediaTrack.screen.readyState === "ended") {
            RMCMediaTrack.screen.onended();
            return;
          }
          setTimeout(looper, 1000);
        })();
        var firedOnce = false;
        // RMCMediaTrack.screen.onended = RMCMediaTrack.screen.onmute = RMCMediaTrack.screen.oninactive = function() {
        //   if (firedOnce) return;
        //   firedOnce = true;
        //   if (
        //     navigator.mediaDevices
        //       .getUserMedia({ video: true, audio: true })
        //       .then(
        //         stream =>
        //           stream.getTracks(RMCMediaTrack.cameraStream, "video")[0]
        //             .readyState
        //       )
        //   ) {
        //     navigator.mediaDevices
        //       .getUserMedia({ video: true, audio: true })
        //       .then(stream =>
        //         stream
        //           .getTracks(RMCMediaTrack.cameraStream, "video")
        //           .forEach(function(track) {
        //             RMCMediaTrack.cameraStream.removeTrack(track);
        //           })
        //       );

        //     RMCMediaTrack.cameraStream.addTrack(RMCMediaTrack.cameraTrack);
        //   }
        //   RMCMediaTrack.selfVideo.srcObject = RMCMediaTrack.cameraStream;
        //   connection.socket &&
        //     connection.socket.emit(connection.socketCustomEvent, {
        //       justStoppedMyScreen: true,
        //       userid: connection.userid
        //     });
        //   // share camera again
        //   replaceTrack(RMCMediaTrack.cameraTrack);
        //   // now remove old screen from "attachStreams" array
        //   connection.attachStreams = [RMCMediaTrack.cameraStream];
        //   // so that user can share again
        //   btnShareScreen.disabled = false;
        // };
        connection.socket &&
          connection.socket.emit(connection.socketCustomEvent, {
            justSharedMyScreen: true,
            userid: connection.userid
          });
        callback(screen);
      });
    }

    function replaceTrack(videoTrack) {
      if (!videoTrack) return;
      if (videoTrack.readyState === "ended") {
        alert(
          'Can not replace an "ended" track. track.readyState: ' +
            videoTrack.readyState
        );
        return;
      }
      connection.getAllParticipants().forEach(function(pid) {
        var peer = connection.peers[pid].peer;
        if (!peer.getSenders) return;
        var trackToReplace = videoTrack;
        peer.getSenders().forEach(function(sender) {
          if (!sender || !sender.track) return;
          if (sender.track.kind === "video" && trackToReplace) {
            sender.replaceTrack(trackToReplace);
            trackToReplace = null;
          }
        });
      });
    }

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
            if (response.data == "무반응") {
              document.getElementById("showEmotion").style.visibility =
                "hidden";
            } else {
              document.getElementById("showEmotion").style.visibility =
                "visible";
            }
            document.getElementById("showEmotion").innerHTML = response.data;
            console.log(response.data);
          })
          .catch(response => {
            console.log(response);
          });
      });
    };

    const onRekog = () => {
      /*5초마다 capture() 호출*/
      //capture();
      playTran = setInterval(function() {
        capture();
      }, 6000);

      // axios.get('/happy')
      //   .then( response => { console.log(response.data); } ) // SUCCESS
      //   .catch( response => { console.log(response); } ); // ERROR
    };

    const onStop = () => {
      //clearInterval(playTran);
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
      console.log(roomQueryStringURL);
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
    var roomid = window.params.roomid;
    // var roomid = txtRoomId;

    if (!roomid && hashString.length) {
      roomid = hashString;
    }
    if (roomid && roomid.length) {
      document.getElementsByClassName("room-id").value = roomid;
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
      disableInputButtons();
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
        <input
          type="text"
          id="room-id"
          className="room-id"
          autoCorrect="off"
          autoCapitalize="off"
          size="20"
        />
        {/* <button
          className="open-room"
          onClick={openRoom}
          // isRoomAppear={this.state.isRoomAppear}
          // roomToken={this.state.roomToken}
        >
          회의실 개설하기
        </button> */}
        {/* <button className="join-room" onClick={joinRoom}>
          회의실 참여하기
        </button> */}
        <button className="open-or-join-room" onClick={openOrJoinRoom}>
          회의실 개설/참여하기
        </button>
        <button id="share-screen" onClick={shareVideo}>
          화면 공유
        </button>
        <button type="button" onClick={onRekog}>
          지금부터 감정인식 시작
        </button>
        <button type="button" onClick={onStop}>
          회의 종료
        </button>

        <VideosContainer id="videos-container" />
        <div id="room-urls" style={{ width: "100%" }} />

        <EmotionStatus id="showEmotion" />
      </VideoFrame>
    );
  }
}

export default VideoItem;
