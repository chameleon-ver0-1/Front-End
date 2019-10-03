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
var dep;
export class issue extends Component {
  state = { issueLists: [], dep: "" };

  componentDidMount() {
    service.getIssueList().then(
      res => {
        console.log("***************************");
        console.log(res.data.message);
        console.log("***************************");
        this.setState({ issueLists: res.data.data });
        const current = res.data.data.roleData[0].role;
        this.setState({ dep: current });
        console.log(this.state.dep);
      },
      err => {
        console.log("이슈 리스트 가져오기 실패");
      }
    );
  }
  getCurrentDep = currentDep => {
    this.setState({ dep: currentDep });
  };
  render() {
    const { issueLists } = this.state;
    return (
      <IssueContainer>
        <IssueDep data={issueLists} callbackCurrentDep={this.getCurrentDep} />
        <BoxContainer>
          <Issues currentDep={this.state.dep} />
        </BoxContainer>
      </IssueContainer>
    );
  }
}

export default issue;
