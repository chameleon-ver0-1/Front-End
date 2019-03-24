import React, { Component } from 'react'
import './popup.style.css'
import Modal from "react-responsive-modal";
import search from '../../../../assets/signUp/search.png';

export default class PopUp extends Component {
  render() {
    const { open, title, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="popup">
          <h3 className="popup-title">{title}</h3>

          <div className="popup-search">
            <input
              type="text"
              name="company_pop"
              className="popup-input"
              placeholder={this.props.placeholder}
            />

            <button className="search">
              <img src={search} className="search2" /></button>

          </div>

          <button
            type="button"
            className="ok-btn"
            onClick={onCloseModal}>확인</button>
        </div>
      </Modal>
    );
  }
}
