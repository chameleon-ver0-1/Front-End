import axios from "axios";
const root = "https://jsonplaceholder.typicode.com";

/*TODO:GET방식*/

export function getPost(postId) {
  return axios.get(`${root}/posts/${postId}`);
}

export function getComments(postId) {
  return axios.get(`${root}/posts/${postId}/comments`);
}

/*TODO:POST방식*/
/*
state = {
  name: '',
}

handleChange = event => {
  this.setState({ name: event.target.value });
}

handleSubmit = event => {
  event.preventDefault();

  const user = {
    name: this.state.name
  };

  axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
*/

/*props 한번에 가져오는 방법*/
// render() {
//   const { name, avatar, email, isLoading } = this.props;
// }

/*props 타입 설정하는 부분*/
// User.propTypes = {
//   name: PropTypes.string,
//   avatar: PropTypes.string,
//   email: PropTypes.string,
//   isLoading: PropTypes.bool
// };

/*TODO:DELETE방식*/
// export function deleteComments() {
//   return axios.delete(`${root}/delete`);
// /*const response = await axios.delete('http://demo0725191.mockable.io/delete_data');
//   console.log('👉 Returned data:', response);*/
// }
