import axios from "axios";

const DocumentAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api/conf_log/",
  headers: {
    Authorization: localStorage.getItem("jwtToken"),
    ContentType: "application/json"
  },
  timeout: 5000
});

export function getDocumentList(Id, count) {
  return DocumentAxios.get(`list/${Id}` + "?pageNo=" + `${count}`);
}

export function getDocumentSearch(Id, search) {
  return DocumentAxios.get(`search/${Id}` + "?search=" + `${search}`);
}
