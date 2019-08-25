/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 알림창 애니메이션 및 구성
 */

import React from "react";

import styled, { keyframes } from "styled-components";

import alertOn from "../../../../assets/home/alert_on.png";
import alertOff from "../../../../assets/home/alert_off.png";
import { fadeIn } from "react-animations";
import NoticeItem from "./NoticeItem";
import InitialData from "./notice-item-data";
import {
  DropDownContainer,
  AlertBtn,
  Pointer,
  AlertTitle,
  AlertAll,
  AlertUL
} from "./dropdown.style";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      haveNotice: true,
      InitialData: InitialData
    };
  }

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  render() {
    const { displayMenu, haveNotice, InitialData } = this.state;
    return (
      <DropDownContainer>
        <AlertBtn>
          <img
            width="20px"
            height="30px"
            src={haveNotice ? alertOn : alertOff}
            onClick={this.showDropdownMenu}
          />
        </AlertBtn>
        {displayMenu ? (
          <FadeInDiv className="tri_alert">
            <Pointer />
            <AlertTitle>최근 알림</AlertTitle>
            <AlertUL>
              {Object.keys(InitialData.data).map(noticeItemIds => {
                const noticeItem = InitialData.data[noticeItemIds];
                return <NoticeItem data={noticeItem} />;
              })}
            </AlertUL>
            <AlertAll>전체보기</AlertAll>
          </FadeInDiv>
        ) : null}
      </DropDownContainer>
    );
  }
}

export default Dropdown;
