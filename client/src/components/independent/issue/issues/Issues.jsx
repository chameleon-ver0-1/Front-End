/**
 * 담당자:조윤영
 * [OUTLINE]
 * 이슈 화면의 진행상황별 리스트를 생성하고 카드의 상화/좌우 이동을 관리하는 컴포넌트 파일
 */
import React, { Component, Fragment } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import InitialData from "../testItem-data";
import IssueBox from "./IssueBox";
import { Issue3, IssueBig } from "./issues.style";
import * as service from "../../../../services/IssueService";

export class Issues extends Component {
  state = { taskLists: [], taskItemLists: [] };

  componentDidMount() {
    service.getIssueList().then(
      res => {
        const {
          columnData: taskLists,
          taskData: taskItemLists
        } = res.data.data;
        this.setState({ taskLists, taskItemLists });
        console.log("taskList 0", this.state.taskLists[0]);
      },
      err => {
        console.log("이슈 아이템 가져오기 실패");
      }
    );
  }
  onDragStart = () => {
    // document.childNodes.backgroundColor = "orange";
  };

  onDragEnd = result => {
    const { taskLists, taskItemLists } = this.state;
    // const issueName = document.querySelector(".issues-body");
    // issueName.style.color = "inherit";
    // issueName.style.backgroundColor = "inherit";
    //TODO:reorder our column(열)
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = taskLists[source.droppableId];
    const finish = taskLists[destination.droppableId];
    if (start === finish) {
      const newItemIds = Array.from(start.taskIds);
      newItemIds.splice(source.index, 1); //드래그하는 해당 카드를 배열에서 삭제
      newItemIds.splice(destination.index, 0, draggableId); //드래그를 끝낸 위치에 드래그하는 카드를 추가한다.
      const newColumn = {
        ...start,
        taskIds: newItemIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.taskLists,
          [newColumn.id]: newColumn
        }
      };
      this.setState({ taskLists: newState });
      return;
    }
    //Moving from one list to another
    const startItemIds = Array.from(start.taskIds);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startItemIds
    };
    const finishItemIds = Array.from(finish.taskIds);
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishItemIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.taskLists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState({ taskLists: newState });
    return;
  };

  render() {
    return (
      <IssueBig>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          {/* FIXME: 지운오빠 여기야 */}
          {Object.keys(this.state.taskLists).map(columnId => {
            const column = this.state.taskLists[columnId];
            const tasks = [];
            column.taskIds.forEach(id => {
              tasks.push(
                ...this.state.taskItemLists.filter(item => item._id === id)
              );
            });

            return (
              <Issue3 key={column._id}>
                <IssueBox column={column} tasks={tasks} count={tasks.length} />
              </Issue3>
            );
          })}
        </DragDropContext>
      </IssueBig>
    );
  }
}

export default Issues;
