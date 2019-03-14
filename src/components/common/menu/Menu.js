import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class menu extends Component {
  render() {
    return (
      <div class="menu-container">
        <Link className="link-list" to="/">이슈관리</Link>
        <Link className="link-list" to="/">회의실</Link>
        <Link className="link-list" to="/">회의록</Link>
      </div>
    )
  }
}

export default menu
