import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../helpers/types";

/*Axios instance를 통해 config 객체를 넘겨서  Axios instance를 넘기면
헤더를 중복하여 정의해주지 않아도 된다.*/
const projectListAxios = axios.create({
  //baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});

export function getPost(postId) {
  return axios.get(`${projectListAxios}/posts/${postId}`);
}
