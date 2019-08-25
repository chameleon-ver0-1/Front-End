import React, { Component } from "react";

import alert from "../../../../assets/home/alrert_list.png";
import user from "../../../../assets/home/userProfile.png";

import {
  AlertText,
  AlertTime,
  AlertLI,
  AlertUL,
  AlertDiv,
  AlertTextDiv
} from "./dropdown.style";

export class NoticeItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <AlertLI>
          <AlertDiv>
            <img width="35px" height="35px" src={alert} />
            <AlertTextDiv>
              <AlertText>{data.content}</AlertText>
            </AlertTextDiv>
            <AlertTime id="left_time"></AlertTime>
          </AlertDiv>
        </AlertLI>
      </div>
    );
  }
}

export default NoticeItem;
