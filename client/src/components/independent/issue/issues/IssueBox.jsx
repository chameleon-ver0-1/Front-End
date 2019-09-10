import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";
import IssueAdd from "../issueAdd/IssueAdd";
import { Droppable } from "react-beautiful-dnd";
import FreeScrollBar from "react-free-scrollbar";
import {
  Container,
  ItemList,
  IssuesTitle,
  IssuesTitleStatus,
  IssuesTitleCount
} from "./issues.style";

export class IssueBox extends Component {
  render() {
    const { column, count, tasks, isTodos } = this.props;

    //TODO: backgroundColor: $(props.isDraggingOver ? 'skyblue':'white');

    return (
      <Container>
        <IssuesTitle>
          {/* <IssuesTitleStatus>{status}</IssuesTitleStatus> */}
          <IssuesTitleCount>{count}</IssuesTitleCount>
        </IssuesTitle>

        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <ItemList
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
