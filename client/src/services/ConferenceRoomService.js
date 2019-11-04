import axios from "axios";

const confCreateAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    ContentType: "application/json",
    Authorization: localStorage.getItem("jwtToken")
  },
  timeout: 5000
});

/**회의실 생성하기 */
export function confCreate(projectId, title, mainTopics, startTime, members) {
  return confCreateAxios
    .post("conf_room/create/" + projectId, {
      title,
      mainTopics,
      startTime,
      members
    })
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");

      return Promise.resolve(res);
    });
}

/**회의실 참여자 이름 검색 */
export function confParticipants(projectId, userName) {
  return confCreateAxios
    .post("conf_room/memberCheck/" + projectId, { userName })
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");

      return Promise.resolve(res);
    });
}

export function confProceed(projectId) {
  return confCreateAxios.get(`conf_room/proceedList/${projectId}`);
}

/**내가 포함된 회의 목록 */
export function confInclude(projectId) {
  return confCreateAxios.get(`conf_room/includedList/${projectId}`);
}

/**회의 참여자 목록 */
export function confShowParticipants(projectId, roomId) {
  return confCreateAxios
    .post(`conf_room/memberList/${projectId}/${roomId}`)
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");

      return Promise.resolve(res);
    });
}
