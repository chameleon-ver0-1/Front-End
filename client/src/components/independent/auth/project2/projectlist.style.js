import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectListContainer = styled.div`
  margin: 60px auto;
  width: 313px;
`;
const ProjectListHeader = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  font-family: NanumSquareB;
`;
const ProjectListItemContainer = styled.div`
  margin-top: 40px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProjectListItemBtn = styled.button`
  width: 313px;
  height: 41px;
  color: var(--greenish-teal);
  border-radius: 18.8px;
  border: solid 1px var(--greenish-teal);
  font-size: 16px;
  font-family: NanumSquareB;
  outline: none;
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--greenish-teal);
    color: white;
  }
`;
const ProjectListDiv = styled.div`
  font-size: 14px;
  color: var(--brownish-grey);
  font-family: NanumSquareB;
  width: 300px;
  display: flex;
  justify-content: center;
`;
export {
  ProjectListContainer,
  ProjectListHeader,
  ProjectListItemContainer,
  ProjectListItemBtn,
  ProjectListDiv
};
