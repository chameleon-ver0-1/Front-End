
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

const Circle_conference = styled.div`
  border-radius: 64px;
  width: 128px;
  height: 128px;
  border: solid 1px var(--greenish-teal);
  margin: auto;
`;

const Circle_title = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
`;

const Circle_name = styled.div`
  font-size: 10px;
  color: var(--pinkish-grey);
  text-align: center;
`;

const Circle_people = styled.div`
  font-size: 12px;
`;

const Circle_time = styled.div`
  border-radius: 64px;
  width: 34px;
  height: 34px;
  background: var(--greenish-teal);
  font-size: 10px;
  color: #ffffff;
  text-align: center;
  margin-left: 94px;
  display: flex;
  align-items: center;
`;

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
    return (
      <div className="conferenceroom_container">
        <text className="conferenceroom_text">{this.props.title}</text>

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
                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>
              </div>
            </Slide>

            <Slide index={1}>
              <div className="slide_div">
                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>
              </div>
            </Slide>

            <Slide index={2}>
              <div className="slide_div">
                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>

                <Circle_conference>
                  <Circle_title>개발팀 전체 회의</Circle_title>
                  <Circle_name>권주희 Kwon ju hee</Circle_name>
                  <div className="circle_hori">
                    <img src={people} className="people" />
                    <Circle_people>5/6</Circle_people>
                  </div>
                  <Circle_time>12:30~</Circle_time>
                </Circle_conference>
              </div>
            </Slide>
          </Slider>

          <ButtonNext className="left_right_r">
            <img src={right} className="left_right_img" />
          </ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}

export default ConferenceRoomDetail;
