import React, { Component } from 'react';
import WordCloud from 'wordcloud';
import './conferencedocdetail.style.css';

class ConferenceDocDetail extends Component {

  componentDidMount() {
    WordCloud(this.refs['my-canvas'],
      {
        list: [['카멜레온', 15], ['컴퓨터공학과', 13], ['졸프', 10], ['화상회의', 8], ['회의록', 4],
        ['노트북', 10], ['wordcloud', 7]],

        weightFactor: 2,
        fontWeight: 5,
        color: function (word, weight) {
          if (weight < 5) {
            return '#c0c0c0';
          }
          else if (weight >= 5 && weight < 10) {
            return '#696969';
          }
          else if (weight >= 10 && weight < 15) {
            return '#202020';
          }
          else {
            return '#34c88a';
          }
        },
        // rotateRatio: 0.5,
        // rotationSteps: 2,
        backgroundColor: '#fafafa',
        gridSize: 18,
        hover: window.drawBox,
        click: function (item) {
          alert(item[0] + ': ' + item[1]);
        }
      });
  }

  render() {
    return (
      <div>
        <div className="documentDetailTitle">
          <div className="Title1">4월 간행물 표지 초안</div>
          <div className="Title2">2019.03.13 PM1:00 화상회의</div>
          <div className="save_buttons">
            <button>전체본</button>
            <button>요약본</button>
          </div>
        </div>

        <div className="wordclouddiv">
          <div>키워드맵</div>
          <div className="canvas-div">
            <canvas ref="my-canvas"></canvas>
          </div>
        </div>

        <div className="div1">
          <div>주제1</div>
          <div>요약 : 주제1에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제1에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제1에 대한 요약이 이곳에 들어갑니다.</div>
        </div>

        <div className="div2">
          <div>주제2</div>
          <div>요약 : 주제2에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제2에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제2에 대한 요약이 이곳에 들어갑니다.</div>
        </div>

        <div className="div3">
          <div>주제1</div>
          <div>요약 : 주제3에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제3에 대한 요약이 이곳에 들어갑니다.</div>
          <div>요약 : 주제3에 대한 요약이 이곳에 들어갑니다.</div>
        </div>

      </div>
    )
  }
}

export default ConferenceDocDetail
