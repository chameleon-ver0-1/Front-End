import styled from "styled-components";

export const DepContainer = styled.div`
  margin-left: 84px;
  margin-top: 41px;
  width: 711px;
  height: 35px;
  border-bottom: 1px solid var(--white-two);
  padding-left: 56px;
  padding-bottom: 21px;
`;
export const DepItem = styled.button`
  margin-right: 89px;
  width: auto;

  text-decoration: none;
  font-size: 24px;
  font-family: NanumSquareB;
  color: var(--white-two);

  background: none;
  border: none;
  cursor: pointer;

  outline: none;

  &:hover {
    color: var(--greenish-teal);
  }
`;
