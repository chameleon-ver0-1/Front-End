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
  state = InitialData;

  componentDidMount() {
    service.getCommentList().then(
      res => {
        console.log("comments", res.data.data);
      },
      err => {
        console.log("이슈 아이템 가져오기 실패");
      }
    );
  }
  render() {
    const { open, onCloseModal, task, status } = this.props;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <Reservation>년.월.일 시간 화상회의</Reservation>
          <Row>
            <IssueTitle>{task.title}</IssueTitle>
            <Line />
            <CreatedBy>
              {task.writerName} {task.writerNameEn}
            </CreatedBy>
          </Row>
          <DividedLine />
          <Row>
            <IssueContent>
              3월 13일 오후 1시 진행될 회의와 관련한 참고자료 입니다. 파일
              다운로드후, 회의 전까지 정독바랍니다. 확인 하신 분들은 댓글
              달아주세요.
            </IssueContent>
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
                  id="issueTitle"
                  defaultValue=""
                  placeholder="의견을 작성하세요"
                />
              </CommentInputBorder>
              <CommentUpdateBtn>등록</CommentUpdateBtn>
            </Row>

            <FreeScrollBar>
              {/* {Object.keys(task.commentIds).map(columnId => {
            const column = this.state.taskLists[columnId];
            const tasks = [];
            column.taskIds.forEach(id => {
              tasks.push(
                ...this.state.taskItemLists.filter(item => item._id === id)
              );
            });

            return (
              <Issue3 key={column._id}>
                return <IssueDetailComments comment={comment} />;
              </Issue3>
            );
          })} */}
              {Object.keys(this.state.data).map(commentIds => {
                const comment = this.state.data[commentIds];

                return <IssueDetailComments comment={comment} />;
              })}
            </FreeScrollBar>
          </CommentPanel>
        </PopupContainer>
      </Modal>
    );
  }
}
