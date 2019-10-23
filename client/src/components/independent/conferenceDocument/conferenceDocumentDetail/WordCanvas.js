import React, { Component } from "react";
import WordCloud from "wordcloud";
import "./conferencedocdetail.style.css";

export class WordCanvas extends Component {
  componentDidMount() {
    //console.log(this.props.keyword);
    WordCloud(this.refs["my-canvas"], {
      list: [
        ["분석기술", 18],
        ["얼굴 인식", 17],
        ["회의록 생성", 16],
        ["회의록 작성", 15],
        ["자동생성", 14],
        ["회의록", 13],
        ["협업 플랫폼", 12],
        ["화상 회의", 11],
        ["감정 분석", 10],
        ["얼굴 표정", 9],
        ["회의 화면", 8],
        ["감정 인식", 7],
        ["플랫폼 카멜레온", 6],
        ["회의 기반", 5]
      ],
      fontFamily: "NanumSquareL",
      weightFactor: 1.2,
      fontWeight: 2,
      color: function(word, weight) {
        if (weight < 8) {
          return "#c0c0c0";
        } else if (weight >= 8 && weight < 13) {
          return "#696969";
        } else if (weight >= 13 && weight < 18) {
          return "#88e0bc";
        } else {
          return "#23ad6e";
        }
      },
      rotateRatio: 0,
      // rotationSteps: 2,
      backgroundColor: "#fafafa",
      gridSize: 18,
      drawOutOfBound: true,
      hover: window.drawBox,
      click: function(item) {
        //TODO: 해당 텍스트로 이동해야 함
        alert(item[0] + ": " + item[1]);
      }
    });
  }

  render() {
    return (
      <div className="canvas-div">
        <canvas ref="my-canvas" />
        <div>
          {/* {Object.keys(this.props.keyword).map(Id => {
            const key = this.props.keyword[Id];
            console.log(this.props.keyword);
            return <div>dd</div>;
          })} */}
        </div>
      </div>
    );
  }
}

export default WordCanvas;
