import React, { Component } from "react";
import "./makeroom.style.css";
import Modal from "react-responsive-modal";
import { render } from "react-dom";
import { TAG } from "./tag";
import { WithContext as ReactTags } from "react-tag-input";
import { Link } from "react-router-dom";

const suggestions = TAG.map(tag => {
  return {
    id: tag,
    text: tag
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 300,
//   },
// }));

class MakeRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomTitle: "none",
      tags: [{ id: "화상회의", text: "화상회의" }],
      suggestions: suggestions
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log("The tag at index " + index + " was clicked");
  }

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
              <ReactTags
                inputFieldPosition="top"
                tags={tags}
                suggestions={suggestions}
                delimiters={delimiters}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                handleDrag={this.handleDrag}
                handleTagClick={this.handleTagClick}
              />
            </div>
          </div>

          <div className="row-div">
            <div className="roomtitle2">시작 시간</div>
            <div />
          </div>

          <div className="row-div">
            <div className="roomtitle2">참여자</div>
            <input className="roominput" />
          </div>

          <div className="row-div2">
            <Link to={`/room/${this.state.roomTitle}`} className="linklogin">
              <button className="makebutton">개설</button>
            </Link>

            <button className="cancelbutton" onClick={onCloseModal}>
              취소
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default MakeRoom;
