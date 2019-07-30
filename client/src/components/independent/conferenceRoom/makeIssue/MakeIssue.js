import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./makeissue.style.css";
import InitialData from "../../issue/testItem-data";

export class MakeIssue extends Component {
  state = InitialData;

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

          {/* TODO: issue 데이터 가져오기 */}
          {/* TODO: 선택한 데이터 태그로 받아오기 */}
          <Tabs>
            <TabList>
              <Tab>TODO</Tab>
              <Tab>DOING</Tab>
              <Tab>DONE</Tab>
            </TabList>

            <TabPanel>
              <ul className="issue-list">
                <li className="issue-item" onClick={this.issueClicked}>
                  a
                </li>
                <li className="issue-item">b</li>
                <li className="issue-item">c</li>
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
            <button className="choose-issue">선택</button>
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
