import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as service from "../../../../services/ProjectService";
import {
  ProjectListContainer,
  ProjectListHeader,
  ProjectListItemContainer,
  ProjectListItemBtn,
  ProjectListDiv
} from "./projectlist.style";

export class ProjectList extends Component {
  state = { projectLists: [] };
  componentDidMount() {
    service.getProjectList().then(
      res => {
        this.setState({ projectLists: res.data.data });
      },
      err => {
        console.log("프로젝트 리스트 가져오기 실패");
      }
    );
  }
  render() {
    return (
      <ProjectListContainer>
        <ProjectListHeader>참여 중인 프로젝트</ProjectListHeader>
        <ProjectListDiv>현재 참여 중인 프로젝트 입니다.</ProjectListDiv>
        <ProjectListDiv>접근을 원하시는 프로젝트를 선택하세요.</ProjectListDiv>
        <ProjectListItemContainer>
          {Object.keys(this.state.projectLists).map(projectListId => {
            const projectlist = this.state.projectLists[projectListId];

            return (
              <ProjectListItemBtn to="/home/issue">
                {projectlist.projectName}
              </ProjectListItemBtn>
            );
          })}
        </ProjectListItemContainer>
      </ProjectListContainer>
    );
  }
}

export default ProjectList;
