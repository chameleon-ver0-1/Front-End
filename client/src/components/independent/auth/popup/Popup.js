/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import "./popup.style.css";
import Modal from "react-responsive-modal";
import search from "../../../../assets/signUp/search.png";

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
              <img src={search} className="search2" />
            </button>
          </div>

          <button type="button" className="ok-btn" onClick={onCloseModal}>
            확인
          </button>
        </div>
      </Modal>
    );
  }
}
