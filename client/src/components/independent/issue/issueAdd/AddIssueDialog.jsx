/**
 * [OUTLINE]
 * 담당자 : 조윤영
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import styled from "styled-components";

import Modal from "react-responsive-modal";
import InitialData from "../testItem-data";

import CheckBox from "./CheckBox";

const PopupContainer = styled.div`
  width: 530x;
  height: 441px;
`;
const PopupTitle = styled.h3`
  font-size: 20px;
  font-family: NanumSquareB;
  margin-top: 37px;

  color: var(--light-black);
  display: flex;
  justify-content: center;
`;
const PopupLabel = styled.div`
  font-size: 14px;
  font-family: NanumSquareB;
  color: var(--light-black);
  margin-left: 65px;
`;
const SelectLabel = styled.div`
  font-size: 14px;
  font-family: NanumSquareB;
  color: var(--pinkish-grey);
  margin-left: 12px;
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
const DivideLine = styled.div`
  height: 1px;
  width: 417px;
  background: var(--white-five);
  margin-top: 17px;
  margin-bottom: 21px;
  margin-left: 44px;
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 13px;
  align-items: center;
`;
const SelectRow = styled.div`
  display: flex;
  margin-bottom: 13px;
`;
const TitleInput = styled.input`
  border: none;
  width: 320px;
  height: 25px;
  outline: none;
`;
const TitleInputBorder = styled.div`
  width: 328px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 36px;
  padding-left: 5px;
`;
const BigTimeBorder = styled.div`
  width: 95px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 18px;
`;
const SmallTimeBorder = styled.div`
  width: 79px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 6px;
`;
const TextAreaBorder = styled.div`
  width: 328px;
  height: 97px;
  border: solid 1px var(--white-two);
  border-radius: 12px;
  padding-left: 8px;
  padding-top: 8px;
  margin-left: 36px;
`;

var count = 1;
export default class AddIssueDialog extends Component {
  state = { checked: false };

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
    console.log("?");
  };

  /*이슈 추가 다이얼로그에서 설정한 이슈 정보를 상위 컴포넌트로 전달하는 함수*/
  setIssueInfo = () => {
    const issueTitle = document.getElementById("issueTitle").value;
    const issueDetail = document.getElementById("issueDetail").value;
    this.props.callbackIssueInfo(issueTitle, issueDetail);
    console.log("제목:" + issueTitle + "내용:" + issueDetail);
    InitialData.columns["column-1"].taskIds.push({
      id: `task-${count}`,
      contentTitle: issueTitle,
      content: issueDetail
    });
    count++;
  };
  render() {
    const { open, onCloseModal } = this.props;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <PopupTitle>TODO 추가하기</PopupTitle>
          <DivideLine />
          <Row>
            <PopupLabel>제목</PopupLabel>
            <TitleInputBorder>
              <TitleInput />
            </TitleInputBorder>
          </Row>
          <Row>
            <PopupLabel>D-DAY</PopupLabel>
            <BigTimeBorder />
            <SmallTimeBorder />
          </Row>
          <SelectRow>
            {/* <SelectCheckBox
              id="selectShow"
              style={{ marginLeft: "38px" }}
              type="checkbox"
            /> */}
            <CheckBox />
            <SelectLabel>설명</SelectLabel>
            <TextAreaBorder>
              <textarea
                type="textarea"
                wrap="soft"
                cols="49"
                rows="5"
                style={{
                  fontSize: "12px",
                  border: "none",
                  resize: "none",
                  outline: "none"
                }}
                placeholder="업무에 대한 부가 설명을 적어주세요"
              />
            </TextAreaBorder>
          </SelectRow>
          <SelectRow>
            <input style={{ marginLeft: "38px" }} type="checkbox" />
            <SelectLabel>설명</SelectLabel>
          </SelectRow>
          <SelectRow>
            <input style={{ marginLeft: "38px" }} type="checkbox" />
            <SelectLabel>첨부파일</SelectLabel>
          </SelectRow>

          <button onClick={this.setIssueInfo}>전달임시버튼</button>
        </PopupContainer>
      </Modal>
    );
  }
}
