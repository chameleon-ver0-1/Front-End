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
    const { column, count, tasks } = this.props;

    //TODO: backgroundColor: $(props.isDraggingOver ? 'skyblue':'white');

    //FIXME: 지운오빠 여기야
    const taskItem = tasks.map((task, index) => (
      <IssueItem key={index} task={task} index={index} />
    ));
    return (
      <Container>
        <IssuesTitle>
          <IssuesTitleStatus>{column.status}</IssuesTitleStatus>

          <IssuesTitleCount>{count}</IssuesTitleCount>
        </IssuesTitle>

        <Droppable droppableId={column._id}>
          {(provided, snapshot) => (
            <ItemList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <FreeScrollBar>
                {taskItem}
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
