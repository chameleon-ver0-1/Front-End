import React, { Component } from "react";
import styled from "styled-components";

const BigTimeBorder = styled.button`
  width: 95px;
  height: 29px;

  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 30px;
  font-size: 14px;
  color: var(--light-black);
`;

export class BigTime extends Component {
  render() {
    return (
      <div>
        <BigTimeBorder onClick={this.props.onClick}>
          {this.props.value}
        </BigTimeBorder>
      </div>
    );
  }
}

export default BigTime;
