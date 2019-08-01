import styled from "styled-components";
import { style } from "glamor";

/*IssueDetailDialog.css */
export const PopupContainer = styled.div`
  width: 663px;
  height: 448px;
  background: white;
  box-shadow: 3 0 7 rgba(0, 0, 0, 0.2);
  padding-top: 29px;
  padding-left: 65px;
`;

export const Reservation = styled.div`
  font-size: 14px;
  color: var(--greenish-teal);
`;
export const IssueTitle = styled.div`
  color: var(--light-black);
  font-size: 20px;
  cursor: pointer;
`;
export const Line = styled.div`
  width: 2px;
  height: 9px;
  background: var(--pinkish-grey);
  // margin-left: 7px;
`;
export const CreatedBy = styled.div`
  font-size: 12px;
  color: var(--pinkish-grey);
  margin-left: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DividedLine = styled.div`
  margin-top: 11px;
  width: 587px;
  height: 2px;
  background: var(--white-five);
`;
export const IssueContent = styled.div`
  font-size: 14px;
  color: var(--brownish-grey);
  width: 340px;
  height: auto;
  margin-top: 12px;
`;
export const ContentButtons = styled.div`
  width: 244px;
  height: 63px;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-end;
`;

export const ContentButton = styled.button`
  width: 42px;
  height: 16px;
  border: 1px solid var(--pinkish-grey);
  border-radius: 5px;
  font-size: 8px;
  color: var(--pinkish-grey);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 4px;
`;
export const StatusBadge = styled.button`
  width: 42px;
  height: 16px;
  border: 1px solid var(--greenish-teal);
  border-radius: 5px;
  font-size: 10px;
  color: var(--greenish-teal);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentPanel = styled.div`
  background: var(--white-three);
  width: 573px;
  height: 230px;
  margin-top: 8px;
  padding-top: 17px;
  padding-left: 14px;
`;

export const SDividedLine = styled.div`
  margin-top: 11px;
  width: 555px;
  height: 2px;
  background: var(--white-five);
`;

export const CommentInput = styled.input`
  width: 471px;
  height: 29px;
  background: none;
  border: none;
  font-size: 10px;
  outline: none;
`;
export const CommentInputBorder = styled.div`
  width: 471px;
  height: 40px;
  border: solid 1px var(--white-five);
  margin-left: 4px;
  padding-left: 10px;
  background: white;

  display: flex;
  align-items: center;
`;
export const RowWithMargin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
export const CommentUpdateBtn = styled.button`
  width: 36px;
  height: 40px;
  background: white;
  border: 1px solid var(--white-five);
  color: var(--brownish-grey);
  margin-left: 2px;
  font-size: 10px;
`;
export const Name = styled.div`
  font-size: 12px;
  color: var(--light-black);
`;
export const CommentContent = styled.div`
  font-size: 10px;
  color: var(--brownish-grey);
`;

/*IssueItem.css */

export const Container = styled.div`
  border: ${props =>
    props.isDragging ? " solid 1px var(--greenish-teal) " : "none"};

  padding-top: 16px;
  padding-left: 15px;
  height: 73px;
  width: 218px;
  --box-main-color: rgba(0, 0, 0, 0.15);
  --box-shadow-h-offset: 0.8px;
  --box-shadow-v-offset: 0.6px;
  --box-shadow-blur: 3px;
  width: 212px;
  height: 71px;

  margin-top: 19px;
  margin-left: 15px;

  border-radius: 10px;

  background: var(--light-sage);
  opacity: 50%;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);
`;

export const IssueTitles = styled.button`
  width: auto;
  height: auto;

  display: flex;

  overflow: hidden;

  font-size: 16.5px;

  color: var(--light-black);
  background: none;
  border: none;
  outline: none;
`;
export const IssueContents = styled.div`
  margin-top: 6px;
  font-size: 12.5px;
  color: var(--greenish-teal);
`;

export const IssueItemHeader = styled.div`
  display: flex;

  width: 202px;
  height: 28px;
`;
export const IssueItemControl = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 202px;
  height: 17px;
`;

export const IssueItemDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 202px;
  height: 12px;
`;
export const CommentCount = styled.div`
  font-size: 12.5px;
  color: var(--brownish-grey);
  margin-left: 5px;
  margin-right: 10px;
`;
