import React, { Component } from "react";

export class comments extends Component {
  render() {
    return (
      <div>
        <li>
          <p>
            <b>{this.props.name}</b>
            {this.props.body}
          </p>
        </li>
      </div>
    );
  }
}

export default comments;
