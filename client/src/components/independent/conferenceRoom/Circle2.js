import React, { Component } from "react";
import styled from "styled-components";
import people from "../../../assets/conference/people.png";
import Conference from "./data/conference.json";
import { withRouter } from "react-router-dom";
import * as service from "../../../services/VideoService";

const Circle_conference = styled.div`
  border-radius: 64px;
  width: 128px;
  height: 128px;
  border: solid 1px var(--greenish-teal);
  margin: auto;
  position: relative;
  z-index: -1;
  margin-top: 22px;
`;

const Circle_title = styled.div`
  font-size: 14px;
  text-align: center;
  cursor: pointer;
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
  margin-left: 100px;
  display: flex;
  align-items: center;
`;

const Circle_date = styled.div`
  width: 80px;
  height: 14px;
  margin: auto;
  border-bottom: 1px solid;
  padding-bottom: 10px;
`;
export class Circle2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_data: []
    };
    this.gotoVideo = this.gotoVideo.bind(this);
  }

  gotoVideo(id) {
    //화상회의로 이동
    console.log(id);
    localStorage.setItem("roomId", id);
    // this.props.history.push(`/room/${localStorage.getItem("roomId")}`);

    /**회의 시작 API */
    service.getVideoStart(localStorage.getItem("roomId")).then(
      res => {
        console.log("화상회의에 오신 걸 환영합니다");
        console.log(res.data);

        this.setState({
          video_data: res.data
        });

        this.props.history.push(`/room/${localStorage.getItem("roomId")}`);
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    const { id, date, time, title, name, nowP, allP } = this.props;

    return (
      <div onClick={() => this.gotoVideo(id)} style={{ cursor: "pointer" }}>
        <Circle_date>{date}</Circle_date>
        <Circle_conference>
          <Circle_time>{time}</Circle_time>
          <Circle_title>{title}</Circle_title>
          <Circle_name>{name}</Circle_name>
          <div className="circle_hori">
            <img src={people} className="people" />
            <Circle_people>
              {nowP}/{allP}
            </Circle_people>
          </div>
        </Circle_conference>
      </div>
    );
  }
}

export default withRouter(Circle2);
