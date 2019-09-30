import styled from "styled-components";

const PopupContainer = styled.div`
  width: 505px;
  height: 441px;
`;
const PopupTitle = styled.h3`
  font-size: 20px;
  font-family: NanumSquareB;
  margin-top: 37px;

  display: flex;
  justify-content: center;
  width: 100%;

  color: var(--light-black);
`;
const PopupLabel = styled.div`
  font-size: 14px;
  font-family: NanumSquareB;
  color: var(--light-black);
  margin-left: 65px;
`;
const SelectLabel = styled.div`
  font-size: 14px;
  font-family: NanumSquareB;
  color: var(--pinkish-grey);
  width: 76px;
`;
const CheckContainer = styled.div`
  height: 16px;
  display: flex;
  align-items: center;
`;

const DivideLine = styled.div`
  height: 1px;
  width: 417px;
  background: var(--white-five);
  margin-top: 17px;
  margin-bottom: 21px;
  margin-left: 44px;
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 13px;
  align-items: center;
  height: 29px;
`;
const SelectRow = styled.div`
  display: flex;
  margin-bottom: 13px;
`;
const TitleInput = styled.input`
  border: none;
  width: 315px;
  height: 25px;
  outline: none;
`;
const TitleInputBorder = styled.div`
  width: 328px;
  height: 29px;
  border-radius: 10px;
  border: solid 1px var(--white-two);
  margin-left: 48px;
  padding-left: 5px;
  display: flex;
  align-items: center;
`;
const TextAreaBorder = styled.div`
  width: 328px;
  height: 97px;
  border: solid 1px var(--white-two);
  border-radius: 12px;
  padding-top: 8px;
  padding-left: 8px;
`;

const ConfirmBtn = styled.button`
  font-size: 14px;
  color: var(--greenish-teal);
  border: solid 1px var(--white-two);
  width: 75px;
  height: 38px;
  border-radius: 10px;
  margin-right: 20px;

  cursor: pointer;
`;
const CancelBtn = styled.button`
  font-size: 14px;
  color: var(--brownish-teal);
  border: solid 1px var(--white-two);
  width: 75px;
  height: 38px;
  border-radius: 10px;

  cursor: pointer;
`;
const SubmitBtns = styled.div`
  display: flex;
  justify-content: center;
`;

const AddBtn = styled.button`
  width: 260px;
  height: 55px;

  background: var(--white-three);
  color: var(--pinkish-grey);

  font-size: 16px;

  border: none;
  align-items: center;
  text-align: center;

  outline: none;

  font-family: NanumSquareB;

  cursor: pointer;
`;

export {
  PopupContainer,
  PopupTitle,
  PopupLabel,
  SelectLabel,
  SubmitBtns,
  CheckContainer,
  DivideLine,
  Row,
  SelectRow,
  TitleInput,
  TitleInputBorder,
  TextAreaBorder,
  ConfirmBtn,
  CancelBtn,
  AddBtn
};
