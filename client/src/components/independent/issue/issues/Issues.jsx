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
        console.log("*********************************");
        console.log("task 요청 성공");
        console.log("*********************************");

        this.setState({ taskLists: res.data.data.columnData });
        console.log(this.state.taskLists);
        this.setState({ taskItemLists: res.data.data.taskData });
        console.log(this.state.taskItemLists);
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
    const start = this.state.taskLists[source.droppableId];
    const finish = this.state.taskLists[destination.droppableId];
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
          sss
          {Object.keys(this.state.taskLists).map(columnId => {
            const column = this.state.taskLists[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.taskItemLists[taskId]
            );
            console.log("%%%%%%%%%%%%%%%%");
            console.log(column.status);
            console.log(column._id);
            console.log("%%%%%%%%%%%%%%%%");
            return (
              <Issue3>
                <IssueBox
                  key={column._id}
                  column={column}
                  tasks={tasks}
                  count="1"
                />
                sssssss
              </Issue3>
            );
          })}
          {/* {Object.keys(this.state.taskLists.columnData).map(columnId => {
            const column = this.state.taskLists.columnData[columnId];

            const tasks = column.taskIds.map(
              taskId => this.state.taskData[taskId]
            );
            return <div>ss</div>;
            return (
            <Issue3>
              <IssueBox
                // status={data.status}
                key={column.id}
                column={column}
                tasks={tasks}
                count={column.count}
                isTodos={column.isTodo}
              />
            </Issue3>
            );
          })} */}
        </DragDropContext>
      </IssueBig>
    );
  }
}

export default Issues;
