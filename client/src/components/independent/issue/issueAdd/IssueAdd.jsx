import React, { Component } from "react";
import styled from "styled-components";
import AddIssueDialog from "./AddIssueDialog";
import { AddBtn } from "./issueadd.style";

export class IssueAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      detail: ""
    };
  }

  openDialog = () => {
    this.setState({
      open: true
    });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  getIssueInfo = (issueTitle, issueDetail) => {
    this.setState({ title: issueTitle, detail: issueDetail });
  };

  render() {
    const { status } = this.props;
    return (
      <div
        style={{
          width: "0px",
          height: "0px",
          display: status == "TODO" ? "inline" : "none"
        }}
      >
        <AddBtn onClick={this.openDialog}>+ TODO 추가하기</AddBtn>
        <AddIssueDialog
          key={status}
          status={status}
          open={this.state.open}
          onCloseModal={this.onCloseModal}
          callbackIssueInfo={this.getIssueInfo}
        />
      </div>
    );
  }
}

export default IssueAdd;
