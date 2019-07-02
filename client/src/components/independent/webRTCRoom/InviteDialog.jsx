import React, { Component, Fragment } from "react";
import styled from "styled-components";
import userProfile from "../../../assets/home/userProfile.png";
import { NONAME } from "dns";
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
  //TODO:
  // videoItem에서의 props에서 state값 중 roomisAppear인지 확인한 후 true일 경우 roomToken가져와서 input value에 setting해줘야 한다.
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    // var copyItem = [
    //   <Fragment>
    //     hihi
    //     <RoomCopyInput id="uniqueRoomId" />
    //   </Fragment>
    // ];
    // const onInvite = () => {
    //   var copyItem = document.createElement("div");
    //   copyItem.innerHTML = "<div>hi</div>";
    //   document.getElementsByClassName("copyRoomId").appendChild(copyItem);
    // };
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
          {item} {item}
          <div
            style={{
              width: "100%",
              color: "var(--greenish-teal)",
              fontSize: "9px",
              background: "none",
              border: "none",
              outline: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
            }}
          >
            +초대하기
          </div>
          <CopyContainer>
            <CopyItem value="localhost:3000/room/test" />

            <button
              style={{
                color: "var(--greenish-teal",
                background: "none",
                border: "none",
                fontSize: "9px"
              }}
            >
              복사
            </button>
          </CopyContainer>
        </InviteList>
      </InviteContainer>
    );
  }
}

export default InviteDialog;
