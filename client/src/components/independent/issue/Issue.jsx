import React, { Component } from "react";
import IssueDep from "./issueDepartment/IssueDep";
import Issues from "./issues/Issues";
import styled from "styled-components";
import IssueAdd from "./issueAdd/IssueAdd";

const BoxContainer = styled.div`
  display: flex;
`;
const IssueContainer = styled.div`
  height: calc(100% - 48px);
`;
export class issue extends Component {
  render() {
    return (
      <IssueContainer>
        <IssueDep />
        <BoxContainer>
          <Issues />
        </BoxContainer>
        <IssueAdd />
      </IssueContainer>
    );
  }
}

export default issue;
