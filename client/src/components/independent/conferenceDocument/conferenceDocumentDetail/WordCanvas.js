import React, { Component } from "react";
import WordCloud from "wordcloud";
import "./conferencedocdetail.style.css";

export class WordCanvas extends Component {
  componentDidMount() {
    WordCloud(this.refs["my-canvas"], {
      list: [
        ["화상회의", 18],
        ["웹", 15],
        ["플랫폼", 13],
        ["WebRTC", 10],
        ["협업툴", 9],
        ["회의록", 8],
        ["자동화", 6],
        ["졸업 프로젝트", 5],
        ["React", 4],
        ["NodeJS", 3],
        ["소켓서버", 11],
        ["Python", 7],
        ["알고리즘", 2],
        ["개발자", 16],
        ["디자인", 11]
      ],
      fontFamily: "NanumSquareL",
      weightFactor: 2,
      fontWeight: 4,
      color: function(word, weight) {
        if (weight < 5) {
          return "#c0c0c0";
        } else if (weight >= 5 && weight < 10) {
          return "#696969";
        } else if (weight >= 10 && weight < 17) {
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
      </div>
    );
  }
}

export default WordCanvas;
