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
  searchAuthor: (value) =>
    axios.get(BASE_URL + '/author/search?author=' + value),
  temuriylarDavri: () => axios.get(BASE_URL + '/author/genreId/1'),
  jadidAdabiyoti: () => axios.get(BASE_URL + '/author/genreId/2'),
  sovetDavri: () => axios.get(BASE_URL + '/author/genreId/3'),
  mustaqillikDavri: () => axios.get(BASE_URL + '/author/genreId/4'),
  createAuthor: (formData) =>
    axios.post(BASE_URL + '/author', formData, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  createBook: (formData) =>
    axios.post(BASE_URL + '/book', formData, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  getAuthorByGenre: (id) => axios.get(BASE_URL + '/author/genreId/' + id),
  SingleAuthor: (id) =>
    axios.get(BASE_URL + '/author/authorId/' + id, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  SingleAuthorBooks: (id) =>
    axios.get(BASE_URL + '/author/books/' + id, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  temuriylarDavriBook: () => axios.get(BASE_URL + '/book/genreId/1'),
  jadidAdabiyotiBook: () => axios.get(BASE_URL + '/book/genreId/2'),
  sovetDavriBook: () => axios.get(BASE_URL + '/book/genreId/3'),
  mustaqillikDavriBook: () => axios.get(BASE_URL + '/book/genreId/4'),
  SingleBook: (id) =>
    axios.get(BASE_URL + '/book/bookId/' + id, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  userEditProfile: (formData) =>
    axios.put(BASE_URL + '/user/account', formData, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  userEditSecurity: (values) =>
    axios.put(BASE_URL + '/user/security', values, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  SingleBookGetAuthorBooks: (id) =>
    axios.get(BASE_URL + '/author/books/' + id, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  SearchBook: (value) => axios.get(BASE_URL + '/book/search?book=' + value),
};
