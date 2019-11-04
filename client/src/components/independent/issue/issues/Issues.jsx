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
  state = {
    taskLists: [],
    taskItemLists: [],
    currentDep: ""
  };
  componentWillReceiveProps(nextProps) {
    console.log("hi", nextProps.currentDep);
    if (nextProps != null) {
      service.postIssueList(nextProps.currentDep).then(
        res => {
          const {
            columnData: taskLists,
            taskData: taskItemLists
          } = res.data.data;
          console.log(
            "현재 보여주고 있는 이슈 리스트의 역할은",
            nextProps.currentDep
          );
          this.setState({ taskLists, taskItemLists });
          this.setState({ currentDep: nextProps.currentDep });
          console.log("초기 taskLists", this.state.taskLists);
        },
        err => {
          console.log("이슈 아이템 가져오기 실패");
        }
      );
    }
  }
  componentDidMount() {
    service.postIssueList(localStorage.getItem("myRole")).then(
      res => {
        const {
          columnData: taskLists,
          taskData: taskItemLists
        } = res.data.data;
        console.log(
          "현재 보여주고 있는 이슈 리스트의 역할은",
          localStorage.getItem("myRole")
        );
        this.setState({ taskLists, taskItemLists });
        this.setState({ currentDep: localStorage.getItem("myRole") });
        console.log("초기 taskLists", this.state.taskLists);
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
    const { taskLists, updateTaskList } = this.state;

    //TODO:reorder our column(열)
    const { destination, source, draggableId } = result;
    if (!destination) {
      //끌어다놓은 위치가 범위를 벗어날 경우,
      return;
    }
    if (
      //끌어다놓은 위치가 동일할 경우,
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = taskLists[source.droppableId];

    const finish = taskLists[destination.droppableId];

    //같은 상태공간에서 움직일 경우,열 내에서의 이동(행 간 이동)
    //이상 무
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
        taskLists: {
          ...this.state.taskLists,
          [newColumn.status]: newColumn
        }
      };

      this.setState({ taskLists: newState.taskLists });
      console.log("요청을 보내는 taskLists", this.state.taskLists);
      service.postUpdateIssue(newState.taskLists).then(res => {
        console.log("************이슈 업데이트****************");
        console.log(res.data);
        console.log("************이슈 업데이트****************");
      });
      return;
    }
    // //Moving from one list to another
    //열 간의 이동, 상태의 변화가 있을 경우,

    const startItemIds = Array.from(start.taskIds);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startItemIds
    };

    const finishItemIds = Array.from(finish.taskIds);
    console.log(destination.index);
    //FIXME: 봐봐 여기 destination.index처럼 draggableId도 숫자 index값을 가져야하는거야
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishItemIds
    };

    const newState = {
      ...this.state,
      taskLists: {
        ...this.state.taskLists,
        [newStart.status]: newStart,
        [newFinish.status]: newFinish
      }
    };
    this.setState({ taskLists: newState.taskLists });
    console.log("요청을 보내는 taskLists", newState.taskLists);
    service.postUpdateIssue(newState.taskLists).then(res => {
      console.log("************이슈 업데이트****************");
      console.log(res.data);
      console.log("************이슈 업데이트****************");
    });

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
          {/* FIXME:이 부분 다시 나눠서 보내줘야한다. */}
          {Object.keys(this.state.taskLists).map((columnId, index) => {
            const column = this.state.taskLists[columnId];

            const tasks = [];
            const tasksByDep = [];
            column.taskIds.forEach(id => {
              tasks.push(
                ...this.state.taskItemLists.filter(item => item._id === id)
              );
            });

            tasksByDep.push(
              tasks.filter(t => t.dept === this.props.currentDep)
            );
            return (
              <Issue3 key={column._id}>
                <IssueBox
                  droppableId={String(index)}
                  column={column}
                  tasks={tasksByDep[0]}
                  count={tasksByDep[0].length}
                  currentDep={this.state.currentDep}
                />
              </Issue3>
            );
          })}
        </DragDropContext>
      </IssueBig>
    );
  }
}

export default Issues;
