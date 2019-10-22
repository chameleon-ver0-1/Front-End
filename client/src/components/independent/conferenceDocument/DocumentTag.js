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
      ],
      tagList: []
    };
  }

  id = 0;
  getId = () => ++this.id;

  componentDidMount() {
    var newList = [];
    Object.keys(this.props.text).map(Id => {
      const tag = this.props.text;

      newList[Id] = {
        id: this.getId(),
        text: tag[Id]
      };
    });
    //console.log(newList);

    this.setState(
      {
        tagList: this.state.tagList.concat(newList)
      },
      () => {
        console.log(this.state.tagList);
      }
    );
  }

  render() {
    const { tagList } = this.state;
    return (
      <div className="tags">
        <ReactTags tags={tagList} readOnly />
      </div>
    );
  }
}

export default DocumentTag;
