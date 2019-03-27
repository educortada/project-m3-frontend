import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

// Components
import Button from '../components/Button'

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      // .then(() => {
      //   this.setState({
      //     username: "",
      //     password: "",
      //   });
      // })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder="Username" value={username} />
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="password" name="password" placeholder="Password" value={password} />
          </div>
          <Button>Signup</Button>
        </form>
        <p>Already have account? <Link to={"/login"}> Login</Link></p>
      </React.Fragment>
    )
  }
}

export default withAuth(Signup);

