import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { TAG } from "./tag";
import styled from "styled-components";

const TAGDIV3 = styled.div`
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
      suggestions: suggestions
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  /* 태그 */
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
    const { tags, suggestions } = this.state;
    return (
      <TAGDIV3>
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
      </TAGDIV3>
    );
  }
}

export default TagsPeople;
