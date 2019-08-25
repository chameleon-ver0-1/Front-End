import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../helpers/types";

/*Axios instance를 통해 config 객체를 넘겨서  Axios instance를 넘기면
헤더를 중복하여 정의해주지 않아도 된다.*/
const signInAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});
export function signIn(email, password) {
  return signInAxios.post("auth/signIn", { email, password }).then(res => {
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
export function logout() {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    setCurrentUser({});
  };
}

// signInAxios.interceptors.response.use(
//   function(response) {
//     // If the request succeeds, we don't have to do anything and just return the response
//     return response;
//   },
//   function(error) {
//     const errorResponse = error.response;
//     if (isTokenExpiredError(errorResponse)) {
//       return resetTokenAndReattemptRequest(error);
//     }
//     // If the error is due to other reasons, we just throw it back to axios
//     return Promise.reject(error);
//   }
// );
// function isTokenExpiredError(errorResponse) {
//   // Your own logic to determine if the error is due to JWT token expired returns a boolean value
// }
// let isAlreadyFetchingAccessToken = false;

// // This is the list of waiting requests that will retry after the JWT refresh complete
// let subscribers = [];

// function resetTokenAndReattemptRequest(error) {
//   try {
//     const { response: errorResponse } = error;
//     const resetToken = await TokenUtils.getResetToken(); // Your own mechanism to get the refresh token to refresh the JWT token
//     if (!resetToken) {
//       // We can't refresh, throw the error anyway
//       return Promise.reject(error);
//     }
//     /* Proceed to the token refresh procedure
//     We create a new Promise that will retry the request,
//     clone all the request configuration from the failed
//     request in the error object. */
//     const retryOriginalRequest = new Promise(resolve => {
//     /* We need to add the request retry to the queue
//     since there another request that already attempt to
//     refresh the token */
//       addSubscriber(access_token => {
//         errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
//         resolve(axios(errorResponse.config));
//       });
//     });
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true;
//       const response = await axios({
//         method: 'post',
//         url: `<YOUR TOKEN REFREH ENDPOINT>`,
//         data: {
//           token: resetToken // Just an example, your case may vary
//         }
//       });
//       if (!response.data) {
//         return Promise.reject(error);
//       }
//       const newToken = response.data.token;
//       TokenUtils.saveRefreshToken(newToken); // save the newly refreshed token for other requests to use
//       isAlreadyFetchingAccessToken = false;
//       onAccessTokenFetched(newToken);
//     }
//     return retryOriginalRequest;
//   } catch (err) {
//     return Promise.reject(err);
//   }
// }

// function onAccessTokenFetched(access_token) {
// 	// When the refresh is successful, we start retrying the requests one by one and empty the queue
//   subscribers.forEach(callback => callback(access_token));
//   subscribers = [];
// }

// function addSubscriber(callback) {
//   subscribers.push(callback);
// }

// /////////////

// export const login = (email, password) => {
//   signInAxios
//     .post(`/auth/signin`, { email, password })
//     .then(res => {
//       dispatch(loginSuccess(res.data, email));
//       const token = res.data.token;
//       axios.defaults.headers.common["Authorization"] = token;
//       history.pushState("/");
//     })
//     .catch(err => {
//       if (err.response.status === 401) {
//         dispatch(loginFailure(err));
//       }
//     });
// };
