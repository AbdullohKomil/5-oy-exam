import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const api = {
  userLogin: (values) => axios.post(BASE_URL + '/user/login', values),
  userRegister: (values) => axios.post(BASE_URL + '/user/register', values),
};
