import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./projectfirst.style.css";
import { TagsProjectRoles } from "./TagsProjectRoles";
import * as service from "../../../../services/ProjectService";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const NOPEOPLE = styled.div`
  font-size: 11px;
  color: var(--greenish-teal);
  margin-left: 210px;
  display: none;
`;

export class ProjectFirst extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectTitle: "",
      projectLeader: "",
      projectParticipants: "",
      roles_tag: "",
      nopeople: true,
      id: ""
    };

    this.projectOk = this.projectOk.bind(this);
    this.projectNo = this.projectNo.bind(this);
  }

  myCallback = dataFromChild => {
    this.setState({ roles_tag: dataFromChild });
  };

  projectOk() {
    //프로젝트 참여
    const projectId = this.props.id;
    const projectName = this.props.projectTitle;
    console.log(projectId);
    console.log("프로젝트 첫 판단 참여", this.state.roles_tag[0]);
    localStorage.setItem("myRole", this.state.roles_tag);
    console.log(this.state.roles_tag + "+++++++++");
    service.projectOK(projectId, this.state.roles_tag.toString()).then(
      res => {
        console.log("프로젝트 참여!");

        //TODO: 참여자 없으면 예외처리
        if (this.state.roles_tag == "") {
          document.getElementById("nopeople").style.display = this.state
            .nopeople
            ? "inline"
            : "none";
        }
        localStorage.setItem("projectName", projectName);
        localStorage.setItem("projectId", projectId);
        this.props.history.push(`/home/issue/${projectId}`);
      },
      err => {
        console.log(err);
      }
    );
  }

  projectNo() {
    //프로젝트 거절
    const projectId = this.props.id;
    service.projectNO(projectId).then(
      res => {
        console.log("프로젝트 거절!");
        this.props.onCloseModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    const {
      open,
      title,
      onCloseModal,
      id,
      projectTitle,
      projectLeader,
      projectParticipants
    } = this.props;

    return (
      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
          id={id}
          styles={{
            overlay: { background: "#F2000000" }
          }}
          center
        >
          <div className="projectfirst-div">
            <div className="projectfirst-title">{projectTitle}</div>
            <div className="projectfirst-content">
              <div className="projectfirst-row">
                <div className="projectfirst-title2">개설자</div>
                <div className="projectfirst-content2-div">
                  <div className="projectfirst-content2">{projectLeader}</div>
                </div>
              </div>

              <div className="projectfirst-row2">
                <div className="projectfirst-title2">참여자</div>
                <div className="projectfirst-content2-div">
                  {Object.keys(projectParticipants).map(projectId => {
                    const projectP = projectParticipants[projectId].name;
                    return (
                      <div className="projectfirst-content2">{projectP}</div>
                    );
                  })}
                </div>
              </div>

              <div className="projectfirst-row">
                <div className="projectfirst-title2">나의 역할</div>
                <div className="projectfirst-content2-div">
                  <TagsProjectRoles
                    callbackFromParent={this.myCallback}
                    id={id}
                  />
                </div>
              </div>
            </div>
            <div className="projectfirst-btn">
              <button className="projectfirst-ok" onClick={this.projectOk}>
                참여
              </button>
              <button className="projectfirst-no" onClick={this.projectNo}>
                거절
              </button>
            </div>
            <NOPEOPLE id="nopeople">참여자가 존재하지 않습니다.</NOPEOPLE>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ProjectFirst);
