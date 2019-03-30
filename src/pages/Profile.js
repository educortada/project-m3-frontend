import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import authService from '../lib/auth-service'
import photosService from '../lib/photos-service'
import tripService from '../lib/trip-service'

export class Profile extends Component {

  state = {
    status: 'isLoading',
    background: '',
    username: this.props.user.username,
    email: this.props.user.email,
    isUpdated: false,
    flights: []
  }

  randomNumber(Arraylength) {
    return Math.floor(Math.random() * Arraylength)
  }

  componentDidMount = async () => {
    try {
      const api = await photosService.getPhoto('landscape')
      const photoRandom = api.results[this.randomNumber(api.results.length)].urls.small
      const flights = await tripService.getFlights()
      this.setState(
        {
          background: photoRandom,
          status: 'isLoaded',
          flights: flights,
        }
      )

    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error)
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      isUpdated: false,
    })
  }

  handleSubmit = (event) => {
    const { username, email } = this.state
    event.preventDefault()
    authService.updateUser(username, email);
    this.setState({
      isUpdated: true,
    })
  }

  renderList = () => {
    const { background } = this.state
    const backgroundImage = {
      backgroundImage: `url(${background})`,
    }
    return this.state.flights.map(flight => {
      return (
        <div className="card card-horizontal">
          <div style={backgroundImage} className="card-horizontal-img"></div>
          <div className="card-body">
            <h5 className="card-title">{flight.destination}</h5>
            <p className="card-text">Price: {flight.price} €</p>
          </div>
        </div>
      )
    })
  }

  render() {
    const { background, username, email, status } = this.state
    const backgroundImage = {
      backgroundImage: `url(${background})`,
    }
    switch (status) {
      case 'isLoading':
        return <p>Loading...</p>
      case 'isLoaded':
        return (
          <React.Fragment>
            <div className="overlay"></div>
            <div style={backgroundImage} className="bg-profil"></div>
            <section className="profile-content">
              <h1 className="profile-title">{username}</h1>
            </section>
            <section className="profile-data">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input onChange={this.handleInput} type="text" id="username" className="form-control" name="username" value={username} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={this.handleInput} type="email" id="email" className="form-control" name="email" value={email} />
                </div>
                {
                  (this.state.isUpdated) ?
                    <button type="submit" className="btn btn-primary btn-is-success">Great change!</button>
                    :
                    <button type="submit" className="btn btn-primary">Update</button>
                }
              </form>
            </section>
            <section className="profile-trips">
              <h5>Your flights</h5>
              {this.renderList()}
            </section>
          </React.Fragment>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }
  }
}

export default withAuth(Profile)
