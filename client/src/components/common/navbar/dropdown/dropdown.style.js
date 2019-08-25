import styled from "styled-components";

/*******************************/
/*********NoticeItem.js*********/
/*******************************/

const AlertText = styled.div`
  margin-top: 3px;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
`;
const AlertTime = styled.div`
  font-size: 8.5px;
  color: var(--greenish-teal);
  text-align: bottom;
  margin-top: 35px;
`;

const AlertUL = styled.ul`
  width: 248px;
  height: 365px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 55px;
  right: -30px;
  background-color: #ffffff;
  font-weight: bold;
  position: absolute;
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const AlertLI = styled.li`
  padding: 8px 10px;
  border-bottom: 1px solid #e5e5e5;

  &:hover {
    background-color: var(--light-sage);
  }
`;
const AlertDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const AlertTextDiv = styled.div`
  width: 160px;
  height: 28px;
`;

/*******************************/
/*********Dropdown.js*********/
/*******************************/
const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 200;
  width: 20px;
  height: 28px;
  margin-right: 26px;
  cursor: pointer;
  outline: none;
`;

const AlertBtn = styled.button`
  width: 20px;
  height: 28px;
  padding-right: 32px;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  background-repeat: no-repeat;
  background-size: auto;
`;
const Pointer = styled.div`
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ffffff;
  border-left: 10px solid transparent;
`;
const AlertTitle = styled.div`
  height: 20px;
  font-size: 12px;
  color: var(--brownish-grey);
  border-bottom: 1px solid var(--white-two);
  margin-top: 5px;
  margin-left: 3px;
`;

const AlertAll = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  color: var(--greenish-teal);
  font-size: 12px;
  width: 248px;
  height: 31px;
  border: none;
  background: none;
`;

export { AlertText, AlertTime, AlertUL, AlertLI, AlertDiv, AlertTextDiv };
export { DropDownContainer, AlertBtn, Pointer, AlertTitle, AlertAll };
