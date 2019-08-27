import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styled from "styled-components";
import { COMPANY } from "./company";

const TAGDIV = styled.div`
  margin-left: 23px;
  margin: 0;
  font-size: 12px;
  width: 134px;
  height: 33px;
  border: solid 1px var(--pinkish-grey);
  border-radius: 18.8px;
  padding-left: 11px;
  padding-right: 11px;
  outline: none;
  padding-top: 5px;
`;

const suggestions = COMPANY.map(tag => {
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

export class TagsCompany extends Component {
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
      <div>
        <TAGDIV>
          <ReactTags
            inputFieldPosition="bottom"
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            handleTagClick={this.handleTagClick}
            autofocus={false}
            placeholder="회사명을 검색하세요"
            classNames={{
              tagInputField: "tagInputField-auth"
            }}
          />
        </TAGDIV>
      </div>
    );
  }
}

export default TagsCompany;
