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
  render() {
    const { open, onCloseModal } = this.props;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <PopupContainer>
          <Reservation>년.월.일 시간 화상회의</Reservation>
          <Row>
            <IssueTitle>4월 간행물 표지 초안</IssueTitle>
            <Line />
            <CreatedBy>권주희</CreatedBy>
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
              <StatusBadge>Done</StatusBadge>
            </ContentButtons>
          </Row>

          <DividedLine />
          <div className="comment">
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

              {/* <CommentItems>
                <img />
                <CommentItem />
              </CommentItems> */}
              <FreeScrollBar>
                {Object.keys(this.state.data).map(commentIds => {
                  const comment = this.state.data[commentIds];

                  return (
                    <div>
                      <SDividedLine />
                      <div>
                        <Row>
                          <img
                            src={CommentProfile}
                            width="31px"
                            height="30px"
                            style={{ marginTop: "10px" }}
                          />
                          <div style={{ marginLeft: "7px", marginTop: "15px" }}>
                            <Name>{comment.name}</Name>
                            <CommentContent>{comment.content}</CommentContent>
                          </div>
                        </Row>
                      </div>
                    </div>
                  );
                })}
              </FreeScrollBar>
            </CommentPanel>
          </div>
        </PopupContainer>
      </Modal>
    );
  }
}
