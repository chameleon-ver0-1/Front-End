import React, { Component } from "react";
import "./issueItem.style.css";

import edit from "../../../../assets/issue/issue_edit.png";
import comment from "../../../../assets/issue/issue_comment.png";
import file from "../../../../assets/issue/issue_file.png";
import conference from "../../../../assets/issue/issue_video_conference.png";

import { Draggable } from "react-beautiful-dnd";
import { white } from "material-ui/styles/colors";

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

  checkDrag = props => {
    if (props.isDragging === true) {
    }
    // backgroundColor: this.props.isDragging ? "pink" : "white";
  };
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="issueItem-container"
            onMouseOver={this.editAppear}
            onMouseOut={this.editDisapear}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            // style={this.checkDrag}
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
            <p className="issueName">{this.props.task.contentTitle}</p>
            <p className="issueInfo">
              {this.props.task.content}
              <img className="confYN" src={conference} />
            </p>

            <div id="issueItem-detail">
              <img className="comment_im" src={comment} />
              <p className="comment_count">3</p>
              <img className="file_im" src={file} />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default IssueItem;
