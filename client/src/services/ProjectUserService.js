import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../helpers/types";

/*Axios instance를 통해 config 객체를 넘겨서  Axios instance를 넘기면
헤더를 중복하여 정의해주지 않아도 된다.*/
const projectUserAxios = axios.create({
  baseURL: "http://127.0.0.1:4000/api/project/emailCheck",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});
export function projectUser(email) {
  return projectUserAxios.post("auth/projectAdd", { email }).then(res => {
    console.log(res.data);

    console.log("***************************");
    console.log(res.data.message);
    console.log("***************************");

    const token = res.data.data.accessToken.token;
    localStorage.setItem("jwtToken", token);
    setAuthorizationToken(token);
    setCurrentUser(jwtDecode(token));
    console.log(localStorage.getItem("jwtToken"));
  });
}
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
