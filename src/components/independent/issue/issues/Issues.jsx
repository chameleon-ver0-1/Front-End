import React, { Component, Fragment } from "react";

import InitialData from "../testItem-data";

import IssueAdd from "../issueAdd";
import "./issues.style.css";

import IssueBox from "./IssueBox";

import { DragDropContext } from "react-beautiful-dnd";

export class Issues extends Component {
  state = InitialData;

  onDragStart = () => {
    const issueName = document.querySelector(".issueName");
    issueName.style.color = "orange";
    issueName.style.transition = "background-color";
    // document.body.style.color = "orange";
  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    const issueName = document.querySelector(".issueName");
    issueName.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };
  onDragEnd = result => {
    const issueName = document.querySelector(".issueName");
    issueName.style.color = "inherit";
    issueName.style.backgroundColor = "inherit";

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

    const column = this.state.columns[source.droppableId];
    const newItemIds = Array.from(column.taskIds);
    newItemIds.splice(source.index, 1);
    newItemIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newItemIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.colums,
        [newColumn.id]: newColumn
      }
    };

    this.setState(newState);
  };

  render() {
    return (
      <>
        {Object.keys(this.state.columns).map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return (
            <DragDropContext
              onDragStart={this.onDragStart}
              onDragUpdate={this.onDragUpdate}
              onDragEnd={this.onDragEnd}
            >
              <div className="issues-3">
                <IssueBox
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  count="2"
                />
              </div>
            </DragDropContext>
          );
        })}
      </>
    );
  }
}

export default Issues;
