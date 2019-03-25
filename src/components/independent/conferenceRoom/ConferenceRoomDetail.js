import React, { Component } from 'react'
import './conference.style.css';
import '../../../style.css';
import left from '../../../assets/conference/left.png';
import right from '../../../assets/conference/right.png';
import people from '../../../assets/conference/people.png';
import styled, { css } from 'styled-components';

const Circle_conference = styled.div`
  border-radius: 64px;
  width: 128px;
  height: 128px;
  border: solid 1px var(--greenish-teal);
`;

const Conference_title = styled.div`
  font-size: 14px;
`;

const Conference_name = styled.div`
  font-size: 10px;
  color: var(--pinkish-grey);
`;

const Conference_people = styled.div`
  font-size: 12px;
`;

export class ConferenceRoomDetail extends Component {

  render() {
    return (
      <div className="conferenceroom_container">
        <text className="conferenceroom_text">{this.props.title}</text>

        <div className="add_conference">
          <button className="add_conference_btn">+ 회의 개설하기</button>
        </div>

        {/* 실선 */}

        <div className="circle_container">
          <button className="left_right">
            <img src={left} className="left_right_img" /></button>

          <Circle_conference>
            <Conference_title>개발팀 전체 회의</Conference_title>
            <Conference_name>권주희 Kwon ju hee</Conference_name>
            <div className="circle_hori">
              <img src={people} className="people"></img>
              <Conference_people>5/6</Conference_people>
            </div>
          </Circle_conference>

          <Circle_conference>
            <Conference_title>개발팀 전체 회의</Conference_title>
            <Conference_name>권주희 Kwon ju hee</Conference_name>
            <div className="circle_hori">
              <img src={people} className="people"></img>
              <Conference_people>5/6</Conference_people>
            </div>
          </Circle_conference>

          <Circle_conference>
            <Conference_title>개발팀 전체 회의</Conference_title>
            <Conference_name>권주희 Kwon ju hee</Conference_name>
            <div className="circle_hori">
              <img src={people} className="people"></img>
              <Conference_people>5/6</Conference_people>
            </div>
          </Circle_conference>

          <Circle_conference>
            <Conference_title>개발팀 전체 회의</Conference_title>
            <Conference_name>권주희 Kwon ju hee</Conference_name>
            <div className="circle_hori">
              <img src={people} className="people"></img>
              <Conference_people>5/6</Conference_people>
            </div>
          </Circle_conference>

          <button className="left_right">
            <img src={right} className="left_right_img" /></button>

        </div>
      </div>
    );
  }
}

export default ConferenceRoomDetail
