import React, { Component } from "react";
import Modal from "react-responsive-modal";

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
        </div>
      </Modal>
    );
  }
}

export default MakeIssue;
