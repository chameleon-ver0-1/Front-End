import React, { Component } from "react";
import Page from "./Page";
import WordCanvas from "./WordCanvas";
import "./conferencedocdetail.style.css";

export class PDF extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: ""
    };
  }

  componentWillReceiveProps(props) {
    Object.keys(props.detail).map(id => {
      this.setState({
        contents: props.detail
      });
    });
  }

  render() {
    const { id, keywords, detail } = this.props;
    return (
      <Page singleMode={true} id={id}>
        <div className="togopdf">
          <div className="wordclouddiv">
            <div className="detail_title">키워드맵</div>
            <WordCanvas keywords={keywords} />
          </div>

          <div>
            <br />
            {Object.keys(this.state.contents).map(id => {
              const list = this.state.contents[id];
              return (
                <div>
                  <div className="div1">
                    <div className="detail_title">{"l " + list.topic}</div>
                    <div className="detail_content">{list.content}</div>
                  </div>
                  <br />
                </div>
              );
            })}

            <br />
          </div>
        </div>
      </Page>
    );
  }
}

export default PDF;
