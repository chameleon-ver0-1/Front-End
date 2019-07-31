import React from "react";
import Page from "./Page";
import WordCanvas from "./WordCanvas";
import "./conferencedocdetail.style.css";

const PDF = ({ id }) => (
  <Page singleMode={true} id={id}>
    <div className="togopdf">
      <div className="wordclouddiv">
        <div className="detail_title">키워드맵</div>
        <WordCanvas />
      </div>
      <br />
      <div className="div1">
        <div className="detail_title">주제1</div>
        <div className="detail_content">
          요약 : 주제1에 대한 요약이 이곳에 들어갑니다.
        </div>
        <div className="detail_content">
          요약 : 주제1에 대한 요약이 이곳에 들어갑니다.
        </div>
      </div>
      <br />
      <div className="div2">
        <div className="detail_title">주제2</div>
        <div className="detail_content">
          요약 : 주제2에 대한 요약이 이곳에 들어갑니다.
        </div>
        <div className="detail_content">
          요약 : 주제2에 대한 요약이 이곳에 들어갑니다.
        </div>
      </div>
      <br />
      <div className="div3">
        <div className="detail_title">주제3</div>
        <div className="detail_content">
          요약 : 주제3에 대한 요약이 이곳에 들어갑니다.
        </div>
        <div className="detail_content">
          요약 : 주제3에 대한 요약이 이곳에 들어갑니다.
        </div>
      </div>
    </div>
  </Page>
);

export default PDF;
