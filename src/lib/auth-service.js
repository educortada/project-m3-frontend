import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  signup(user) {
    const { username, password, email } = user;
    return this.auth.post('/auth/signup', { username, password, email })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me(user) {
    return this.auth.get('/auth/me')
      .then(response => response.data)
  }

  updateUser(user) {
    const { username, email, avatarURL } = user
    return this.auth.put('/auth/profile/update', { username, email, avatarURL })
      .then(({ data }) => data);
  }
}

const authService = new AuthService();

export default authService;
