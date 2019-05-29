import React, { Component } from 'react'
import './makeroom.style.css'
import Modal from "react-responsive-modal";

class MakeRoom extends Component {
  render() {
    const { open, title, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center >
        <div className="makeroomdiv">
          <div className="roomtitle">{title}</div>
          <div className="row-div">
            <div className="roomtitle2">방제목</div>
            <input className="roominput"></input>
          </div>

          <div className="row-div">
            <div className="roomtitle2">메인 토픽</div>
            <input className="roominput"></input>
          </div>

          <div className="row-div">
            <div className="roomtitle2">시작 시간</div>
            <div></div>
          </div>

          <div className="row-div">
            <div className="roomtitle2">참여자</div>
            <input className="roominput"></input>
          </div>

          <div className="row-div2">
            <button className="makebutton">개설</button>
            <button className="cancelbutton" onClick={onCloseModal}>취소</button>
          </div>

        </div>
      </Modal>
    )
  }
}

export default MakeRoom
