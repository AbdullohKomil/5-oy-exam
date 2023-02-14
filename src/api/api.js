import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const api = {
  userLogin: (values) => axios.post(BASE_URL + '/user/login', values),
  userRegister: (values) => axios.post(BASE_URL + '/user/register', values),
  getUser: (token) =>
    axios.get('http://localhost:5000/user/me', {
      headers: {
        Authorization: token,
      },
    }),
  searchAuthor: (value) => axios.get(BASE_URL + '/search?author=' + value),
};
