import React, { Component } from "react";
import "./projectmanage.style.css";
import { Link, withRouter } from "react-router-dom";
import ProjectFirst from "./ProjectFirst";

export class ProjectManage extends Component {
  state = {
    open: false,
    title: ""
  };

  submitRegister(e) {}

  onOpenModal = () => {
    //참여 중인 프로젝트 첫 판단
    this.setState({ open: true, title: "회의 개설하기" });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="inner-container3">
        <div className="header3">프로젝트 관리</div>
        <div className="p-explanation">
          지금 바로 새로운 프로젝트를 개설하거나,
        </div>
        <div className="p-explanation">
          참여하고 있는 프로젝트를 확인해보세요!
        </div>

        <div className="pa-btn-div">
          <Link to="/auth/projectAdd">
            <button className="project-btn">새 프로젝트 개설하기</button>
          </Link>

          {/* <Link to="/auth/projectList"> */}
          <button className="project-btn" onClick={this.onOpenModal}>
            참여 중인 프로젝트 확인하기
          </button>
          <ProjectFirst
            open={this.state.open}
            title={this.state.title}
            onCloseModal={this.onCloseModal}
          />
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectManage);
