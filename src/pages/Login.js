import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null,
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then((message) => {
        if (message.error) {
          this.setState({
            errorMessage: message.code,
          })
        }
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, errorMessage } = this.state;
    return (
      <React.Fragment>
        <h4 className="margin-x-noraml">Login</h4>
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder="Username" value={username} />
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="password" name="password" placeholder="Password" value={password} />
          </div>
          <button className="btn btn-primary btn-wide">Login</button>
        </form>
      </React.Fragment>
    )
  }
}

export default withAuth(Login);