import React, { Component, Fragment } from "react";

import InitialData from "../testItem-data";

import IssueAdd from "../issueAdd";
import "./issues.style.css";

import IssueBox from "./IssueBox";

import { DragDropContext } from "react-beautiful-dnd";

export class Issues extends Component {
  state = InitialData;

  onDragStart = () => {
    // document.childNodes.backgroundColor = "orange";
  };

  onDragUpdate = update => {
    // const { destination } = update;
    // const opacity = destination
    //   ? destination.index / Object.keys(this.state.tasks).length
    //   : 0;
    // const issueName = document.querySelector(".issueItem-container");
    // issueName.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };
  onDragEnd = result => {
    // const issueName = document.querySelector(".issues-body");
    // issueName.style.color = "inherit";
    // issueName.style.backgroundColor = "inherit";

    //TODO:reorder our column
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

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newItemIds = Array.from(start.taskIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newItemIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
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
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
    return;
  };

  render() {
    return (
      <div className="issue-big">
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          {Object.keys(this.state.columns).map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );

            return (
              <div className="issues-3">
                <IssueBox
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  count={column.count}
                />
              </div>
            );
          })}
        </DragDropContext>
      </div>
    );
  }
}

export default Issues;
