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

import { VideoFrame, EmotionStatus, VideosContainer } from "./webrtc.style";

//FIXME:
// connection.iceServers = [
//   {
//     urls: [
//       "stun:stun.l.google.com:19302",
//       "stun:stun1.l.google.com:19302",
//       "stun:stun2.l.google.com:19302",
//       "stun:stun.l.google.com:19302?transport=udp"
//     ]
//   }
// ];
var connection = new window.RTCMultiConnection();
connection.autoCloseEntireSession = true; //개설자가 방을 나가면 방을 닫는 설정
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/"; //socket.io 신호 서버 URL을 설정

export class VideoItem extends Component {
  //FIXME:state값 추가함
  state = { roomToken: "", dummy: [] };

  componentWillMount() {
    /***********************************/
    /*script가져오는 함수 */
    /***********************************/
    const script = document.createElement("script");

    script.src = "https://cdn.webrtc-experiment.com/RTCMultiConnection.js";
    script.src = "https://cdn.webrtc-experiment.com/conversation.js";

    script.src =
      "https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/node_modules/webrtc-adapter/out/adapter.js";

    /*screen sharing을 위한 script */
    script.src = "https://cdn.WebRTC-Experiment.com/getScreenId.js";
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";
    script.src = "https://www.webrtc-experiment.com/common.js";

    /*말하는 순간을 잡기 위한 script */
    script.src = "https://cdn.webrtc-experiment.com/hark.js";
    script.async = true;

    document.body.appendChild(script);

    /***********************************/
    /*스트리밍 연결*/
    /***********************************/

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

    //비디오와 오디오를 통한 회의를 하고자할 경우,
    connection.session = {
      audio: true,
      video: true
    };

    //createOffer이나 createAnswer API가 호출될 때마다 사용해야하는 제한 조건을 강제 실행할 수 있다.
    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };

    var videoCpy;
    //모든 로컬 및 원격 미디어 스트림을 수신하기 위한 함수
    connection.onstream = function(event) {
      //onspeaking에서 사용할 부분을 초기화
      initHark({
        stream: event.stream,
        streamedObject: event,
        connection: connection
      });
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

      //로컬이고 Video stream일 경우,
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
    /*****************************/
    /*음성에 따른 액션*/
    /*****************************/
    //connection-ing
    connection.onspeaking = function(e) {
      //사용자가 말하는 순간 동안 실행되는 함수
      console.log("onspeaking 작동 중");
      videoCpy.style.border = "5px solid var(--greenish-teal)";
    };
    connection.onsilence = function(e) {
      //사용자가 말을 하지 않는 동안 실행되는 함수
      videoCpy.style.border = "none";
    };
    connection.onvolumechange = function(event) {
      //볼륨의 높낮이가 달라질 때 실행되는 함수
      event.mediaElement.style.borderWidth = event.volume;
    };

    function initHark(args) {
      if (!window.hark) {
        throw "Please link hark.js";
        return;
      }

      var connection = args.connection;
      var streamedObject = args.streamedObject;
      var stream = args.stream;

      var options = {};
      var speechEvents = window.hark(stream, options);

      speechEvents.on("speaking", function() {
        connection.onspeaking(streamedObject);
      });

      speechEvents.on("stopped_speaking", function() {
        connection.onsilence(streamedObject);
      });

      speechEvents.on("volume_change", function(volume, threshold) {
        streamedObject.volume = volume;
        streamedObject.threshold = threshold;
        connection.onvolumechange(streamedObject);
      });
    }

    //connection2
    //비활성화된(중지된) 비디오를 제거
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
    /*******************************************/
    /*신규 화상회의방을 개설하고 들어가는 함수 */
    /*******************************************/
    connection.openOrJoin(
      document.getElementById("room-id".value, function(
        isRoomExist,
        roomid,
        error
      ) {
        if (error) {
          alert(error);
        } else if (connection.isInitiator === true) {
        }
      })
    );

    /***********************************/
    //감정인식 부분
    /***********************************/

    let playTran; //실시간 전송하기 위한 변수

    /* 비디오 캡처하는 함수*/
    const capture = () => {
      console.log("captrue 작동 중");
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
        console.log("캡처 완료했습니다");
        axios
          .post("/emotion", {
            img: canvas.toDataURL("image/png")
          })
          .then(res => {
            console.log(res.data);
            console.log("데이터를 받았습니다.");
            //   if (response.data == "무반응") {
            //     document.getElementById("showEmotion").style.visibility =
            //       "hidden";
            //   } else {
            //   document.getElementById("showEmotion").style.visibility =
            //     "visible";
            // }
            document.getElementById("showEmotion").style.visibility = "visible";
            document.getElementById("showEmotion").innerHTML = res.data.message;
            console.log(res.data);
          })
          .catch(response => {
            console.log(response);
          });
      });
    };

    /*5초마다 capture() 호출*/
    //capture();
    playTran = setInterval(function() {
      capture();
      console.log("감정인식 중입니다....");
    }, 5000);

    // axios.get('/happy')
    //   .then( response => { console.log(response.data); } ) // SUCCESS
    //   .catch( response => { console.log(response); } ); // ERROR
  }

  state = { roomKey: "undefined" };

  render() {
    /*신규 화상회의 방 개설하는 함수 */

    // function afterOpenOrJoin() {
    //   connection.socket.on(connection.socketCustomEvent, function(
    //     message,
    //     error
    //   ) {
    //     if (message.userid === connection.userid) return; // ignore self messages
    //     if (message.justSharedMyScreen === true) {
    //       var video = document.getElementById(message.userid);
    //       if (video) {
    //         video.querySelector("video").srcObject = null;
    //       }
    //     }
    //     if (message.justStoppedMyScreen === true) {
    //       var video = document.getElementById(message.userid);
    //       if (video) {
    //         video.querySelector("video").srcObject = null;
    //       }
    //     }
    //   });
    // }

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

      this.state.roomToken = roomQueryStringURL;
      console.log("roomURL" + roomQueryStringURL);
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
        <VideosContainer id="videos-container" />
        <div id="room-urls" style={{ width: "100%" }} />
        <EmotionStatus id="showEmotion" />
      </VideoFrame>
    );
  }
}

export default VideoItem;
