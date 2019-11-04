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

import * as service from "../../../../services/IssueService";

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
  state = {
    checked: false,
    selectedDate: new Date().toISOString(),
    dDate: new Date(),
    isAttatch: false,
    isConf: false
  };

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
    this.setState({ dDate: date });

    this.setState({
      startDay: date
    });
  };
  handleChange2 = date => {
    this.setState({
      startDate: date
    });
  };
  contentHandleChange = e => {
    // e.target.checked == "true"
    //   ? (document.getElementById("showContent").style.display = "inline")
    //   : (document.getElementById("showContent").style.display = "none");
    console.log("check!", e.target.checked);
  };
  confHandleChange = e => {
    this.setState({
      isConf: e.target.checked
    });
  };
  attachHandleChange = e => {
    this.setState({
      isAttatch: e.target.checked
    });
  };

  render() {
    const { open, onCloseModal, status } = this.props;

    const postIssueItem = () => {
      var projectId = localStorage.getItem("projectId");
      var title = document.getElementById("titleInput").value;
      var date = this.state.dDate;
      var content = document.getElementById("contentInput").value;
      var isConfScheduled = this.state.isConf;
      var attachment = "test.txt";
      var dept = "귀여움"; //FIXME: 선택된 부서 지정.
      var username = localStorage.getItem("name");
      var usernameEn = localStorage.getItem("nameEn");
      var userImg = localStorage.getItem("profilImg");

      console.log("pId", projectId);
      console.log("title", title);
      console.log("content", content);

      service
        .postNewIssue(
          projectId,
          title,
          date,
          content,
          isConfScheduled,
          attachment,
          dept,
          username,
          usernameEn,
          userImg
        )
        .then(res => {
          console.log(res.data);
        });

      onCloseModal();
    };

    return (
      <Modal key={status} open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <div>
            <PopupTitle>TODO 추가하기</PopupTitle>
            <DivideLine />
            <Row>
              <PopupLabel>제목</PopupLabel>
              <TitleInputBorder>
                <TitleInput id="titleInput" />
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
                  onChange={this.contentHandleChange}
                />

                <SelectLabel>설명</SelectLabel>
              </CheckContainer>
              <TextAreaBorder id="showContent">
                <textarea
                  id="contentInput"
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
                <input
                  style={{ marginLeft: "38px" }}
                  type="checkbox"
                  onChange={this.confHandleChange}
                />
                <SelectLabel>화상회의</SelectLabel>
              </CheckContainer>
            </SelectRow>
            <SelectRow style={{ marginTop: "15px" }}>
              <CheckContainer>
                <input
                  style={{ marginLeft: "38px" }}
                  type="checkbox"
                  onChange={this.attachHandleChange}
                />
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
              <ConfirmBtn onClick={postIssueItem}>확인</ConfirmBtn>
              <CancelBtn onClick={onCloseModal}>취소</CancelBtn>
            </SubmitBtns>
          </div>
        </PopupContainer>
      </Modal>
    );
  }
}
