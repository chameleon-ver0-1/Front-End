import React, { Component } from 'react'
import './makeroom.style.css'
import Modal from "react-responsive-modal";

class MakeRoom extends Component {
  render() {
    const { open, title, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div>
          <div>{title}</div>
        </div>
      </Modal>
    )
  }
}

export default MakeRoom
