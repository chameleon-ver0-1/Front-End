import React, { Component } from "react";
import styled from "styled-components";
import people from "../../../assets/conference/people.png";
import Conference from "./data/conference.json";

const Circle_conference = styled.div`
  border-radius: 64px;
  width: 128px;
  height: 128px;
  border: solid 1px var(--greenish-teal);
  margin: auto;
  position: relative;
  z-index: -1;
`;

const Circle_title = styled.div`
  font-size: 14px;
  text-align: center;
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

export class Circle1 extends Component {
  render() {
    return (
      <div>
        <Circle_conference>
          <Circle_time>{this.props.time}</Circle_time>
          <Circle_title>{this.props.title}</Circle_title>
          <Circle_name>{this.props.name}</Circle_name>
          <div className="circle_hori">
            <img src={people} className="people" />
            <Circle_people>5/6</Circle_people>
          </div>
        </Circle_conference>
      </div>
    );
  }
}

export default Circle1;
