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
        ["NodeJS", 4]
      ],

      weightFactor: 2,
      fontWeight: 5,
      color: function(word, weight) {
        if (weight < 5) {
          return "#c0c0c0";
        } else if (weight >= 5 && weight < 10) {
          return "#696969";
        } else if (weight >= 10 && weight < 17) {
          return "#202020";
        } else {
          return "#34c88a";
        }
      },
      // rotateRatio: 0.5,
      // rotationSteps: 2,
      backgroundColor: "#fafafa",
      gridSize: 18,
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
