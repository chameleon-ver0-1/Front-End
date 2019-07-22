import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./makeissue.style.css";

export class MakeIssue extends Component {
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
                <li>a</li>
                <li>b</li>
                <li>c</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="issue-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="issue-list">
                <li>x</li>
                <li>y</li>
                <li>z</li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </Modal>
    );
  }
}

export default MakeIssue;
