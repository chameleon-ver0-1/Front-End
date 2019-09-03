import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../helpers/types";

/*Axios instance를 통해 config 객체를 넘겨서  Axios instance를 넘기면
헤더를 중복하여 정의해주지 않아도 된다.*/
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

      // const token = res.data.data.accessToken.token;
      // localStorage.setItem("jwtToken", token);
      // setAuthorizationToken(token);
      // setCurrentUser(jwtDecode(token));
      // console.log(localStorage.getItem("jwtToken"));
    });
}
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
