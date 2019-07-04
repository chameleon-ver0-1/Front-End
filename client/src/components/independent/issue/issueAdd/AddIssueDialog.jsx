/**
 * [OUTLINE]
 * 담당자 : 조윤영
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import styled from "styled-components";

import Modal from "react-responsive-modal";

const PopupContainer = styled.div`
  width: 368px;
  height: 300px;
`;
const PopupTitle = styled.h3`
  font-size: 16px;
  margin-top: 37px;
  margin-left: 147px;
`;
const PopupLabel = styled.div`
  margin: 0px;
  padding: 0px;
`;
const PopupInput = styled.input`
  width: 290px;
  height: 38px;
  background: none;
  border: none;
  font-size: 12px;
  outline: none;
`;
const PopupInputBorder = styled.div`
  width: 313px;
  height: 39px;
  border-radius: 18.8px;
  border: solid 1px var(--pinkish-grey);
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
`;
const OKBtn = styled.button`
  margin-top: 10px;
  width: 368px;
  height: 44px;
  background-color: var(--greenish-teal);
  border: solid 1px var(--greenish-teal);
  color: #ffffff;
  font-size: 16px;
  outline: none;
`;

export default class AddIssueDialog extends Component {
  setIssueInfo = () => {
    const issueTitle = document.getElementById("issueTitle").value;
    const issueDetail = document.getElementById("issueDetail").value;
    this.props.callbackIssueInfo(issueTitle, issueDetail);
    console.log("제목:" + issueTitle + "내용:" + issueDetail);
  };
  render() {
    const { open, onCloseModal } = this.props;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <PopupTitle>이슈 추가 화면</PopupTitle>
          <PopupLabel>Issue title:</PopupLabel>
          <PopupInputBorder>
            <PopupInput
              type="text"
              id="issueTitle"
              defaultValue=""
              placeholder={this.props.placeholder}
            />
          </PopupInputBorder>
          <PopupLabel>Issue description:</PopupLabel>
          <PopupInputBorder>
            <PopupInput
              type="text"
              id="issueDetail"
              defaultValue=""
              placeholder={this.props.placeholder}
            />
          </PopupInputBorder>
          <button onClick={this.setIssueInfo}>전달임시버튼</button>

          <OKBtn onClick={onCloseModal}>확인</OKBtn>
        </PopupContainer>
      </Modal>
    );
  }
}
