import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
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
        <button type="submit" className="btn btn-primary btn-block btn-is-rounded">Login</button>
      </form>
    )
  }
}

export default withAuth(Login);