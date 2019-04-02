import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    errorMessage: null,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.signup(this.state)
      .then((message) => {
        if (message.error) {
          this.setState({
            errorMessage: message.code,
          })
        }
      })
      .catch(error => console.log(error))
    // .then(() => {
    //   this.setState({
    //     username: "",
    //     password: "",
    //   });
    // })
    // .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, email, errorMessage } = this.state;
    return (
      <React.Fragment>
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder="Username" value={username} />
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="email" name="email" placeholder="Email" value={email} />
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="password" name="password" placeholder="Password" value={password} />
          </div>
          <button className="btn btn-primary">Signup</button>
        </form>
        <p className="margin-x-noraml">Already have account? <Link to={"/login"} className="btn btn-link"> Login</Link></p>
      </React.Fragment>
    )
  }
}

export default withAuth(Signup);

