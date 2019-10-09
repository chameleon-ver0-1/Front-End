import React, { Component } from "react";
import DocData from "./data/doc.json";
import { WithContext as ReactTags } from "react-tag-input";

export class DocumentTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        //TODO: 데이터 값으로 가져오기 & 데이터 구조 확인하기
        { id: 1, text: "화상회의" },
        { id: 2, text: "카멜레온" },
        { id: 3, text: "Switch" }
      ]
    };
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="tags">
        {/* TODO: id 값 적용 */}
        <ReactTags tags={this.props.topic} readOnly />
      </div>
    );
  }
}

export default DocumentTag;
