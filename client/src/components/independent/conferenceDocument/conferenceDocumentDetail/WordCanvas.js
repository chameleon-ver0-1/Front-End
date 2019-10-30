import React, { Component } from "react";
import WordCloud from "wordcloud";
import "./conferencedocdetail.style.css";

export class WordCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ""
    };
  }
  componentWillReceiveProps(props) {
    WordCloud(this.refs["my-canvas"], {
      list: props.keywords,
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
    // if (!this.props.keywords) return null;
    return (
      <div className="canvas-div">
        <canvas ref="my-canvas" />
      </div>
    );
  }
}

export default WordCanvas;
