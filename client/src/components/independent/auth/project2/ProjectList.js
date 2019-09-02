import React, { Component } from "react";
import "./projectlist.style.css";
import { Link } from "react-router-dom";
import * as service from "../../../../services/ProjectService";

export class ProjectList extends Component {
  componentDidMount() {
    service.getProjectList().then(
      res => {},
      err => {
        console.log("프로젝트 리스트 가져오기 실패");
      }
    );
  }
  render() {
    return (
      <div className="inner-container3">
        <div className="header3">참여 중인 프로젝트</div>
        <div className="p-explanation">현재 참여 중인 프로젝트 입니다.</div>
        <div className="p-explanation">
          접근을 원하시는 프로젝트를 선택하세요.
        </div>

        <div className="pl-btn-div">
          <Link to="/home/issue">
            <button className="project-btn">Project1</button>
          </Link>

          <Link to="/home/issue">
            <button className="project-btn">Past Project1</button>
          </Link>

          <Link to="/home/issue">
            <button className="project-btn">Past Project2</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectList;
