import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainIcon from "../../../assets/home/home_main.jpg";
import {
  DivideLine,
  Title,
  BoldTitle,
  BoldGreenTitle,
  Row,
  Content,
  StartBtn
} from "./welcome.style";
export class Welcome extends Component {
  render() {
    return (
      <div>
        <Row style={{ position: "absolute" }}>
          <div>
            <DivideLine />
            <Title>얼굴인식과 </Title>
            <Title>감정분석을 활용한</Title>
            <Row>
              <BoldTitle>화상협업툴,</BoldTitle>
              <BoldGreenTitle>카멜레On</BoldGreenTitle>
            </Row>
            <Content>
              기술이 도입된 화상회의는 참여자들의 반응을 파악하고, 회의 결과에
              반영하는 과정을 자동화하여 보다 더 효율적인 업무 처리를
              도와줍니다.
            </Content>
            <Link to="/auth/signUp">
              <StartBtn>카멜레ON 처음 시작하기</StartBtn>
            </Link>
          </div>
          <img
            width="952px"
            height="687px"
            src={MainIcon}
            style={{ marginTop: "50px" }}
          />
        </Row>
      </div>
    );
  }
}

export default Welcome;
