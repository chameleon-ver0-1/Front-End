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
import userProfile from "../../../assets/home/userProfile.png";

import {
  InviteContainer,
  UserContainer,
  UserText,
  DivideLine,
  InviteList,
  ShowInviteButton,
  ShortLine,
  DialogUpperLine
} from "./webrtc.style";

/*회의실 참여자 목록 아이템 */
var item = [
  <div>
    <UserContainer>
      <img width="28px" height="28px" src={userProfile} />
      <UserText>권주희 Kwon ju Hee</UserText>
    </UserContainer>
    <DivideLine />
  </div>
];
class InviteDialog extends React.Component {
  //TODO:videoItem에서의 props에서 state값 중 roomisAppear인지 확인한 후 true일 경우 roomToken가져와서 input value에 setting해줘야 한다.
  constructor() {
    super();

    this.state = {
      displayMenu: false //펼쳐지지 않은 상태로 초기화한다.
    };
  }
  onURLCopy = e => {
    console.log("hi");
    e.style.background = "red";
    // console.log(`https://a.chameleon4switch.cf${window.location.pathname}`);
  };

  render() {
    const { memberList } = this.props;
    return (
      <InviteContainer>
        <InviteList>
          <DialogUpperLine>
            <ShortLine />
          </DialogUpperLine>
          {/* {Object.keys(memberList).map(memberId => {
            const member = memberList[memberId];
            return (
              <div>
                <UserContainer>
                  <img width="28px" height="28px" src={userProfile} />
                  <UserText>{member}</UserText>
                </UserContainer>
                <DivideLine />
              </div>
            );
          })} */}

          <ShowInviteButton onClick={this.onURLCopy}>
            +초대하기
          </ShowInviteButton>

          {/* <input value="https://a.chameleon4switch.cf{window.location.pathname}"></input> */}
        </InviteList>
      </InviteContainer>
    );
  }
}

export default InviteDialog;
