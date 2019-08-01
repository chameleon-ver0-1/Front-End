import React, { Component } from "react";
import styled from "styled-components";
import AddIssueDialog from "./AddIssueDialog";

const AddBtn = styled.button`
  width: 257px;
  height: 55px;

  background: var(--white-three);
  color: var(--pinkish-grey);

  font-size: 16px;

  border: none;
  align-items: center;
  text-align: center;

  position: relative;
  top: -50px;
  left: 21px;
  outline: none;

  font-family: NanumSquareB;

  cursor: pointer;
`;

export class IssueAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      detail: ""
    };
  }

  componentDidMount = () => {
    console.log(this.props.isShow);
  };
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
    return (
      <div style={{ width: "0px", height: "0px" }}>
        <AddBtn onClick={this.openDialog}>+ TODO 추가하기</AddBtn>
        {/* <div>제목:{this.state.title}</div>
        <div>내용:{this.state.detail}</div> */}
        <AddIssueDialog
          open={this.state.open}
          onCloseModal={this.onCloseModal}
          callbackIssueInfo={this.getIssueInfo}
        />
      </div>
    );
  }
}

export default IssueAdd;
