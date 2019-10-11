import axios from "axios";

const videoAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api/conf_room/enterConf",
  headers: {
    ContentType: "application/json",
    Authorization: localStorage.getItem("jwtToken")
  },
  timeout: 5000
});

export function getVideoStart(roomId) {
  return videoAxios.get(`/${localStorage.getItem("projectId")}/${roomId}`);
}
