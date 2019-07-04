/**
 * 담당자:조윤영
 * [OUTLINE]
 * InviteDialog파일은 네비게이션 바에서 사용자 선택 시 띄워지는 사용자 초대 링크 다이얼로그 컴포넌트
 * <p>
 * [METHOD]
 * showDropdownMenu(event): 사용차 목록/초대 다이얼로그 컴포넌트를 보여주는 함수
 * hideDropdownMenu(): 사용차 목록/초대 다이얼로그 컴포넌트를 숨기는 함수
 *
 * <p>
 * [LIBRARY]
 * 1. react-spring: react-spring의 슬라이드 애니메이션 라이브러리
 * 2. delay: 애니메이션의 지연을 주는 라이브러리
 */
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import userProfile from "../../../assets/home/userProfile.png";

const InviteContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Pointer = styled.div`
  width: 5px;
  height: 5px;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ffffff;
  border-left: 10px solid transparent;
  margin-top: 40px;
  margin-left: -18px;
`;
const InviteList = styled.div`
  width: 205px;
  height: 305px;
  list-style-type: none;
  margin-top: 8px;
  top: 55px;
  right: -30px;
  background-color: #ffffff;
  font-weight: bold;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background: var(--white-two);
  margin-top: 7px;
`;
const UserText = styled.div`
  font-size: 11px;
  color: var(--brownish-grey);
  margin-left: 10px;
`;
const UserContainer = styled.div`
  height: 43px;
  width: 100%;
  display: flex;
  padding-left: 11px;
`;
const CopyContainer = styled.div`
  width: 183px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #b0b0b0;
  background: var(--white-four);
  margin-left: 11px;
  display: flex;
  flex-direction: row;
`;
const CopyItem = styled.input`
  width: 150px;
  height: 23px;
  background: var(--white-four);
  border: none;
  background: none;
  margin-left: 11px;
  color: var(--brownish-grey);
  font-size: 9px;
`;
const ShowInviteButton = styled.div`
  width: 100%;
  color: var(--greenish-teal);
  font-size: 9px;
  background: none;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  text-align: center;
`;
const CopyButton = styled.button`
  color: var(--greenish-teal);
  background: none;
  border: none;
  font-size: 9px;
`;

/*회의실 참여자 목록 아이템 */
var item = [
  <div>
    <UserContainer>
      <img width="40px" height="40px" src={userProfile} />
      <div>
        <UserText>권주희 Kwon ju Hee</UserText>
        <UserText>디자인부</UserText>
      </div>
    </UserContainer>
    <DivideLine style={{ marginTop: "0px", marginBottom: "7px" }} />
  </div>
];
class InviteDialog extends React.Component {
  //TODO:videoItem에서의 props에서 state값 중 roomisAppear인지 확인한 후 true일 경우 roomToken가져와서 input value에 setting해줘야 한다.
  constructor() {
    super();

    this.state = {
      displayMenu: false //펼쳐지지 않은 상태로 초기화한다.
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  /*버튼 선택 시 현재 회의실 방 링크를 복사할 수 있는 컴포넌트가 추가되어 펼쳐지는데  */
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }
  /*사용차 목록/초대 다이얼로그 컴포넌트를 보여주는 함수 */
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <InviteContainer>
        <Pointer />
        <InviteList>
          <div
            style={{
              paddingLeft: "14px",
              paddingTop: "15px",
              width: "100%",
              color: "var(--brownish-grey",
              fontSize: "11px"
            }}
          >
            참여자 목록
          </div>
          <DivideLine />
          {item}
          {item}
          {item}
          {item}
          <ShowInviteButton>+초대하기</ShowInviteButton>
          <CopyContainer>
            <CopyItem value="localhost:3000/room/test" />

            <CopyButton>복사</CopyButton>
          </CopyContainer>
        </InviteList>
      </InviteContainer>
    );
  }
}

export default InviteDialog;
