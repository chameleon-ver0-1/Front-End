import React, { Component } from "react";
import styled from "styled-components";
import people from "../../../assets/conference/people.png";
import Conference from "./data/conference.json";
import { withRouter } from "react-router-dom";
import * as service from "../../../services/VideoService";
import * as service2 from "../../../services/ConferenceRoomService";

import bubble from "../../../assets/conferenceRoom/speechbubble.png";

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

const DisplayPeopleDiv = styled.div`
  background-image: url(${bubble});
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  position: absolute;
  left: 15px;
  object-fit: contain;
`;

export class Circle2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_data: [],
      displayMenu: false,
      peopleList: []
    };

    this.gotoVideo = this.gotoVideo.bind(this);
    this.displayMember = this.displayMember.bind(this);
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

  displayMember(id) {
    console.log(id + "참여자 목록이 뜰거야!");
    this.setState({ displayMenu: true });

    service2.confShowParticipants(localStorage.getItem("projectId"), id).then(
      res => {
        console.log("회의 참여한 사람들 목록이 뜬다!");
        console.log(res.data.data);

        this.setState({
          peopleList: res.data.data
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  NdisplayMember(id) {
    console.log(id + "참여자 목록이 사라질거야!");
    this.setState({ displayMenu: false });
    console.log(this.state.displayMenu);
  }

  render() {
    const { id, date, time, title, name, nowP, allP } = this.props;
    const { displayMenu, peopleList } = this.state;
    return (
      <div
        onClick={() => this.gotoVideo(id)}
        style={{ cursor: "pointer" }}
        onMouseOver={() => this.displayMember(id)}
        onMouseOut={() => this.NdisplayMember(id)}
      >
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
          {displayMenu ? (
            <div>
              <DisplayPeopleDiv>
                {Object.keys(peopleList).map(id => {
                  const list = peopleList[id];

                  if (list.isConfYn == "Y") {
                    return (
                      <div style={{ fontSize: "10px", color: "#34c88a" }}>
                        {list.name + " " + list.name_en}
                      </div>
                    );
                  } else {
                    return (
                      <div style={{ fontSize: "10px" }}>
                        {list.name + " " + list.name_en}
                      </div>
                    );
                  }
                })}
              </DisplayPeopleDiv>
            </div>
          ) : null}
        </Circle_conference>
      </div>
    );
  }
}

export default withRouter(Circle2);
