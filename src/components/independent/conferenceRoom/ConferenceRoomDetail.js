import React, { Component } from 'react'
import './conference.style.css';

export class ConferenceRoomDetail extends Component {

  state = {
    boards:
    {
      roomtitle: '4월 간행물 표지 초안',
      roommaker: '권주희 Kwon ju Hee',
      roomtime: '2019.03.21',
      roompeople: '5/5'
    }

  }

  render() {
    // const { boards } = this.state;
    return (
      <div>
        <div className="conferenceroom_container">

          <text className="conferenceroom_text">
            {this.props.title}</text>

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
              <td>{this.state.boards.roomtitle}</td>
              <td>{this.state.boards.roommaker}</td>
              <td>{this.state.boards.roomtime}</td>
              <td>{this.state.boards.roompeople}</td>
              <td>
                <button className="par_btn">참여하기</button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.roomtitle}</td>
              <td>{this.state.boards.roommaker}</td>
              <td>{this.state.boards.roomtime}</td>
              <td>{this.state.boards.roompeople}</td>
              <td>
                <button className="par_btn">참여하기</button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.roomtitle}</td>
              <td>{this.state.boards.roommaker}</td>
              <td>{this.state.boards.roomtime}</td>
              <td>{this.state.boards.roompeople}</td>
              <td>
                <button className="par_btn">참여하기</button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.roomtitle}</td>
              <td>{this.state.boards.roommaker}</td>
              <td>{this.state.boards.roomtime}</td>
              <td>{this.state.boards.roompeople}</td>
              <td>
                <button className="par_btn">참여하기</button>
              </td>
            </tr>
          </table>

          <div className="pagination">
            <button className="page_button">1</button>
            <button className="page_button">2</button>
            <button className="page_button">3</button>
            <button className="page_button">4</button>
            <button className="page_button">5</button>
            {/* activestyle? */}
          </div>

          <div className="conference_search">
            <select className="search_select">
              <option className="search_option" value="방제목">방제목</option>
              <option className="search_option" value="개설자">개설자</option>
              <option className="search_option" value="회의시간">회의시간</option>
            </select>

            <input placeholder="방 제목이나 개설자를 입력하세요" className="search_input"></input>

            <button className="search_button">검색</button>
          </div>

        </div>
      </div>
    )
  }
}

export default ConferenceRoomDetail