import axios from "axios";

const projectAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    Authorization: localStorage.getItem("jwtToken")
  },
  timeout: 5000
});
/**프로젝트 참여자 판단 post*/
export function projectUser(email) {
  return projectAxios.post("project/participantCheck", { email }).then(res => {
    console.log(res.data);

    console.log("***************************");
    console.log(res.data.message);
    console.log("***************************");
  });
}

/**프로젝트 개설 post */
export function projectAdd(projectName, projectRoles, projectParticipants) {
  return projectAxios
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
export function getProjectList() {
  return projectAxios.get("project/list");
}

/**프로젝트 참여 첫 판단 */
export function projectFirst(projectId) {
  return projectAxios.get("project/firstCheck/" + projectId);
}

/**부서 목록 가져오기 */

export function projectRole(projectId) {
  return projectAxios.get("project/roleList/" + projectId);
}

/**프로젝트 참여 OK */
export function projectOK(projectId, role) {
  return projectAxios
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
export function projectNO(projectId) {
  return projectAxios.get("project/refuse/" + projectId);
}
