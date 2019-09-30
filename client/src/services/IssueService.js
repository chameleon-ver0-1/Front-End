import axios from "axios";

const IssueAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api/issue/",
  headers: {
    Authorization: localStorage.getItem("jwtToken"),
    ContentType: "application/json"
  },
  timeout: 5000
});

export function getIssueList() {
  return IssueAxios.get(`${localStorage.getItem("projectId")}`);
}
export function getCommentList(issueId) {
  console.log("commentAPI확인", issueId);
  return IssueAxios.get(`get/${issueId}`);
}
export function postComment(taskId, username, usernameEn, userImg, content) {
  return IssueAxios.post("create/comment", {
    taskId,
    username,
    usernameEn,
    userImg,
    content
  });
}
