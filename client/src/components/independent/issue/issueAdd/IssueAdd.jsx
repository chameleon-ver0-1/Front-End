import React, { Component } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const AddBtn = styled.button`
  width: 250px;
  height: 55px;

  background: var(--white-three);
  color: var(--pinkish-grey);

  font-size: 0.8rem;

  border: none;
  align-items: center;
  text-align: center;

  position: relative;
  top: -40px;

  // display: ${props => (props.isShow ? "inline" : "none")};
`;

export class IssueAdd extends Component {
  state = {
    open: false
  };
  componentDidMount = () => {
    console.log(this.props.isShow);
  };
  //TODO:
  openDialog = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div>
        <AddBtn onClick={this.openDialog}>+ TODO 추가하기</AddBtn>
        {/* <Popup
          open={this.state.open}
          title={this.state.title}
          placeholder={this.state.placeholder}
          onCloseModal={this.onCloseModal}
        /> */}
      </div>
    );
  }
}

export default IssueAdd;
