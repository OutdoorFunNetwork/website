import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getPosts() {
    return apiClient.get('/posts/');
  },

  getPost(id) {
    return apiClient.get('/posts/' + id);
  }
}
