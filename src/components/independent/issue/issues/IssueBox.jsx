import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";

import { Droppable } from "react-beautiful-dnd";

export class IssueBox extends Component {
  render() {
    const { column, count, tasks } = this.props;
    return (
      <div className="issues-box">
        <div className="issues-title">
          <p className="issues-title-status">{column.title}</p>
          <p className="issues-title-count">{count}</p>
        </div>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div className="issues-body" ref={provided.innerRef}>
              {tasks.map(task => (
                <IssueItem key={task.id} task={task} />
              ))}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default IssueBox;
