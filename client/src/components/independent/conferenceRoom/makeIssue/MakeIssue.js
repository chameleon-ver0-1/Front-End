import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./makeissue.style.css";

export class MakeIssue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: "",
      tags: []
    };
  }

  issueClicked = e => {
    this.setState(
      {
        issue: e
      },
      () => {
        console.log(this.state.issue);
        //this.props.callbackFromParent(this.state.issue);
      }
    );
  };

  onSelectIssue = () => {
    const { tags, issue } = this.state;
    this.props.callbackFromParent(issue);
    this.props.onCloseModal();
  };

  render() {
    const { open, title, onCloseModal } = this.props;

    return (
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{ overlay: { background: "#cccccc00" } }}
      >
        <div className="makeroomdiv">
          <div className="roomtitle">{title}</div>

          <Tabs>
            <TabList>
              <Tab>TODO</Tab>
              <Tab>DOING</Tab>
              <Tab>DONE</Tab>
            </TabList>
            {/* <div>
              {Object.keys(this.state.initialData.columns).map(columnId => {
                const column = this.state.initialData.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => this.state.initialData.tasks[taskId]
                );

                return (

                );
              })}
            </div> */}

            <TabPanel>
              <ul className="issue-list">
                <li
                  className="issue-item"
                  onClick={this.issueClicked.bind(
                    this,
                    "a"
                  )} /* "a"쓴 부분이 ""값을 넘긴다는 뜻. 데이터 받아올때는 "변수.값"의 형태로 */
                >
                  a
                </li>
                <li
                  className="issue-item"
                  onClick={this.issueClicked.bind(
                    this,
                    "b"
                  )} /* "a"쓴 부분이 ""값을 넘긴다는 뜻. 데이터 받아올때는 "변수.값"의 형태로 */
                >
                  b
                </li>
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="issue-list">
                <li className="issue-item">1</li>
                <li className="issue-item">2</li>
                <li className="issue-item">3</li>
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="issue-list">
                <li className="issue-item">x</li>
                <li className="issue-item">y</li>
                <li className="issue-item">z</li>
              </ul>
            </TabPanel>
          </Tabs>
          <div className="issue-buttons-div">
            <button className="choose-issue" onClick={this.onSelectIssue}>
              선택
            </button>
            <button className="cancel-issue" onClick={onCloseModal}>
              취소
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default MakeIssue;
