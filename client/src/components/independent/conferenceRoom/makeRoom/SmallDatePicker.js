import React, { Component } from "react";
import styled from "styled-components";

const SmallTimeBorder = styled.div`
  width: 70px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 18px;
  font-size: 14px;
  color: var(--light-black);
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallTimeBorderN = styled.div`
  width: 70px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px #ebebe0;
  margin-left: 18px;
  font-size: 14px;
  color: var(--light-black);
  background: #ebebe0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export class SmallDatePicker extends Component {
  render() {
    if (this.props.able == "able") {
      return (
        <div>
          <SmallTimeBorder onClick={this.props.onClick}>
            {this.props.value}
          </SmallTimeBorder>
        </div>
      );
    } else {
      return (
        <div>
          <SmallTimeBorderN onClick={this.props.onClick}>
            {this.props.value}
          </SmallTimeBorderN>
        </div>
      );
    }
  }
}

export default SmallDatePicker;
