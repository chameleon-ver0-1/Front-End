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
  return projectUserAxios
    .post("project/participantCheck", { email })
    .then(res => {
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
      return Promise.resolve(res);
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

/**프로젝트 참여 첫 판단 */
const projectFirstAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectFirst(projectId) {
  return projectFirstAxios.get("project/firstCheck/" + projectId);
}

/**부서 목록 가져오기 */
const projectRoleAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectRole(projectId) {
  return projectRoleAxios.get("project/roleList/" + projectId);
}

/**프로젝트 참여 OK */
const projectOKAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectOK(projectId, role) {
  return projectOKAxios
    .post("project/participate/" + projectId, { role })
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");

      return Promise.resolve(res);
    });
}

/**프로젝트 참여 NO */
const projectNOAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function projectNO(projectId) {
  return projectNOAxios.get("project/refuse/" + projectId);
}
