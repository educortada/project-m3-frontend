import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.signup(this.state);
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
    const { username, password, email } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder="Username" value={username} />
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="email" name="email" placeholder="Email" value={email}/>
          </div>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control" type="password" name="password" placeholder="Password" value={password} />
          </div>
          <button className="btn btn-primary">Signup</button>
        </form>
        <p>Already have account? <Link to={"/login"}> Login</Link></p>
      </React.Fragment>
    )
  }
}

export default withAuth(Signup);

