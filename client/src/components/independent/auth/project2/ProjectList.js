import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectFirst from "../project/ProjectFirst";
import * as service from "../../../../services/ProjectService";
import {
  ProjectListContainer,
  ProjectListHeader,
  ProjectListItemContainer,
  ProjectListItemBtn,
  ProjectListDiv
} from "./projectlist.style";

export class ProjectList extends Component {
  state = {
    projectLists: [],
    open: false,
    title: "",
    id: "",
    projectTitle: "",
    projectLeader: "",
    projectParticipants: []
  };
  componentDidMount() {
    service.getProjectList().then(
      res => {
        this.setState({ projectLists: res.data.data });
        console.log(res.data.data);
      },
      err => {
        console.log("프로젝트 리스트 가져오기 실패");
      }
    );
  }

  moveToHome = e => {
    //참여 중인 프로젝트 첫 판단 해야하는 위치

    const projectName = e.target.name;
    const projectId = e.target.id;
    console.log(projectId);

    service.projectFirst(projectId).then(
      res => {
        if (res.data.data === false) {
          //프로젝트 처음 아닐 때
          localStorage.setItem("projectName", projectName);
          localStorage.setItem("projectId", projectId);
          this.props.history.push(`/home/issue/${projectId}`);
        } else {
          //프로젝트가 처음일 때
          console.log("첫 판단 성공");
          this.setState({
            id: projectId,
            open: true,
            title: "회의 개설하기",
            projectTitle: res.data.data.projectName,
            projectLeader: res.data.data.projectLeader.name,
            projectParticipants: res.data.data.projectParticipants
          });
          localStorage.setItem("projectName", projectName);
          localStorage.setItem("projectId", projectId);
          console.log(
            "projectId",
            localStorage.getItem("projectId", projectId)
          );
          this.props.history.push(`/auth/projectList/${projectId}`);
        }
      },
      err => {
        console.log(err);
      }
    );
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <ProjectListContainer>
        <ProjectListHeader>참여 중인 프로젝트</ProjectListHeader>
        <ProjectListDiv>현재 참여 중인 프로젝트 입니다.</ProjectListDiv>
        <ProjectListDiv>접근을 원하시는 프로젝트를 선택하세요.</ProjectListDiv>
        <ProjectListItemContainer>
          {Object.keys(this.state.projectLists).map(projectListId => {
            const projectlist = this.state.projectLists[projectListId];

            console.log("key", projectlist.id);
            return (
              <div key={projectlist.id}>
                <ProjectListItemBtn
                  id={projectlist.id}
                  name={projectlist.name}
                  onClick={this.moveToHome}
                >
                  {projectlist.name}
                </ProjectListItemBtn>
                <ProjectFirst
                  key={projectlist.id}
                  open={this.state.open}
                  title={this.state.title}
                  onCloseModal={this.onCloseModal}
                  id={this.state.id}
                  projectTitle={this.state.projectTitle}
                  projectLeader={this.state.projectLeader}
                  projectParticipants={this.state.projectParticipants}
                ></ProjectFirst>
              </div>
            );
          })}
        </ProjectListItemContainer>
      </ProjectListContainer>
    );
  }
}

export default ProjectList;
