import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import axios from 'axios';

const superagent = superagentPromise(_superagent, global.Promise);

var isDevelopment = process.env.NODE_ENV === 'development';
var API_ROOT = 'http://167.172.124.71/api'

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (user) =>
    requests.post('/users', { user: user }),
  resetPassword: (user) =>
    requests.post('/users/resetPassword', { user: user }),
  facebookAuth : ( user ) => 
    requests.post('/users/facebookAuth', { user : user }),
  save: user =>
    requests.put('/user', { user }),
  uploadPhoto: (data) =>
    axios.post(API_ROOT+'/users/uploadPhoto', data),
  confirmation: (token) =>
    requests.post('/users/confirmation', { token: token }),
  resend: (email) =>
    requests.put('/users/confirmation', { email : email })
};

const Tags = {
  getAll: () => requests.get('/tags')
};


const Venue = {
  all: () => requests.get('/venues')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = event => Object.assign({}, event, { slug: undefined })

const Events = {
  all: page =>
    requests.get(`/events?${limit(10, page)}`),
  filter: (params) => 
    requests.get(`/events?${params}`),
  del: slug =>
    requests.del(`/events/${slug}`),
  favorite: slug =>
    requests.post(`/events/${slug}/favorite`),
  get: slug =>
    requests.get(`/events/${slug}`),
  unfavorite: slug =>
    requests.del(`/events/${slug}/favorite`),
  update: event =>
    requests.put(`/events/${event.slug}`, { event: omitSlug(event) }),
  create: event =>
    requests.post('/events', { event }),
  uploadPhoto: (data) =>
    axios.post(API_ROOT+'/events/uploadPhoto', data),
  getAllCategories: () => requests.get('/events/categories'),
};


const Comments = {
  create: (slug, comment) =>
    requests.post(`/events/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/events/${slug}/comments/${commentId}`),
  forEvent: slug =>
    requests.get(`/events/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Events,
  Auth,
  Profile,
  Venue,
  setToken: _token => { token = _token; }
};
