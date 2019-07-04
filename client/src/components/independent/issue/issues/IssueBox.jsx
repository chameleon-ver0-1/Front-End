import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";
import IssueAdd from "../issueAdd/IssueAdd";
import { Droppable } from "react-beautiful-dnd";
import FreeScrollBar from "react-free-scrollbar";
import styled from "styled-components";
const Container = styled.div`
  margin-right: 25px;
  width: 249px;
  height: 610px;
  display: flex;
  flex-direction: column;
`;
const ItemList = styled.div`
  // background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
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
        <IssueAdd isShow={isTodos} />
      </Container>
    );
  }
}

export default IssueBox;
