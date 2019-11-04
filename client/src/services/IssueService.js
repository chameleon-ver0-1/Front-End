import axios from "axios";

const IssueAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api/issue/",
  headers: {
    Authorization: localStorage.getItem("jwtToken"),
    ContentType: "application/json"
  },
  timeout: 5000
});

export function postIssueList(dept) {
  return IssueAxios.post(`${localStorage.getItem("projectId")}`, {
    dept
  });
}
export function getCommentList(issueId) {
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
export function postNewIssue(
  projectId,
  title,
  dDay,
  content,
  isConfScheduled,
  attachment,
  dept,
  username,
  usernameEn,
  userImg
) {
  return IssueAxios.post("create/task", {
    projectId,
    title,
    dDay,
    content,
    isConfScheduled,
    attachment,
    dept,
    username,
    usernameEn,
    userImg
  });
}

export function postUpdateIssue(columnData) {
  return IssueAxios.post("save", {
    columnData
  });
}

/**회의실 개설하기 중 이슈 가져오기 */
export function getConferenceIssue(projectId) {
  return IssueAxios.get(`gettitle/${projectId}`);
}
