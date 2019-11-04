import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./makeissue.style.css";
import * as services from "../../../../services/IssueService";

export class MakeIssue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: "",
      tags: [],
      todo: [],
      doing: [],
      done: []
    };
  }

  componentDidMount() {
    services.getConferenceIssue(localStorage.getItem("projectId")).then(
      res => {
        //console.log(res.data.data);
        this.setState({
          todo: res.data.data.TODO,
          doing: res.data.data.DOING,
          done: res.data.data.DONE
        });
      },
      err => {
        console.log(err);
      }
    );
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

            <TabPanel>
              <ul className="issue-list">
                {Object.keys(this.state.todo).map(id => {
                  const list1 = this.state.todo[id];
                  return (
                    <li
                      key={id}
                      className="issue-item"
                      style={{ cursor: "pointer" }}
                      onClick={this.issueClicked.bind(
                        this,
                        list1
                      )} /* "a"쓴 부분이 ""값을 넘긴다는 뜻. 데이터 받아올때는 "변수.값"의 형태로 */
                    >
                      {list1}
                    </li>
                  );
                })}
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="issue-list">
                {Object.keys(this.state.doing).map(id => {
                  const list2 = this.state.doing[id];
                  return (
                    <li
                      key={id}
                      className="issue-item"
                      style={{ cursor: "pointer" }}
                      onClick={this.issueClicked.bind(
                        this,
                        list2
                      )} /* "a"쓴 부분이 ""값을 넘긴다는 뜻. 데이터 받아올때는 "변수.값"의 형태로 */
                    >
                      {list2}
                    </li>
                  );
                })}
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="issue-list">
                {Object.keys(this.state.done).map(id => {
                  const list3 = this.state.done[id];
                  return (
                    <li
                      className="issue-item"
                      style={{ cursor: "pointer" }}
                      onClick={this.issueClicked.bind(
                        this,
                        list3
                      )} /* "a"쓴 부분이 ""값을 넘긴다는 뜻. 데이터 받아올때는 "변수.값"의 형태로 */
                    >
                      {list3}
                    </li>
                  );
                })}
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
