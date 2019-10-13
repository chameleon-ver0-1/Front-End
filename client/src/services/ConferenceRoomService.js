import axios from "axios";

const confCreateAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    ContentType: "application/json",
    Authorization: localStorage.getItem("jwtToken")
  },
  timeout: 5000
});

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

// export function confInclude(projectId) {
//   return confCreateAxios.get("conf_room/includedList/" + projectId);
// }

export function confInclude(projectId) {
  return confCreateAxios.get(`conf_room/includedList/${projectId}`);
}
