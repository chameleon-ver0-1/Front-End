import React, { Component, Fragment } from "react";

import InitialData from "../testItem-data";

import IssueAdd from "../issueAdd";
import "./issues.style.css";

import IssueBox from "./IssueBox";

import { DragDropContext } from "react-beautiful-dnd";

export class Issues extends Component {
  state = InitialData;

  onDragEnd = result => {
    //TODO:reorder our column
  };

  render() {
    return (
      <>
        {Object.keys(this.state.columns).map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return (
            <DragDropContext onDragEnd={this.onDragEnd}>
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
