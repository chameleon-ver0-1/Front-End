import React, { Component } from "react";
import Modal from "react-responsive-modal";
import * as service from "../../../services/VideoService";
import { withRouter } from "react-router-dom";
import {
  CheckLeaveContainer,
  CheckButtonItem,
  RowButtons,
  CheckLeaveDiv
} from "./webrtc.style";
export class CheckLeaveDialog extends Component {
  onExit = () => {
    service.postVideoExit(localStorage.getItem("roomId"));

    this.props.history.push(
      `/home/conferenceRoom/${localStorage.getItem("projectId")}`
    );
  };

  render() {
    const { open, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <CheckLeaveContainer>
          <CheckLeaveDiv>아직 회의가 종료되지 않았습니다 </CheckLeaveDiv>
          <CheckLeaveDiv>정말 나가시겠습니까?</CheckLeaveDiv>
          <RowButtons>
            <CheckButtonItem
              onClick={this.onExit}
              style={{ marginRight: "20px" }}
            >
              나가기
            </CheckButtonItem>
            <CheckButtonItem onClick={onCloseModal}>취소</CheckButtonItem>
          </RowButtons>
        </CheckLeaveContainer>
      </Modal>
    );
  }
}

export default withRouter(CheckLeaveDialog);
