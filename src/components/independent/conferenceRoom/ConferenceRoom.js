import React, { Component } from "react";
import './conference.style.css';

export class ConferenceRoom extends Component {

  state = {
    boards: [
      {
        roomtitle: '4월 간행물 표지 초안',
        roommaker: '권주희 Kwon ju Headers',
        roomtime: '2019.03.21',
        roompeople: '5/5'
      }
    ]
  }

  render() {
    const { boards } = this.state;
    return (
      <div className="conferenceroom_container">

        <text className="conferenceroom_text">
          현재 진행중인 회의</text>

        <div className="button_width">
          <button className="add_conference">+회의 개설하기</button>
        </div>

        <table className="conferenceroom_table" >
          <tr className="table_head">
            <th>방제목</th>
            <th>개설자</th>
            <th>회의시간</th>
            <th>참여자</th>
            <th></th>
          </tr>

          <tr className="table_content">
            <td>안녕</td>
            <td>안지후</td>
            <td>12시</td>
            <td>5/5</td>
            <td>
              <button className="par_btn">참여하기</button>
            </td>
          </tr>

          <tr>
            <td>안녕</td>
            <td>안지후</td>
            <td>12시</td>
            <td>5/5</td>
            <td>
              <button className="par_btn">참여하기</button>
            </td>
          </tr>

          <tr>
            <td>안녕</td>
            <td>안지후</td>
            <td>12시</td>
            <td>5/5</td>
            <td>
              <button className="par_btn">참여하기</button>
            </td>
          </tr>

          <tr>
            <td>안녕</td>
            <td>안지후</td>
            <td>12시</td>
            <td id="people">5/5</td>
            <td id="par">
              <button className="par_btn">참여하기</button>
            </td>
          </tr>

        </table>

      </div>
    );
  }
}

export default ConferenceRoom;
