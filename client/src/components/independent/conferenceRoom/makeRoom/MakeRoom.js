/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 화상회의 홈에서 화상회의를 개설하는 팝업창 화면 구성
 */

import React, { Component } from "react";
import "./makeroom.style.css";
import Modal from "react-responsive-modal";
import MakeIssue from "../makeIssue/MakeIssue";
import searchissue from "../../../../assets/conference/searchissue.png";
import DatePicker from "react-datepicker";
import BigDatePicker from "./BigDatePicker";
import SmallDatePicker from "./SmallDatePicker";
import TagsTopic from "./TagsTopic";
import TagsPeople from "./TagsPeople";
import * as service from "../../../../services/ConferenceRoomService";
import * as service2 from "../../../../services/VideoService";

import { withRouter } from "react-router-dom";

class MakeRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomTitle: "none",
      tags: [],
      open: false,
      title: "",
      selectedDate: new Date().toISOString(), //현재 시간
      topic_tag: [],
      people_tag: [],
      isChecked: true,
      issue: [],
      issueCome: false
    };

    this.startNow = this.startNow.bind(this);
  }

  /* 이슈에서 가져오기 */
  onOpenModal = () => {
    this.setState({
      open: true,
      title: "토픽을 가져올 이슈를 선택하세요",
      issueCome: false
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  /* 날짜 */
  handleChange = date => {
    this.setState({
      startDay: date,
      issueCome: false
    });
  };
  handleChange2 = date => {
    this.setState({
      startDate: date,
      issueCome: false
    });
  };

  //토픽
  myCallback = dataFromChild => {
    this.setState(
      {
        topic_tag: dataFromChild,
        issueCome: false
      },
      () => {
        console.log("text topic in makeroom ", this.state.topic_tag);
      }
    );
  };

  //참여자
  myCallback2 = dataFromChild => {
    this.setState({ people_tag: dataFromChild, issueCome: false });
  };

  //이슈에서 가져오는 토픽
  myCallback3 = dataFromChild => {
    this.setState(
      {
        issue: dataFromChild,
        topic_tag: this.state.topic_tag.concat(dataFromChild),
        issueCome: true
      },
      () => {
        console.log("issue in makeroom", this.state.issue); //tagstopic으로 보내기 위해
        console.log("issue topic in makeroom ", this.state.topic_tag);
      }
    );
  };

  gotoVideo = () => {
    //회의실 개설하기
    const { startDay, startDate } = this.state;

    //console.log(datetime.toISOString());
    console.log(this.state.roomTitle);
    console.log(this.state.topic_tag);
    console.log(this.state.people_tag);

    if (this.state.isChecked) {
      //지금시간, 비활성화 -> 화상회의로 넘어가기
      service
        .confCreate(
          localStorage.getItem("projectId"),
          this.state.roomTitle,
          this.state.topic_tag,
          this.state.selectedDate,
          this.state.people_tag
        )
        .then(
          res => {
            console.log(res.data.data.id);
            localStorage.setItem("roomId", res.data.data.id);

            /**회의 시작 API */
            service2.getVideoStart(localStorage.getItem("roomId")).then(
              res => {
                console.log("화상회의에 오신 걸 환영합니다");
                console.log(res.data);

                this.props.history.push(
                  `/room/${localStorage.getItem("roomId")}`
                );
              },
              err => {
                console.log(err);
              }
            );

            // this.props.history.push(`/room/${localStorage.getItem("roomId")}`);
            console.log("바로 넘어가는 회의실 개설 성공");
            console.log(res);
          },
          err => {
            console.log("바로 넘어가는 회의실 개설 실패");
            console.log(err);
          }
        );
    } else {
      //설정한 시간, 활성화 -> 회의목록으로 넘어가기
      var datetime = new Date(
        startDay.getFullYear(),
        startDay.getMonth(),
        startDay.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds()
      );

      service
        .confCreate(
          localStorage.getItem("projectId"),
          this.state.roomTitle,
          this.state.topic_tag,
          datetime.toISOString(),
          this.state.people_tag
        )
        .then(
          res => {
            this.props.history.push(
              `/home/conferenceRoom/${localStorage.getItem("projectId")}`
            );
            console.log("회의목록 돌아가서 데이터 확인하자");
            this.props.onCloseModal();
            //TODO: 자동 새로고침 방법
            this.forceUpdate();
          },
          err => {
            console.log("회의목록으로 못돌아감");
            console.log(err);
          }
        );
    }
  };

  startNow() {
    this.setState({
      isChecked: !this.state.isChecked,
      issueCome: false
    });
    console.log(this.state.isChecked); // 체크 눌린상태 : false, 체크 떼면 true
  }

  render() {
    const { open, title, onCloseModal } = this.props;
    const { isChecked } = this.state;

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
              <TagsTopic
                callbackFromParent={this.myCallback}
                issue={this.state.issue}
                issueCome={this.state.issueCome}
              />

              <button className="getissue" onClick={this.onOpenModal}>
                <img src={searchissue} className="getissueimg" alt="" />
                이슈에서 가져오기
              </button>
            </div>
          </div>

          <MakeIssue
            open={this.state.open}
            title={this.state.title}
            onCloseModal={this.onCloseModal}
            callbackFromParent={this.myCallback3}
          />

          <div className="row-div">
            <div className="roomtitle2">시작 시간</div>

            {/* 체크박스 건들 때 issueCome:false */}
            {isChecked ? (
              <div>
                <DatePicker
                  id="datepicker"
                  customInput={<BigDatePicker able="disable" />}
                  disabled
                />
                <DatePicker
                  id="datepicker"
                  customInput={<SmallDatePicker able="disable" />}
                  disabled
                />
              </div>
            ) : (
              <div>
                <DatePicker
                  id="datepicker"
                  customInput={<BigDatePicker able="able" />}
                  selected={this.state.startDay}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  relativeSize={true}
                  dateFormat="yyyy/MM/dd"
                />
                <DatePicker
                  id="datepicker"
                  customInput={<SmallDatePicker able="able" />}
                  selected={this.state.startDate}
                  onChange={this.handleChange2}
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat="h:mm aa"
                  timeCaption="Time:"
                  relativeSize={true}
                />
              </div>
            )}

            <label className="time-start-label">
              <input
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.startNow}
                className="checkbox"
              />
              지금 시작
            </label>
          </div>

          <div className="row-div">
            <div className="roomtitle2">참여자</div>
            <div className="tag-inline-div">
              <TagsPeople callbackFromParent={this.myCallback2} />
            </div>
          </div>

          <div className="row-div2">
            <button className="makebutton" onClick={this.gotoVideo}>
              개설
            </button>

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
