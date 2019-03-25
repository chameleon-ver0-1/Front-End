import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";

import { Droppable } from "react-beautiful-dnd";

import styled from "styled-components";
const Container = styled.div`
  margin-right: 20px;
  width: 238px;
  height: 589px;

  display: flex;
  flex-direction: column;
`;
const ItemList = styled.div`
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
export class IssueBox extends Component {
  render() {
    const { column, count, tasks } = this.props;

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
              {tasks.map((task, index) => (
                <IssueItem key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </ItemList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default IssueBox;
