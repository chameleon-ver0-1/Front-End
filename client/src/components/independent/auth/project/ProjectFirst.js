import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./projectfirst.style.css";
import { TagsProjectRoles } from "./TagsProjectRoles";
import * as service from "../../../../services/ProjectService";

export class ProjectFirst extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectTitle: "",
      projectLeader: "",
      projectParticipants: "",
      roles_tag: [],

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
  }

  projectNo() {
    //프로젝트 거절
  }

  render() {
    const {
      open,
      title,
      onCloseModal,
      id,
      projectTitle,
      projectLeader,
      projectParticipants,
      projectData
    } = this.props;

    return (
      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
          id={id}
          projectData={projectData}
          center
        >
          <div className="projectfirst-div">
            <div className="projectfirst-title">{projectTitle}</div>
            <div className="projectfirst-content">
              <div className="projectfirst-row">
                <div className="projectfirst-title2">개설자</div>
                <div className="projectfirst-content2-div">
                  {Object.keys(projectLeader).map(projectId => {
                    const projectL = projectLeader.name;
                    return (
                      <div className="projectfirst-content2">{projectL}</div>
                    );
                  })}
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
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectFirst;
