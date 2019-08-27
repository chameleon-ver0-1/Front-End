import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styled from "styled-components";
import { PEOPLE } from "./people";

const TAGDIV2 = styled.div`
  width: 210px;
  height: 38px;
  object-fit: contain;
  border-radius: 18.8px;
  border: solid 1px var(--white-two);
  margin-left: 50px;
  padding-left: 15px;
  font-size: 12px;
  outline: none;
`;

const suggestions = PEOPLE.map(tag => {
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

export class TagsProjectPeople extends Component {
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
    this.DoingSomethingFn = this.DoingSomethingFn.bind(this);
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
    console.log("tag: " + this.state.tags);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(tags) {
    console.log("tags : " + tags + " was clicked");
  }

  DoingSomethingFn = () => {
    //부모한테 props로 보내기
    this.props.callbackFromParent(this.state.tags);
  };

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <TAGDIV2>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            handleTagClick={this.handleTagClick}
            placeholder="함께할 사람을 추가하세요"
            autofocus={false}
            classNames={{
              tags: "tag-project",
              tagInputField: "tagInputField-project"
            }}
          />
        </TAGDIV2>
        <button onClick={this.DoingSomethingFn}>데이터2</button>
      </div>
    );
  }
}

export default TagsProjectPeople;
