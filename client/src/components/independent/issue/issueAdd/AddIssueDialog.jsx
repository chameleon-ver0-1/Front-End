/**
 * [OUTLINE]
 * 담당자 : 조윤영
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import styled from "styled-components";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-responsive-modal";
import InitialData from "../testItem-data";

import BigDatePicker from "./BigDatePicker";
import SmallDatePicker from "./SmallDatePicker";

import DatePickStyle from "./datepicker.style.css";

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
const TextAreaBorder = styled.div`
  width: 328px;
  height: 97px;
  border: solid 1px var(--white-two);
  border-radius: 12px;
  padding-left: 8px;
  padding-top: 8px;
  margin-left: 36px;
`;
const AddFileBtn = styled.input`
  color: var(--brownish-grey);
  background: #f0f0f0;
  width: 62px;
  height: 23px;
  border: solid 1px var(--white-two);
  font-size: 12px;
  border-radius: 10px;
  margin-left: 11px;
`;
const ConfirmBtn = styled.button`
  font-size: 14px;
  color: var(--greenish-teal);
  border: solid 1px var(--white-two);
  width: 75px;
  height: 38px;
  border-radius: 10px;
  margin-right: 20px;
`;
const CancelBtn = styled.button`
  font-size: 14px;
  color: var(--brownish-teal);
  border: solid 1px var(--white-two);
  width: 75px;
  height: 38px;
  border-radius: 10px;
`;
const SubmitBtns = styled.div`
  display: flex;
  justify-content: center;
`;
var count = 1;
export default class AddIssueDialog extends Component {
  state = { checked: false, selectedDate: new Date().toISOString() };

  handleCheckboxChange = event => {
    this.setState({
      checked: event.target.checked,
      startDay: moment(),
      startDate: moment()
    });
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
  handleChange = date => {
    this.setState({
      startDay: date
    });
  };
  handleChange2 = date => {
    this.setState({
      startDate: date
    });
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
            <div style={{ fontSize: "12px" }}>
              <DatePicker
                customInput={<BigDatePicker />}
                selected={this.state.startDay}
                onChange={this.handleChange}
                minDate={new Date()}
                relativeSize={true}
              />
            </div>
            <DatePicker
              customInput={<SmallDatePicker />}
              selected={this.state.startDate}
              onChange={this.handleChange2}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              timeCaption="Time"
              relativeSize={true}
            />
          </Row>
          <SelectRow>
            <input
              id="selectShow"
              style={{ marginLeft: "38px" }}
              type="checkbox"
            />

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
            <SelectLabel>화상회의</SelectLabel>
          </SelectRow>
          <SelectRow>
            <input style={{ marginLeft: "38px" }} type="checkbox" />
            <SelectLabel>첨부파일</SelectLabel>

            <input
              type="file"
              style={{ marginLeft: "11px", height: "13px", fontSize: "10px" }}
            />
          </SelectRow>
          <SubmitBtns>
            <ConfirmBtn>확인</ConfirmBtn>
            <CancelBtn>취소</CancelBtn>
          </SubmitBtns>
        </PopupContainer>
      </Modal>
    );
  }
}
