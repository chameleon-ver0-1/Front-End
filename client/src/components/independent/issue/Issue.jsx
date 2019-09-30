import React, { Component } from "react";
import IssueDep from "./issueDepartment/IssueDep";
import Issues from "./issues/Issues";
import styled from "styled-components";

import * as service from "../../../services/IssueService";

const BoxContainer = styled.div`
  display: flex;
`;
const IssueContainer = styled.div`
  height: calc(100% - 48px);
`;
export class issue extends Component {
  state = { issueLists: [] };
  componentDidMount() {
    service.getIssueList().then(
      res => {
        console.log("***************************");
        console.log(res.data.message);
        console.log("***************************");
        this.setState({ issueLists: res.data.data });
      },
      err => {
        console.log("이슈 리스트 가져오기 실패");
      }
    );
  }
  render() {
    const { issueLists } = this.state;
    return (
      <IssueContainer>
        <IssueDep data={issueLists} />
        <BoxContainer>
          <Issues data={issueLists} />
        </BoxContainer>

      </IssueContainer>
    );
  }
}

export default issue;
