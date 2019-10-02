/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 화상회의 메인 홈 화면 구성 내부
 */

import React, { Component } from "react";
import "./conference.style.css";
import "../../../style.css";
import left from "../../../assets/conference/left.png";
import right from "../../../assets/conference/right.png";
import people from "../../../assets/conference/people.png";
import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import MakeRoom from "./makeRoom/MakeRoom";
import Circle1 from "./Circle1";
import Circle2 from "./Circle2";

export class ConferenceRoomDetail extends Component {
  state = {
    open: false,
    title: ""
  };

  submitRegister(e) {}

  onOpenModal = () => {
    this.setState({ open: true, title: "회의 개설하기" });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    if (this.props.title == "현재 진행중인 회의") {
      return (
        <div className="conferenceroom_container">
          <div className="conferenceroom_text">{this.props.title}</div>

          <div className="add_conference">
            <button className="add_conference_btn" onClick={this.onOpenModal}>
              + 회의 개설하기
            </button>
            <MakeRoom
              open={this.state.open}
              title={this.state.title}
              onCloseModal={this.onCloseModal}
            />
          </div>

          <CarouselProvider
            className="circle_container"
            totalSlides={3}
            naturalSlideWidth={800}
            naturalSlideHeight={200}
          >
            <ButtonBack className="left_right_l">
              <img src={left} className="left_right_img" />
            </ButtonBack>

            <Slider className="slider">
              <Slide index={0} className="slide-index0">
                <div className="slide_div">
                  <Circle1
                    time="12:30~"
                    title="개발팀 전체 회의"
                    name="권소영"
                  />
                  <Circle1
                    time="13:30~"
                    title="기획팀 전체 회의"
                    name="안지후"
                  />
                  <Circle1 time="16:00~" title="Front-end 회의" name="조윤영" />
                  <Circle1
                    time="16:30~"
                    title="Back-end 전체 회의"
                    name="한예지"
                  />
                </div>
              </Slide>

              <Slide index={1}>
                <div className="slide_div">
                  <Circle1
                    time="12:30~"
                    title="개발팀 전체 회의"
                    name="권소영"
                  />
                  <Circle1
                    time="13:30~"
                    title="기획팀 전체 회의"
                    name="안지후"
                  />
                  <Circle1 time="16:00~" title="Front-end 회의" name="조윤영" />
                  <Circle1
                    time="16:30~"
                    title="Back-end 전체 회의"
                    name="한예지"
                  />
                </div>
              </Slide>

              <Slide index={2}>
                <div className="slide_div">
                  <Circle1
                    time="12:30~"
                    title="개발팀 전체 회의"
                    name="권소영"
                  />
                  <Circle1
                    time="13:30~"
                    title="기획팀 전체 회의"
                    name="안지후"
                  />
                  <Circle1 time="16:00~" title="Front-end 회의" name="조윤영" />
                  <Circle1
                    time="16:30~"
                    title="Back-end 전체 회의"
                    name="한예지"
                  />
                </div>
              </Slide>
            </Slider>

            <ButtonNext className="left_right_r">
              <img src={right} className="left_right_img" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      );
    } else {
      return (
        <div className="conferenceroom_container">
          <div className="conferenceroom_text">{this.props.title}</div>

          <div className="add_conference2" />

          <CarouselProvider
            className="circle_container"
            totalSlides={3}
            naturalSlideWidth={800}
            naturalSlideHeight={200}
          >
            <ButtonBack className="left_right_l2">
              <img src={left} className="left_right_img" />
            </ButtonBack>

            <Slider className="slider">
              <Slide index={0} className="slide-index0">
                <div className="slide_div">
                  <Circle2
                    date="2019.08.15"
                    time="11:00~"
                    title="8월 중간평가"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.01"
                    time="13:00~"
                    title="카멜레On 결과 비교"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.20"
                    time="16:00~"
                    title="Front-end 회의"
                    name="조윤영"
                  />
                  <Circle2
                    date="2019.10.01"
                    time="09:00~"
                    title="디자인/Front 회의"
                    name="안지후"
                  />
                </div>
              </Slide>

              <Slide index={1}>
                <div className="slide_div">
                  <Circle2
                    date="2019.08.15"
                    time="11:00~"
                    title="8월 중간평가"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.01"
                    time="13:00~"
                    title="카멜레On 결과 비교"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.20"
                    time="16:00~"
                    title="Front-end 회의"
                    name="조윤영"
                  />
                  <Circle2
                    date="2019.10.01"
                    time="09:00~"
                    title="디자인/Front 회의"
                    name="안지후"
                  />
                </div>
              </Slide>

              <Slide index={2}>
                <div className="slide_div">
                  <Circle2
                    date="2019.08.15"
                    time="11:00~"
                    title="8월 중간평가"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.01"
                    time="13:00~"
                    title="카멜레On 결과 비교"
                    name="박우창"
                  />
                  <Circle2
                    date="2019.09.20"
                    time="16:00~"
                    title="Front-end 회의"
                    name="조윤영"
                  />
                  <Circle2
                    date="2019.10.01"
                    time="09:00~"
                    title="디자인/Front 회의"
                    name="안지후"
                  />
                </div>
              </Slide>
            </Slider>

            <ButtonNext className="left_right_r2">
              <img src={right} className="left_right_img" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      );
    }
  }
}

export default ConferenceRoomDetail;
