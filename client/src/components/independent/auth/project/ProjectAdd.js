import React, { Component } from "react";
import "./projectadd.style.css";
import { Link } from "react-router-dom";
import TagsProjectPeople from "./TagsProjectPeople";

export class ProjectAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: ""
    };
  }

  addproject = () => {
    console.log(this.state.projectname);
  };

  render() {
    return (
      <div className="inner-container4">
        <div className="header3">프로젝트 개설</div>
        <div className="p-explanation">
          프로젝트를 개설하게 되면, 해당 프로젝트의 담당자가 되며
        </div>
        <div className="p-explanation">
          이후 프로젝트의 수정 및 삭제는 본인만 가능합니다.
        </div>

        <div className="p-input-container">
          <div className="p-green-message">* 문항은 필수 입력사항 입니다.</div>
          <div className="p-input-row">
            <div className="p-text">프로젝트명</div>
            <div className="star2">*</div>
            <input
              type="text"
              className="p-input"
              onChange={e => {
                this.setState({
                  projectname: e.target.value
                });
              }}
            />
          </div>

          <div className="p-input-row">
            <div className="p-text">소속 부서</div>
            <input
              type="text"
              className="p-input"
              placeholder="프로젝트 내 부서를 추가하세요"
            />
          </div>

          <div className="p-input-row">
            <div className="p-text">URL</div>
            <div className="star2">*</div>
            <input
              type="text"
              className="p-input"
              placeholder="/chameleon.co.kr"
            />
          </div>

          <div className="p-input-row">
            <div className="p-text">참여자</div>
            <TagsProjectPeople />
          </div>
        </div>

        <Link to="/auth/projectList">
          <button className="p-add-btn" onClick={this.addproject}>
            개설하기
          </button>
        </Link>
      </div>
    );
  }
}

export default ProjectAdd;
