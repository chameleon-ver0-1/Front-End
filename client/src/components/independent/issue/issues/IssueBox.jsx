import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";
import IssueAdd from "../issueAdd/IssueAdd";
import { Droppable } from "react-beautiful-dnd";
import FreeScrollBar from "react-free-scrollbar";
import * as service from "../../../../services/IssueService";
import {
  Container,
  ItemList,
  IssuesTitle,
  IssuesTitleStatus,
  IssuesTitleCount
} from "./issues.style";

export class IssueBox extends Component {
  state = { taskItemLists: [] };

  render() {
    const { column, count, tasks } = this.props;

    //TODO: backgroundColor: $(props.isDraggingOver ? 'skyblue':'white');

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
                {tasks.map((task, index) => {
                  return <IssueItem key={task._id} task={task} index={index} />;
                })}
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
