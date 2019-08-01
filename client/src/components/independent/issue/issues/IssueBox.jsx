import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";
import IssueAdd from "../issueAdd/IssueAdd";
import { Droppable } from "react-beautiful-dnd";
import FreeScrollBar from "react-free-scrollbar";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 25px;
  width: 256px;
  height: 550px;
  display: flex;
  flex-direction: column;
`;
const ItemList = styled.div`
  // background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
/*
TODO:[0705]모달에서 가져온 데이터를 이용해 TODO에 issueItem의 맨 끝에 삽입 팔요
TODO:[0705]각 issueItem 선택 시 각 issueItem에 맞는 제목과 디테일 전달하여 새로운 다이얼로그 생성
*/

export class IssueBox extends Component {
  render() {
    const { column, count, tasks, isTodos } = this.props;

    //TODO: backgroundColor: $(props.isDraggingOver ? 'skyblue':'white');

    return (
      <Container>
        <div className="issues-title">
          <p className="issues-title-status">{column.title}</p>
          <p className="issues-title-count">{count}</p>
        </div>

        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <ItemList
              className="issues-body"
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <FreeScrollBar>
                {tasks.map((task, index) => (
                  <IssueItem key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </FreeScrollBar>
            </ItemList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default IssueBox;
