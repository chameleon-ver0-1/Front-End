import axios from "axios";

const IssueService = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro",
    ContentType: "application/json"
  },
  timeout: 5000
});

export function postIssueList(projectId) {
  return IssueService.post("issue/get", { projectId });
}
