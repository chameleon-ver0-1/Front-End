import React, { Component } from "react";
import "./issueItem.style.css";

import edit from "../../../../assets/issue/issue_edit.png";
import comment from "../../../../assets/issue/issue_comment.png";
import file from "../../../../assets/issue/issue_file.png";
import conference from "../../../../assets/issue/issue_video_conference.png";
export class IssueItem extends Component {
  editAppear = () => {
    const editBox = document.querySelector(".edit_im");
    editBox.style.display = "block";

    console.log("1");
  };
  editDisapear = () => {
    const editBox = document.querySelector(".edit_im");
    editBox.style.display = "none";
    console.log("2");
  };
  render() {
    return (
      <div
        className="issueItem-container"
        onMouseOver={this.editAppear}
        onMouseOut={this.editDisapear}
      >
        <div id="issueItem-control">
          <button className="edit-btn">
            <img src={edit} className="edit_im" />
          </button>
          <div id="issueItem-edit">
            <button className="edit-btn">
              <img src={edit} className="edit_im" />
            </button>
          </div>
        </div>
        <p className="issueName">전체 부서 정기 회의</p>
        <p className="issueInfo">
          D-day 시간 장소
          <img className="confYN" src={conference} />
        </p>

        <div id="issueItem-detail">
          <img className="comment_im" src={comment} />
          <p className="comment_count">3</p>
          <img className="file_im" src={file} />
        </div>
      </div>
    );
  }
}

export default IssueItem;
