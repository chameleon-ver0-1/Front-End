import React, { Component } from 'react'
import './conferencedoc.style.css';
import doc_off from '../../../assets/doc/doc_off.png';
import doc_on from '../../../assets/doc/doc_on.png';
import download_off from '../../../assets/doc/download_off.png';
import download_on from '../../../assets/doc/download_on.png';

export class ConferenceDoc extends Component {

  state = {
    boards:
    {
      doctitle: '4월 간행물 표지 초안',
      doctime: '2019.03.21 12:00 ~ 14:00',
      docfile: '',
      docdownload: ''
    }

  }

  render() {
    return (
      <div>
        <div className="documentroom_container">

          <text className="documentroom_text">
            지난 회의록</text>

          <table className="documentroom_table" >
            <tr className="table_head">
              <th>회의제목</th>
              <th>회의시간</th>
              <th>파일명</th>
              <th>보기 및 다운로드</th>
              <th></th>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
              </td>
            </tr>

            <tr className="table_content">
              <td>{this.state.boards.doctitle}</td>
              <td>{this.state.boards.doctime}</td>
              <td>{this.state.boards.docfile}</td>
              <td>
                <button className="doc_button">
                  <img src={doc_off} className="doc_buttonimg"
                  /></button>
                <button className="doc_button">
                  <img src={download_off} className="doc_buttonimg"
                  /></button>
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
              <option className="search_option" value="회의제목">회의제목</option>
              <option className="search_option" value="회의시간">회의시간</option>
            </select>

            <input placeholder="회의 제목이나 날짜를 입력하세요" className="search_input"></input>

            <button className="search_button">검색</button>
          </div>

        </div>
      </div>
    )
  }
}

export default ConferenceDoc
