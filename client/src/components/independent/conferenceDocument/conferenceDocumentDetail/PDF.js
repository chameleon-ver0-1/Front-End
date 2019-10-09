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
        <div className="detail_title">l 아이디어</div>
        <div className="detail_content">
          회의를 할 때 프로젝트 단위로 구분하면 더 효율적이지 않을까. 화상회의
          도중에 감정을 인식하면 회의의 분위기를 알 수 있어서 좋을 것 같아.
          회의록을 자동으로 만들어주면 사용자가 더 편리하게 사용할 것 같아.
          부가기능으로 trello처럼 todo doing done 으로 나눠서 일정을 관리할 수
          있으면 좋겠다. 그러면 우리 주제를 화상회의로 하자.
        </div>
      </div>
      <br />
      <div className="div2">
        <div className="detail_title">l 구현 기술</div>
        <div className="detail_content">
          화상회의를 구현하려면 WebRTC기술이 필요해. 회의록 자동화는 STT로
          실시간 음성인식하고 회의종료되면 텍스트로 저장되야겠지. Textrank가
          문서 요약하는 알고리즘인데 그거 사용하면 회의록을 요약할 수 있을거야.
          감정인식은 AWS Rekognition API를 사용하면 되겠다. 회의록에서
          키워드같은 것도 추출하면 뭔가 괜찮을 것 같애.
        </div>
      </div>
      <br />
      <div className="div3">
        <div className="detail_title">l 일정 관리</div>
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
