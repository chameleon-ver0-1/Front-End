import React, { Component } from "react";
import "./issueItem.style.css";

import edit from "../../../../assets/issue/issue_edit.png";
import comment from "../../../../assets/issue/issue_comment.png";
import file from "../../../../assets/issue/issue_file.png";
import conference from "../../../../assets/issue/issue_video_conference.png";
import IssueDetailDialog from "./IssueDetailDialog";

import { Draggable } from "react-beautiful-dnd";

import styled from "styled-components";

const Container = styled.div`
  border: ${props =>
    props.isDragging ? " solid 1px var(--greenish-teal) " : "none"};
  // background: ${props =>
    props.isDragging ? " #C1F2E2" : "var(--light-sage)"};
`;

let ControlBtn = styled.button`
  // display: block;
`;

let ControlImg = styled.img`
  // display: block;
`;
const IssueTitle = styled.button`
  width: auto;
  height: auto;

  display: flex;
  align-content: flex-start;
  overflow: hidden;

  margin-left: 12px;
  font-size: 0.7rem;

  color: var(--light-black);
  background: none;
  border: none;
  outline: none;
`;
const IssueContent = styled.div`
  margin-left: 15px;
  margin-top: 6px;
  font-size: 0.475rem;
  color: var(--greenish-teal);
`;

export class IssueItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseCheck: false
    };
  }
  openDialog = () => {
    console.log("click");
    this.setState({
      open: true
    });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  editAppear = () => {
    console.log(1);
  };
  editDisapear = () => {
    console.log(2);
  };

  render() {
    return (
      <React.Fragment>
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
              <IssueTitle onClick={this.openDialog}>
                {this.props.task.contentTitle}
              </IssueTitle>
              <IssueContent c>
                {this.props.task.content}
                <img className="confYN" src={conference} />
              </IssueContent>

              <div id="issueItem-detail">
                <img className="comment_im" src={comment} />
                <p className="comment_count">3</p>
                <img className="file_im" src={file} />
              </div>
            </Container>
          )}
        </Draggable>
        <IssueDetailDialog
          open={this.state.open}
          onCloseModal={this.onCloseModal}
        />
      </React.Fragment>
    );
  }
}

export default IssueItem;
