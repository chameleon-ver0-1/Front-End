import React, { Component } from "react";
import styled from "styled-components";

const BigTimeBorder = styled.button`
  width: 95px;
  height: 29px;
  outline: none;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 23px;
  font-size: 14px;
  color: var(--light-black);
  background: none;
`;

const BigTimeBorderN = styled.button`
  width: 95px;
  height: 29px;
  outline: none;
  border-radius: 10px;
  border: solid 1px #ebebe0;
  margin-left: 23px;
  font-size: 14px;
  color: var(--light-black);
  background: #ebebe0;
`;

export class BigTime extends Component {
  render() {
    if (this.props.able == "able") {
      return (
        <div>
          <BigTimeBorder onClick={this.props.onClick}>
            {this.props.value}
          </BigTimeBorder>
        </div>
      );
    } else {
      return (
        <div>
          <BigTimeBorderN onClick={this.props.onClick}>
            {this.props.value}
          </BigTimeBorderN>
        </div>
      );
    }
  }
}

export default BigTime;
