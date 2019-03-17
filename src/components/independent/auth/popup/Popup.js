import React, { Component } from 'react'
import './popup.style.css'
import Modal from "react-responsive-modal";

export default class PopUp extends Component {
  render() {
    const { open, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="popup">
          <h3>회사명 검색</h3>
          <input
            type="text"
            name="company_pop"
            className="login-input"
            placeholder="회사명을 입력하세요"
          />
          <br />
          <button
            type="button"
            className="ok-btn"
            onClick={onCloseModal}>확인</button>
        </div>
      </Modal>
    );
  }
}
