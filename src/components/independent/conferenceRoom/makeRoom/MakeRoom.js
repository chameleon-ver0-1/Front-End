import React, { Component } from 'react'
import './makeroom.style.css'
import Modal from "react-responsive-modal";
import { render } from 'react-dom';
import { TAG } from './tag';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = TAG.map((tag) => {
  return {
    id: tag,
    text: tag
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class MakeRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: 'Web', text: 'Web' }],
      suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
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
    console.log('The tag at index ' + index + ' was clicked');
  }

  render() {
    const { open, title, onCloseModal } = this.props;
    const { tags, suggestions } = this.state;

    return (
      <Modal open={open} onClose={onCloseModal} center >
        <div className="makeroomdiv">
          <div className="roomtitle">{title}</div>
          <div className="row-div">
            <div className="roomtitle2">방제목</div>
            <input className="roominput"></input>
          </div>

          <div className="row-div">
            <div className="roomtitle2">메인 토픽</div>
            <div>
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
            <div></div>
          </div>

          <div className="row-div">
            <div className="roomtitle2">참여자</div>
            <input className="roominput"></input>
          </div>

          <div className="row-div2">
            <button className="makebutton">개설</button>
            <button className="cancelbutton" onClick={onCloseModal}>취소</button>
          </div>

        </div>
      </Modal>
    )
  }
}

export default MakeRoom
