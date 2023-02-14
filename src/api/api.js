import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const api = {
  userRegister: (values) => axios.post(BASE_URL + '/user/register', values),
};
