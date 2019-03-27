import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

// Components
import Button from '../components/Button'

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => { })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder="Username" value={username} />
        </div>
        <div className="form-group">
          <input onChange={this.handleChange} className="form-control" type="password" name="password" placeholder="Password" value={password} />
        </div>
        <Button>Login</Button>
      </form>
    )
  }
}

export default withAuth(Login);