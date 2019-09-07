import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styled from "styled-components";
import { PEOPLE } from "./people";
import * as service from "../../../../services/ProjectService";

const TAGDIV2 = styled.div`
  width: 187px;
  height: 29px;
  object-fit: contain;
  border-radius: 10px;
  border: solid 1px var(--white-two);
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

export class TagsProjectRoles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: suggestions,
      roles: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.confirmRoles = this.confirmRoles.bind(this);
  }

  /* 태그 */
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  confirmRoles() {
    //부서목록 가져오기
  }

  handleAddition(tag) {
    this.setState(state => ({
      tags: [...state.tags, tag],
      roles: this.state.roles.concat(tag.text)
    }));
    this.props.callbackFromParent(this.state.roles);
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

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <TAGDIV2 onClick={this.confirmRoles}>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            handleTagClick={this.handleTagClick}
            autofocus={false}
            placeholder=""
            classNames={{
              tags: "tag-project",
              tagInputField: "tagInputField-project3"
            }}
          />
        </TAGDIV2>
      </div>
    );
  }
}

export default TagsProjectRoles;
