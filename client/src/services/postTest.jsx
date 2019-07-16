import React, { Component } from "react";
import * as service from "./post";
import ChilePostTest from "./childPostTest";
import NavPostTest from "./navPostTest";
export class postTest extends Component {
  constructor(props) {
    super();
    this.state = {
      postId: 1, //현재 포스트의 번호
      fetching: false, //요청의 완료 여부
      post: {
        title: null,
        body: null
      },
      comments: []
    };
  }

  fetchPostInfo = async postId => {
    this.setState({
      fetching: true
    });

    try {
      const info = await Promise.all([
        service.getPost(postId),
        service.getComments(postId)
      ]);

      console.log(info);

      const { title, body } = info[0].data; //const { a, b } = c 의 형식의 코드는 ES6 의 Object Destructuring (객체 비구조화 할당)문법입니다.
      const comments = info[1].data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        comments,
        fetching: false //done!
      });
    } catch (e) {
      this.setState({
        fetching: false
      });
      console.log("error occurred", e);
    }
  };

  handleNavigateClick = type => {
    const postId = this.state.postId;

    if (type == "NEXT") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };
  componentDidMount = () => {
    this.fetchPostInfo(1);
  };
  render() {
    const { postId, fetching, post, comments } = this.state;
    return (
      <div>
        부모부모
        <NavPostTest
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <ChilePostTest
          title={post.title}
          body={post.body}
          comments={comments}
        />
      </div>
    );
  }
}

export default postTest;
