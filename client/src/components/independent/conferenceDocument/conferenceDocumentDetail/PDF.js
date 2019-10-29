import React from "react";
import Page from "./Page";
import WordCanvas from "./WordCanvas";
import "./conferencedocdetail.style.css";

const PDF = ({ id, keywords, contents }) => (
  <Page singleMode={true} id={id}>
    <div className="togopdf">
      <div className="wordclouddiv">
        <div className="detail_title">키워드맵</div>
        {/* {Object.keys(this.state.detail).map(Id => {
              //const list = this.state.detail.keyword[Id];
              console.log(this.state.detail.keyword);
              return <div>ddd</div>;
            })} */}
        {console.log(keywords)}
        <WordCanvas keywords={keywords} />
      </div>

      <div>
        <br />
        <div className="div1">
          <div>{console.log(contents)}</div>
          <div className="detail_title">l 프로젝트 개요</div>
          <div className="detail_content">
            자 주목해 주세요 저희 회의 시작하겠습니다. 그러면 저희 회의
            시작하겠습니다. 지금부터 하님 작품 보 고서 작성 관련 회의를
            시작하겠습니다. 다들 활짝 웃어 주세요 감정 인식하고 있습니다. 네 어
            정말 이게 힘드네요. 지금 안 뜨고 있어요 더 웃어 주세요. 이렇게 말이
            끊겨요 뜹니다. 윤영 씨가 작품 소개와 작 품의 기대 효과에 대해서
            간략하게 말씀해 주실 수 있을까요. 언제 뜨나요 감정은. 와우
            협업플랫폼. 와 우 협업플랫폼 뭐야. 아우 대단하네요 나네 좀 아 이게
            근데 그것 좀.
          </div>
        </div>
        <br />
        <div className="div2">
          <div className="detail_title">l 적용 기술</div>
          <div className="detail_content">
            와 마지막으로 적용 기술에 대해서 이야기 해보겠습니다. 제가 얘
            기할게요 웹알티씨 화상 회의 중 aws 레콘 이전으로 차 여자 얼굴
            인식하고 구글 오늘 거쳐 돈이되는 주제에 대한 종합 반응을 실시간 으로
            분석하여 의견의 지지율을 의사결정의 객관적 활용하고자 합니 다.
            잘한다 표정 무서워요 아. 구정에 해당하는 얼굴표정을 수집 해 학습
            데이터로 활용하고 학습시키는 방식으로 진행하였습니다. 영어 발음이
            놀라워요. 내 발음 좀 인정 받았나 봐.
          </div>
        </div>
        <br />
      </div>
    </div>
  </Page>
);

export default PDF;
