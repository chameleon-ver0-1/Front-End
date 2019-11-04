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
    const { column, count, tasks, droppableId } = this.props;

    //TODO: backgroundColor: $(props.isDraggingOver ? 'skyblue':'white');

    return (
      <Container>
        <IssuesTitle>
          <IssuesTitleStatus>{column.status}</IssuesTitleStatus>

          <IssuesTitleCount>{count}</IssuesTitleCount>
        </IssuesTitle>
        <Droppable droppableId={column.status}>
          {(provided, snapshot) => (
            <ItemList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <FreeScrollBar>
                {tasks.map((task, index) => {
                  return (
                    <IssueItem
                      status={column.status}
                      key={task._id}
                      task={task}
                      taskId={index}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </FreeScrollBar>
            </ItemList>
          )}
        </Droppable>
        <IssueAdd
          key={column._id}
          id="addIssue"
          status={column.status}
          currentDep={this.props.currentDep}
        />
      </Container>
    );
  }
}

export default IssueBox;
