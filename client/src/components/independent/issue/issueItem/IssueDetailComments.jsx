import React, { Component } from "react";
import CommentProfile from "../../../../assets/home/userProfile_no_shadow.png";
import { SDividedLine, Row, Name, CommentContent } from "./issueItem.style";
export class IssueDetailComments extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div width="573px" height="168px">
        <SDividedLine />
        <div>
          <Row>
            <img
              src={CommentProfile}
              width="31px"
              height="30px"
              style={{ marginTop: "10px" }}
            />
            <div style={{ marginLeft: "7px", marginTop: "15px" }}>
              <Name>{comment.name}</Name>
              <CommentContent>{comment.content}</CommentContent>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default IssueDetailComments;
