import React, { Component } from "react";
import "./issueItem.style.css";

import edit from "../../../../assets/issue/issue_edit.png";
import comment from "../../../../assets/issue/issue_comment.png";
import file from "../../../../assets/issue/issue_file.png";
import conference from "../../../../assets/issue/issue_video_conference.png";

import { Draggable } from "react-beautiful-dnd";

import styled from "styled-components";

const Container = styled.div`
  border: ${props =>
    props.isDragging ? " solid 1px var(--greenish-teal) " : "none"};
`;

let ControlBtn = styled.button`
  // display: block;
`;

let ControlImg = styled.img`
  // display: block;
`;

export class IssueItem extends Component {
  state = {
    mouseCheck: false
  };

  editAppear = () => {
    console.log(1);
  };
  editDisapear = () => {
    console.log(2);
  };

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            className="issueItem-container"
            onMouseOver={this.editAppear}
            onMouseOut={this.editDisapear}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <div id="issueItem-control">
              <ControlBtn className="edit-btn">
                <ControlImg src={edit} className="edit_im" />
              </ControlBtn>
              <div id="issueItem-edit">
                <ControlBtn className="edit-btn">
                  <ControlImg src={edit} className="edit_im" />
                </ControlBtn>
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
          </Container>
        )}
      </Draggable>
    );
  }
}

export default IssueItem;
