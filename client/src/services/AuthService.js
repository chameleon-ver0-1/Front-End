import decode from "jwt-decode";
import axios from "axios";

const AUTH_TOKEN = '';
axios.default.baseURL = 'https://www.chameleon4switch.cf';
axios.default.headers.common['Authorization'] = AUTH_TOKEN;
axios.default.headers.post['Content-Type'] = 'application/json';//FIXME:

const instance = axios.create({
  baseURL: 'https://www.chameleon4switch.cf'
});
instance.default.headers.common['Authorization'] = AUTH_TOKEN;

const instance = axios.create();
instance.default.timeout = 2500;

instance.get('/longRequest', {
  timeout: 5000
})
export const geJwt = () => {
  return localStorage.getItem('cool-jwt');
}


export default class AuthService {
  /*크게 접속 시 검증과 요청 전 검증으로 나뉘고, 공통적으로 Refresh 과정을 거치게 된다. */
  constructor(domain) {
    this.domain = domain || "https://www.chameleon4switch.cf"; //API server domain
  }


  login(email, passwd) {
    return axios
      .post(`${this.domain}/auth/signin`, {
        method: "POST",
        body: JSON.stringify({
          email, //변수는 달라지겠지
          passwd
        })
      })
      .then(res => {
        this.setToken(res.token); // Setting the token in localStorage
        return Promise.resolve(res);
      });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  logout() {
    localStorage.removeItem("id_token");
  }

  getProfile() {
    return decode(this.getToken());
  }

}

axios.get('${this.domain}/auth/signin', {
headers: {
  Authorization: 'jwt token',
},
})

const customAxios = axios.create({
  ...yourConfig,
})
customAxios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    const errorResponse = error.response
    if(this.isTokenExpiredError(errorResponse)) {
      return resetTokenAndReattemptRequest(error)
    }
    return Promise.reject(error)
  }
)
function isTokenExpiredError(errorResponse) {

}

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function resetTokenAndReattemptRequest(error) {
  try{
    const {response: errorResponse} = error;
    const resetToken = await TokenUtils.getResetToken();
    if(!resetToken) {
      return Promise.reject(error);
    }

    const retryOriginalRequest = new Promise(resolve => {
      addSubscriber(access_token => {
        errorResponse.confing.headers.Authorization = access_token;
        resolve(axios(errorResponse.confing));
      })
    });
    if(!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await axios({
        method:'post',
        url: `<YOUR TOKEN REFREH ENDPOINT>`,
        data: {
          token:resetToken
        }
      });
      if(!response.data) {
      return Promise.reject(error);
      }
      newToken = response.data.token;
      TokenUtils.saveRefreshToken(newToken);
      isAlreadyFetchingAccessToken = false;
      onAccessTokenFetched(newToken);
    }
    return retryOriginalRequest;
  }
  catch(err) {
    return Promise.reject(err);
  }
}
function onAccessTokenFetched(access_token) {
	// When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach(callback => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

