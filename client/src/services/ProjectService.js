import axios from "axios";

/**프로젝트 참여자 판단 post*/
const projectUserAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectUser(email) {
  return projectUserAxios.post("project/emailCheck", { email }).then(res => {
    console.log(res.data);

    console.log("***************************");
    console.log(res.data.message);
    console.log("***************************");
  });
}

/**프로젝트 개설 post */
const projectAddAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectAdd(projectName, projectRoles, projectParticipants) {
  return projectAddAxios
    .post("project/create", { projectName, projectRoles, projectParticipants })
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");
    });
}

/**프로젝트 리스트 get */
const projectAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function getProjectList() {
  return projectAxios.get("project/list");
}
