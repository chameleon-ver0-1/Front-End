/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 화상회의 홈에서 화상회의를 개설하는 팝업창 화면 구성
 */

import React, { Component } from "react";
import "./makeroom.style.css";
import Modal from "react-responsive-modal";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import MakeIssue from "../makeIssue/MakeIssue";
import searchissue from "../../../../assets/conference/searchissue.png";
import DatePicker from "react-datepicker";
import BigDatePicker from "./BigDatePicker";
import SmallDatePicker from "./SmallDatePicker";
import TagsTopic from "./TagsTopic";
import TagsPeople from "./TagsPeople";
import * as service from "../../../../services/ConferenceRoomService";
import { withRouter } from "react-router-dom";

class MakeRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomTitle: "none",
      tags: [],
      open: false,
      title: "",
      selectedDate: "", //FIXME: 임시로 박아놓음
      topic_tag: [],
      people_tag: []
    };
  }

  /* 이슈에서 가져오기 */
  onOpenModal = () => {
    this.setState({ open: true, title: "토픽을 가져올 이슈를 선택하세요" });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  /* 날짜 */
  handleChange = date => {
    this.setState({
      startDay: date
    });
  };
  handleChange2 = date => {
    this.setState({
      startDate: date
    });
  };

  myCallback = dataFromChild => {
    this.setState({ topic_tag: dataFromChild });
  };

  myCallback2 = dataFromChild => {
    this.setState({ people_tag: dataFromChild });
  };

  gotoVideo = () => {
    //회의실 개설하기

    console.log(this.state.roomTitle);
    console.log(this.state.topic_tag);
    console.log(
      this.state.startDay.toDateString() +
        " " +
        this.state.startDate.toTimeString()
    );
    //console.log(this.state.startDate.toTimeString());
    //console.log(this.state.selectedDate);
    console.log(this.state.people_tag);

    service
      .confCreate(
        localStorage.getItem("projectId"),
        this.state.roomTitle,
        this.state.topic_tag,
        this.state.startDay.toDateString() +
          " " +
          this.state.startDate.toTimeString(),
        this.state.people_tag
      )
      .then(
        res => {
          this.props.history.push(`/room/${this.state.roomTitle}`);
          console.log("회의실 개설 성공");
        },
        err => {
          console.log("회의실 개설 실패");
          console.log(err);
        }
      );
  };

  render() {
    const { open, title, onCloseModal } = this.props;
    const { tags, suggestions } = this.state;
    // const classes = useStyles;

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="makeroomdiv">
          <div className="roomtitle">{title}</div>
          <div className="row-div">
            <div className="roomtitle2">방제목</div>
            <input
              className="roominput"
              placeholder="방 제목을 입력하세요"
              onChange={e => {
                this.setState({
                  roomTitle: e.target.value
                });
              }}
            />
          </div>

          <div className="row-div">
            <div className="roomtitle2">메인 토픽</div>
            <div className="tagdiv">
              <TagsTopic callbackFromParent={this.myCallback} />

              <button className="getissue" onClick={this.onOpenModal}>
                <img src={searchissue} className="getissueimg" />
                이슈에서 가져오기
              </button>
            </div>
          </div>

          <MakeIssue
            open={this.state.open}
            title={this.state.title}
            onCloseModal={this.onCloseModal}
          />

          <div className="row-div">
            <div className="roomtitle2">시작 시간</div>
            <DatePicker
              customInput={<BigDatePicker />}
              selected={this.state.startDay}
              onChange={this.handleChange}
              minDate={new Date()}
              relativeSize={true}
              dateFormat="yyyy/MM/dd"
            />
            <DatePicker
              customInput={<SmallDatePicker />}
              selected={this.state.startDate}
              onChange={this.handleChange2}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              timeCaption="Time:"
              relativeSize={true}
            />
          </div>

          <div className="row-div">
            <div className="roomtitle2">참여자</div>
            <div className="tag-inline-div">
              <TagsPeople callbackFromParent={this.myCallback2} />
            </div>
          </div>

          <div className="row-div2">
            {/* <Link to={`/room/${this.state.roomTitle}`} className="linklogin"> */}
            <button className="makebutton" onClick={this.gotoVideo}>
              개설
            </button>
            {/* </Link> */}

            <button className="cancelbutton" onClick={onCloseModal}>
              취소
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withRouter(MakeRoom);
