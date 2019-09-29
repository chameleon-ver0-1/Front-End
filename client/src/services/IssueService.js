import axios from "axios";

const IssueService = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    Authorization: localStorage.getItem("jwtToken"),
    ContentType: "application/json"
  },
  timeout: 5000
});

export function getIssueList() {
  return IssueService.get(`issue/${localStorage.getItem("projectId")}`);
}
export function getCommentList() {
  return IssueService.get(`issue/get/${localStorage.getItem("projectId")}`);
}
