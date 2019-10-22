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
export class CheckEndDialog extends Component {
  //FIXME: TO소영: 여기는 회의실 나가기 버튼 함수란다.
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
          <CheckLeaveDiv>회의를 종료하시겠습니까? </CheckLeaveDiv>
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

export default withRouter(CheckEndDialog);
