/**
 * [OUTLINE]
 * 담당자 : 조윤영
 * 돋보기 버튼을 누르면 나오는 팝업 화면(뒷 배경이 검은색이고 중앙에 작은 화면이 크게 뜸)
 */

import React, { Component } from "react";
import styled from "styled-components";
import FreeScrollBar from "react-free-scrollbar";
// import InitialData from "../testItem-data";

import Modal from "react-responsive-modal";
import InitialData from "../testItem-data";
import IssueComment from "../../../../assets/issue/issue_comment.png";
import CommentProfile from "../../../../assets/home/userProfile_no_shadow.png";

const PopupContainer = styled.div`
  width: 516px;
  height: 520px;
  background: white;
  box-shadow: 3 0 7 rgba(0, 0, 0, 0.2);
  padding-top: 35px;
  padding-left: 25px;
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
const Reservation = styled.div`
  font-size: 10px;
  color: var(--greenish-teal);
`;
const IssueTitle = styled.div`
  color: var(--light-black);
  font-size: 16px;
`;
const Line = styled.div`
  width: 2px;
  height: 9px;
  background: var(--pinkish-grey);
  margin-left: 7px;
`;
const CreatedBy = styled.div`
  font-size: 8px;
  color: var(--pinkish-grey);
  margin-left: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DividedLine = styled.div`
  margin-top: 11px;
  width: 459px;
  height: 2px;
  background: var(--white-five);
`;
const IssueContent = styled.div`
  font-size: 10px;
  color: var(--brownish-grey);
  width: 459px;
  height: auto;
  margin-top: 12px;
`;
const ContentButtons = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: row;
`;

const ContentButton = styled.button`
  width: 42px;
  border: 1px solid var(--pinkish-grey);
  border-radius: 5px;
  font-size: 8px;
  color: var(--pinkish-grey);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 4px;
`;
const StatusBadge = styled.button`
  width: 42px;
  border: 1px solid var(--greenish-teal);
  border-radius: 5px;
  font-size: 8px;
  color: var(--greenish-teal);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentPanel = styled.div`
  background: var(--white-three);
  width: 459px;
  height: 186px;
  margin-top: 8px;
  padding-top: 12px;
`;

const SDividedLine = styled.div`
  margin-top: 11px;
  width: 439px;
  height: 2px;
  background: var(--white-five);
`;

const CommentInput = styled.input`
  width: auto;
  height: 29px;
  background: none;
  border: none;
  font-size: 8px;
  outline: none;
`;
const CommentInputBorder = styled.div`
  width: 367px;
  height: 29px;
  border: solid 1px var(--white-five);
  margin-left: 4px;
  padding-left: 10px;
  background: white;

  display: flex;
  align-items: center;
`;
const RowWithMargin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
const CommentUpdateBtn = styled.button`
  width: 36px;
  height: 29px;
  background: white;
  border: 1px solid var(--white-five);
  color: var(--brownish-grey);
  margin-left: 2px;
  font-size: 8px;
`;
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
          <DividedLine />
          <div className="comment">
            <RowWithMargin>
              <img src={IssueComment} width="14px" height="12px" />
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--brownish-grey)",
                  marginLeft: "4px"
                }}
              >
                의견 남기기
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--pinkish-grey)",
                  marinLeft: "8px"
                }}
              >
                4
              </div>
            </RowWithMargin>

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

              <SDividedLine />

              {/* <CommentItems>
                <img />
                <CommentItem />
              </CommentItems> */}
              <FreeScrollBar>
                {/* {Object.keys(this.state.columns).map(columnId => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(
                    taskId => this.state.tasks[taskId]
                  );

                  return (
                    <div className="issues-3">
                      <IssueBox
                        key={column.id}
                        column={column}
                        tasks={tasks}
                        count={column.count}
                        isTodos={column.isTodo}
                      />
                    </div>
                  );
                })} */}
              </FreeScrollBar>
            </CommentPanel>
          </div>

          <OKBtn onClick={onCloseModal}>확인</OKBtn>
        </PopupContainer>
      </Modal>
    );
  }
}
