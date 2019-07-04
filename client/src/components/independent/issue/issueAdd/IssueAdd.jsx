import React, { Component } from "react";
import styled from "styled-components";

const AddBtn = styled.button`
  width: 237px;
  height: 55px;

  background: var(--white-three);
  color: var(--pinkish-grey);

  font-size: 0.8rem;

  border: none;

  align-items: center;
  text-align: center;

  position: relative;
  top: -50px;

  display: ${props => (props.isShow ? "inline" : "none")};
`;

export class IssueAdd extends Component {
  componentDidMount = () => {
    console.log(this.props.isShow);
  };
  render() {
    return <AddBtn>+ TODO 추가하기</AddBtn>;
  }
}

export default IssueAdd;
