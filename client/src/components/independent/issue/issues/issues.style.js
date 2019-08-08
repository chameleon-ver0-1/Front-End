import styled from "styled-components";

export const Issue3 = styled.div`
  margin-top: 43px;
  margin-left: 22px;
`;

export const IssueBig = styled.div`
  display: flex;
`;

export const Container = styled.div`
  margin-right: 25px;
  width: 256px;
  height: 550px;
  display: flex;
  flex-direction: column;
`;
export const ItemList = styled.div`
  --box-main-color: rgba(0, 0, 0, 0.1);
  --box-shadow-h-offset: 0px;
  --box-shadow-v-offset: 1px;
  --box-shadow-blur: 5px;
  flex-grow: 1;

  margin-top: 66px;

  width: 256px;
  height: 531px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
  var(--box-shadow-blur) var(--box-main-color);
  // background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
export const IssuesTitle = styled.div`
  display: flex;

  justify-content: center;
  width: 238px;
  height: 20px;
  display: flex;
  font-family: NanumSquareB;

  text-align: center;
`;
export const IssuesTitleStatus = styled.div`
  font-size: 22.5px;
  color: var(--light-black);
  font-family: NanumSquareB;
`;
export const IssuesTitleCount = styled.div`
  font-size: 22.5px;
  color: var(--white-two);
`;
