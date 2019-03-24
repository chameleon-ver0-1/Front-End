import React, { Component } from "react";
import { ConferenceRoomDetail } from './ConferenceRoomDetail';

export class ConferenceRoom extends Component {

  render() {
    return (
      <div>
        <ConferenceRoomDetail />
        <ConferenceRoomDetail />
        <br />
      </div>
    );
  }
}

export default ConferenceRoom;
