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
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
                </div>
              </Slide>

              <Slide index={1}>
                <div className="slide_div">
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
                </div>
              </Slide>

              <Slide index={2}>
                <div className="slide_div">
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
                  <Circle1 />
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
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
                </div>
              </Slide>

              <Slide index={1}>
                <div className="slide_div">
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
                </div>
              </Slide>

              <Slide index={2}>
                <div className="slide_div">
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
                  <Circle2 />
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
