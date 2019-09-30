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

import {
  SubmitBtns,
  PopupContainer,
  PopupTitle,
  PopupLabel,
  SelectLabel,
  CheckContainer,
  DivideLine,
  Row,
  SelectRow,
  TitleInput,
  TitleInputBorder,
  TextAreaBorder,
  ConfirmBtn,
  CancelBtn
} from "./issueadd.style";

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
  exHandleChange = () => {};
  render() {
    const { open, onCloseModal, status } = this.props;

    return (
      <Modal key={status} open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <div>
            <PopupTitle>TODO 추가하기</PopupTitle>
            <DivideLine />
            <Row>
              <PopupLabel>제목</PopupLabel>
              <TitleInputBorder>
                <TitleInput />
              </TitleInputBorder>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <PopupLabel>D-DAY</PopupLabel>

              <DatePicker
                customInput={<BigDatePicker />}
                selected={this.state.startDay}
                onChange={this.handleChange}
                minDate={new Date()}
                relativeSize={true}
              />

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
            <SelectRow style={{ marginTop: "20px" }}>
              <CheckContainer>
                <input
                  id="selectShow"
                  style={{ width: "16px", height: "16px", marginLeft: "38px" }}
                  type="checkbox"
                  onChange={this.exHandleChange}
                />

                <SelectLabel>설명</SelectLabel>
              </CheckContainer>
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
            <SelectRow style={{ marginTop: "30px" }}>
              <CheckContainer>
                <input style={{ marginLeft: "38px" }} type="checkbox" />
                <SelectLabel>화상회의</SelectLabel>
              </CheckContainer>
            </SelectRow>
            <SelectRow style={{ marginTop: "15px" }}>
              <CheckContainer>
                <input style={{ marginLeft: "38px" }} type="checkbox" />
                <SelectLabel>첨부파일</SelectLabel>
              </CheckContainer>
              <input
                type="file"
                style={{
                  marginLeft: "11px",
                  height: "15px",
                  width: "200px",
                  fontSize: "14px"
                }}
              />
            </SelectRow>
            <SubmitBtns>
              <ConfirmBtn>확인</ConfirmBtn>
              <CancelBtn>취소</CancelBtn>
            </SubmitBtns>
          </div>
        </PopupContainer>
      </Modal>
    );
  }
}
