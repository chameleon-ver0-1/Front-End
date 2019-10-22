import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { TAG } from "./tag";
import styled from "styled-components";
import * as service from "../../../../services/ConferenceRoomService";

const TAGDIV4 = styled.div`
  width: 347px;
  height: 60px;
  border-radius: 10px;
  font-size: 12px;
  border: solid 1px #cccccc;
  padding-left: 11px;
  padding-top: 2px;
  outline: none;
`;

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

export class TagsPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: suggestions,
      people: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  /* 태그 */
  handleDelete(i) {
    const { tags, people } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
      people: people.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    //TODO: projectId 가져오기
    service.confParticipants(localStorage.getItem("projectId"), tag.text).then(
      res => {
        console.log("참여자 판단 성공");

        var email;
        console.log("data가 나와야해", res.data.data.searchList);
        Object.keys(res.data.data.searchList).map(Id => {
          const list = res.data.data.searchList[Id];
          email = list.email;
        });

        this.setState(state => ({
          tags: [...state.tags, tag],
          people: this.state.people.concat(email) //여기에 res.data해서 이메일로 받아져오는 부분 넣어야함
          // [...state.tags, tag.text]
        }));

        this.props.callbackFromParent(this.state.people);
        console.log("tag: " + JSON.stringify(this.state.people));
      },
      err => {
        console.log("참여자 판단 실패");
        console.log(err);
      }
    );
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
    const { tags, suggestions } = this.state;
    return (
      <TAGDIV4>
        <ReactTags
          inline
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
          autofocus={false}
          placeholder="참여자를 추가하세요"
          classNames={{
            tagInputField: "tagInputField-people"
          }}
        />
      </TAGDIV4>
    );
  }
}

export default TagsPeople;
