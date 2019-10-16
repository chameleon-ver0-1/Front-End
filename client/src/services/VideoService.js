import axios from "axios";

const VideoAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api/conf_room",
  headers: {
    ContentType: "application/json",
    Authorization: localStorage.getItem("jwtToken")
  },
  timeout: 5000
});

export function getVideoStart(roomId) {
  return VideoAxios.get(
    `/enterConf/${localStorage.getItem("projectId")}/${roomId}`
  );
}
export function postVideoExit(roomId) {
  return VideoAxios.post(
    `/exitConf/${localStorage.getItem("projectId")}/${roomId}`
  );
}
