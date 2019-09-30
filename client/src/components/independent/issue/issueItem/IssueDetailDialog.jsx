/**
 * [OUTLINE]
 * 담당자 : 조윤영
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import styled from "styled-components";
import FreeScrollBar from "react-free-scrollbar";

import Modal from "react-responsive-modal";
import InitialData from "../comment-data";
import IssueComment from "../../../../assets/issue/issue_comment.png";
import CommentProfile from "../../../../assets/home/userProfile_no_shadow.png";
import IssueDetailComments from "./IssueDetailComments";
import * as service from "../../../../services/IssueService";
import {
  PopupContainer,
  Reservation,
  Row,
  IssueTitle,
  Line,
  DividedLine,
  IssueContent,
  CreatedBy,
  ContentButton,
  ContentButtons,
  StatusBadge,
  CommentPanel,
  CommentInput,
  CommentInputBorder,
  CommentUpdateBtn,
  SDividedLine,
  Name,
  CommentContent
} from "./issueItem.style";
export default class AddIssueDialog extends Component {
  state = { commentList: [] };

  /*댓글 생성하기 함수 */
  postComment = () => {
    console.log("taskId", this.props.task._id);

    service
      .postComment(
        this.props.task._id,
        localStorage.getItem("name"),
        localStorage.getItem("nameEn"),
        localStorage.getItem("profilImg"),
        document.getElementById("commentInput").value
      )
      .then(res => {
        console.log(res.data);
      });
  };
  componentDidMount() {
    service.getCommentList(this.props.task._id).then(
      res => {
        this.state.commentList = res.data.data;
      },
      err => {
        console.log("이슈 아이템 가져오기 실패");
      }
    );
  }
  render() {
    const { open, onCloseModal, task, status, commentList } = this.props;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <Reservation
            style={{
              display: task.isConfScheduled == false ? "none" : "inline"
            }}
          >
            년.월.일 시간 화상회의
          </Reservation>
          <Row>
            <IssueTitle>{task.title}</IssueTitle>
            <Line />
            <CreatedBy>
              {task.writerName} {task.writerNameEn}
            </CreatedBy>
          </Row>
          <DividedLine />
          <Row>
            <IssueContent>{task.content}</IssueContent>
            <ContentButtons>
              <ContentButton>참여자</ContentButton>
              <ContentButton>첨부파일</ContentButton>
              <ContentButton>회의실</ContentButton>
              <StatusBadge>{status}</StatusBadge>
            </ContentButtons>
          </Row>

          <DividedLine />

          <CommentPanel>
            <Row>
              <img
                src={CommentProfile}
                width="31px"
                height="30px"
                alt="myProfile"
              />
              <CommentInputBorder>
                <CommentInput
                  type="text"
                  id="commentInput"
                  defaultValue=""
                  placeholder="의견을 작성하세요"
                />
              </CommentInputBorder>
              <CommentUpdateBtn onClick={this.postComment}>
                등록
              </CommentUpdateBtn>
            </Row>

            <FreeScrollBar>
              {Object.keys(this.state.commentList).map(commentIds => {
                const comment = this.state.commentList[commentIds];

                return <IssueDetailComments comment={comment} />;
              })}
            </FreeScrollBar>
          </CommentPanel>
        </PopupContainer>
      </Modal>
    );
  }
}
