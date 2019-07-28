import React from "react";
import styled from "styled-components";

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;
const OverLay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 24px;
  width: 24px;
  background-color: #f39c12;
  border-radius: 8px;
  border: 2px solid #f39c12;

  &:checked {
    border-radius: 8px;
    opacity: 1;
    border: 2px solid #f39c12;
  }
`;

const SVG = styled.svg`
  color: white;
`;

const Checkbox = () => (
  <span>
    <Input type="checkbox" />
    <OverLay>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="24"
        stroke-dashoffset="-24"
        class="icon"
      >
        <polyline points="20 6 9 17 4 12" />
      </SVG>
    </OverLay>
  </span>
);

export default Checkbox;
