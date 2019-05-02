import React, { Component } from "react";
import "./webrtc.style.css";

var connection = new window.RTCMultiConnection();

// this line is VERY_important
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

export class WebRTCRoom extends Component {
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
    script.src =
      "https://rtcmulticonnection.herokuapp.com/dev/getHTMLMediaElement.js";

    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    //connection1
    connection.videosContainer = document.getElementById("videos-container");
    connection.onstream = function(event) {
      var existing = document.getElementById(event.streamid);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
      event.mediaElement.removeAttribute("src");
      event.mediaElement.removeAttribute("srcObject");
      event.mediaElement.muted = true;
      event.mediaElement.volume = 0;
      var video = document.createElement("video");
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
      var width = parseInt(connection.videosContainer.clientWidth / 3) - 20;
      var mediaElement = this.getHTMLMediaElement(video, {
        title: event.userid,
        buttons: ["full-screen"],
        width: width,
        showOnMouseEnter: false
      });
      connection.videosContainer.appendChild(mediaElement);
      setTimeout(function() {
        mediaElement.media.play();
      }, 5000);
      mediaElement.id = event.streamid;
      // to keep room-id in cache
      localStorage.setItem(connection.socketMessageEvent, connection.sessionid);
      // chkRecordConference.parentNode.style.display = "none";
      // if (chkRecordConference.checked === true) {
      //   btnStopRecording.style.display = "inline-block";
      //   recordingStatus.style.display = "inline-block";
      //   var recorder = connection.recorder;
      //   if (!recorder) {
      //     recorder = RecordRTC([event.stream], {
      //       type: "video"
      //     });
      //     recorder.startRecording();
      //     connection.recorder = recorder;
      //   } else {
      //     recorder.getInternalRecorder().addStreams([event.stream]);
      //   }
      //   if (!connection.recorder.streams) {
      //     connection.recorder.streams = [];
      //   }
      //   connection.recorder.streams.push(event.stream);
      //   recordingStatus.innerHTML =
      //     "Recording " + connection.recorder.streams.length + " streams";
      // }
      if (event.type === "local") {
        connection.socket.on("disconnect", function() {
          if (!connection.getAllParticipants().length) {
            this.location.reload();
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
      document.getElementsByClassName("room-id").onkeyup();

      document.getElementsByClassName("open-or-join-room").disabled = !enable;
      document.getElementsByClassName("open-room").disabled = !enable;
      document.getElementsByClassName("join-room").disabled = !enable;
      document.getElementsByClassName("room-id").disabled = !enable;
    };

    const openRoom = () => {
      connection.open(
        document.getElementsByClassName("room-id").value,
        function(isRoomOpened, roomid, error) {
          if (isRoomOpened === true) {
            // alert(connection.sessionid);
            showRoomURL(connection.sessionid);
          } else {
            if (error === "Room not available") {
              alert(
                "Someone already created this room. Please either join or create a separate room."
              );
              return;
            }
            alert(error);
          }
        }
      );
    };

    const joinRoom = () => {
      //TODO: 버튼 비활성화해야함
      connection.join(
        document.getElementsByClassName("room-id").value,
        function(isJoinedRoom, roomid, error) {
          if (error) {
            //버튼 비활성화 풀기
            if (error === "Room not available") {
              alert("현재 이 방은 존재하지 않는 방입니다.");
              return;
            }
            alert(error);
          }
        }
      );
    };
    const openOrJoinRoom = () => {
      //TODO:버튼 비활성화
      connection.openOrJoin(
        document.getElementById("room-id".value, function(
          isRoomExist,
          roomid,
          error
        ) {
          if (error) {
            //TODO::버튼 비활성화
            alert(error);
          } else if (connection.isInitiator === true) {
            showRoomURL(roomid);
            // alert(roomid);
          }
        })
      );
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
    };

    //roomid setting 부분
    var roomid = "";
    if (localStorage.getItem(connection.socketMessageEvent)) {
      roomid = localStorage.getItem(connection.socketMessageEvent);
    } else {
      roomid = connection.token();
    }
    var txtRoomId = document.getElementsByClassName("room-id");
    console.log(txtRoomId);
    txtRoomId.value = roomid;
    txtRoomId.onkeyup = txtRoomId.oninput = txtRoomId.onpaste = function() {
      localStorage.setItem(
        connection.socketMessageEvent,
        document.getElementsByClassName("room-id").value
      );
    };
    var hashString = window.location.hash.replace("#", "");
    if (hashString.length && hashString.indexOf("comment-") == 0) {
      hashString = "";
    }

    //TODO: roomid를 직접 받아와야하는 부분
    var roomid = "4567"; //FIXME:
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
    return (
      <div className="test-container">
        <h1>Video Conferencing using RTCMultiConnection</h1>

        <div>
          <input
            type="text"
            className="room-id"
            autoCorrect="off"
            autoCapitalize="off"
            size="20"
          />
          <button className="open-room" onClick={openRoom}>
            Open Room
          </button>
          <button className="join-room" onClick={joinRoom}>
            Join Room
          </button>
          <button className="open-or-join-room" onClick={openOrJoinRoom}>
            Auto Open Or Join Room
          </button>
        </div>

        <div id="videos-container" />

        <div id="room-urls" />
      </div>
    );
  }
}

export default WebRTCRoom;
