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

  display: flex;
  align-items: center;
  justify-content: center;
`;
export class SmallDatePicker extends Component {
  render() {
    return (
      <div>
        <SmallTimeBorder onClick={this.props.onClick}>
          {this.props.value}
        </SmallTimeBorder>
      </div>
    );
  }
}

export default SmallDatePicker;
