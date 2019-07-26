import React, { Component } from "react";
import "./test.style.css";

// var maxTries = 0;
// function showChromeExtensionStatus() {
//   if (typeof window.getChromeExtensionStatus !== "function") return;

//   var gotResponse;
//   window.getChromeExtensionStatus(function(status) {
//     gotResponse = true;
//     document.getElementById("chrome-extension-status").innerHTML =
//       "Chrome extension status is: <b>" + status + "</b>";
//     console.info("getChromeExtensionStatus", status);
//   });

//   maxTries++;
//   if (maxTries > 15) return;
//   setTimeout(function() {
//     if (!gotResponse) showChromeExtensionStatus();
//   }, 1000);
// }

// showChromeExtensionStatus();

// // via: https://bugs.chromium.org/p/chromium/issues/detail?id=487935#c17
// // you can capture screen on Android Chrome >= 55 with flag: "Experimental ScreenCapture android"
// window.IsAndroidChrome = false;
// try {
//   if (
//     navigator.userAgent.toLowerCase().indexOf("android") > -1 &&
//     /Chrome/.test(navigator.userAgent) &&
//     /Google Inc/.test(navigator.vendor)
//   ) {
//     window.IsAndroidChrome = true;
//   }
// } catch (e) {}
// document.getElementById("capture-screen").onclick = function() {
//   document.getElementById("capture-screen").disabled = true;
//   setTimeout(function() {
//     if (
//       document.getElementById("capture-screen").disabled &&
//       !document.querySelector("video").src
//     ) {
//       document.getElementById("capture-screen").disabled = false;
//     }
//   }, 5000);
//   // edge 17 or higher
//   if (
//     navigator.userAgent.indexOf("Edge") !== -1 &&
//     (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)
//   ) {
//     navigator.getDisplayMedia(screen_constraints).then(
//       stream => {
//         document.querySelector("video").srcObject = stream;
//       },
//       error => {
//         alert("Please make sure to use Edge 17 or higher.");
//       }
//     );
//     return;
//   }
//   getScreenId(
//     function(error, sourceId, screen_constraints) {
//       // error    == null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
//       // sourceId == null || 'string' || 'firefox'
//       // getUserMedia(screen_constraints, onSuccess, onFailure);
//       document.getElementById("capture-screen").disabled = false;
//       if (IsAndroidChrome) {
//         screen_constraints = {
//           mandatory: {
//             chromeMediaSource: "screen"
//           },
//           optional: []
//         };

//         screen_constraints = {
//           video: screen_constraints
//         };
//         error = null;
//       }
//       if (error == "not-installed") {
//         alert("Please install Chrome extension. See the link below.");
//         return;
//       }
//       if (error == "installed-disabled") {
//         alert(
//           'Please install or enable Chrome extension. Please check "chrome://extensions" page.'
//         );
//         return;
//       }
//       if (error == "permission-denied") {
//         alert(
//           "Please make sure you are using HTTPs. Because HTTPs is required."
//         );
//         return;
//       }
//       console.info(
//         "getScreenId callback \n(error, sourceId, screen_constraints) =>\n",
//         error,
//         sourceId,
//         screen_constraints
//       );
//       document.getElementById("capture-screen").disabled = true;
//       navigator.mediaDevices
//         .getUserMedia(screen_constraints)
//         .then(function(stream) {
//           // share this "MediaStream" object using RTCPeerConnection API
//           document.querySelector("video").srcObject = stream;
//           stream.oninactive = stream.onended = function() {
//             document.querySelector("video").src = null;
//             document.getElementById("capture-screen").disabled = false;
//           };
//           document.getElementById("capture-screen").disabled = false;
//         })
//         .catch(function(error) {
//           console.error("getScreenId error", error);
//           alert(
//             "Failed to capture your screen. Please check Chrome console logs for further information."
//           );
//         });
//     } /*, ['screen', 'audio']*/
//   );
// };

export class VideoShating extends Component {
  /*script가져오는 함수 */
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.webrtc-experiment.com/getScreenId.js";
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";

    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <div id="chrome-extension-status" />
        <button id="capture-screen">Capture Your Own Screen</button>
        <video
          controls
          autoplay
          playsinline
          style="width: 100%;background-repeat: no-repeat;background-size: 100%;background-image: url(https://lh5.googleusercontent.com/6U-gmL_hG9bbquDZdW_ajiA-1bgkfSlHOkzR24aigkyPQzXWXNoRNfyLjXS3rqV92iwq395JSQ=s640-h400-e365-rw);"
        />
      </div>
    );
  }
}

export default VideoShating;
