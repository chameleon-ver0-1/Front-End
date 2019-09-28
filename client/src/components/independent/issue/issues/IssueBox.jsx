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

  componentDidMount() {
    service.getIssueList().then(
      res => {
        console.log("*********************************");
        console.log("task Item 요청 성공");
        console.log("*********************************");
        this.setState({ taskItemLists: res.data.data.taskData });
        console.log(this.state.taskItemLists);
      },
      err => {
        console.log("이슈 아이템 가져오기 실패");
      }
    );
  }
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
                  console.log("$$$$$$$$$$$$$$$");
                  console.log(task);
                  console.log("$$$$$$$$$$$$$$$");
                  const taskItem = this.state.taskItemLists.filter(function(
                    element
                  ) {
                    console.log(element._id);
                    return element._id === task;
                  });
                  return (
                    <IssueItem
                      key={taskItem._id}
                      task={taskItem}
                      index={index}
                    />
                  );
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
