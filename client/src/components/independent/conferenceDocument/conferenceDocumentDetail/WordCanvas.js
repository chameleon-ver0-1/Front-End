import React, { Component } from "react";
import WordCloud from "wordcloud";
import "./conferencedocdetail.style.css";

export class WordCanvas extends Component {
  componentDidMount() {
    WordCloud(this.refs["my-canvas"], {
      list: [
        ["카멜레온", 15],
        ["컴퓨터공학과", 13],
        ["졸프", 10],
        ["화상회의", 8],
        ["회의록", 4],
        ["노트북", 10],
        ["wordcloud", 7]
      ],

      weightFactor: 2,
      fontWeight: 5,
      color: function(word, weight) {
        if (weight < 5) {
          return "#c0c0c0";
        } else if (weight >= 5 && weight < 10) {
          return "#696969";
        } else if (weight >= 10 && weight < 15) {
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
