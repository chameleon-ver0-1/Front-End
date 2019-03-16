import React, { Component } from 'react'
import './popup.style.css'
import Modal from "react-responsive-modal";

export class SignUp extends Component {

  render() {
    return(
      <Modal open={open} onClose={this.onCloseModal} center>
        <div className="popup">
          <h3>회사명 검색</h3>
          <input
            type="text"
            name="company_pop"
            className="login-input"
            placeholder="회사명을 입력하세요"
            />
            <br/>
          <button
          type="button"
          className="ok-btn"
          onClick={this.onCloseModal}>확인</button>
        </div>
      </Modal>
    );
  }
}
