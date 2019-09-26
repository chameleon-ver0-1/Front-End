import React, { Component } from "react";

import edit from "../../../../assets/issue/issue_edit.png";
import comment from "../../../../assets/issue/issue_comment.png";
import file from "../../../../assets/issue/issue_file.png";
import conference from "../../../../assets/issue/issue_video_conference.png";
import IssueDetailDialog from "./IssueDetailDialog";

import { Draggable } from "react-beautiful-dnd";
import {
  Container,
  IssueItemDetail,
  IssueTitles,
  IssueContents,
  IssueContent,
  CommentCount
} from "./issueItem.style";

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

  render() {
    return (
      <React.Fragment>
        <Draggable draggableId={this.props.task._id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              onMouseOver={this.editAppear}
              onMouseOut={this.editDisapear}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <IssueTitles onClick={this.openDialog}>
                {this.props.task.title}
              </IssueTitles>
              <IssueContents>
                {this.props.task.content}
                <img
                  width="7px"
                  height="12px"
                  style={{ marginLeft: "4px" }}
                  src={conference}
                />
              </IssueContents>

              <IssueItemDetail>
                <img
                  onClick={this.openDialog}
                  width="13px"
                  height="12px"
                  src={comment}
                />
                <CommentCount>3</CommentCount>
                <img width="13px" height="12px" src={file} />
              </IssueItemDetail>
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
