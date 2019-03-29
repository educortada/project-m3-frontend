import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import photosService from '../lib/photos-service'

export class Profile extends Component {

  state = {
    status: 'isLoading',
    background: '',
    username: this.props.user.username,
    email: this.props.user.email,
  }

  randomNumber(Arraylength) {
    return Math.floor(Math.random() * Arraylength)
  }

  componentDidMount = async () => {
    try {
      const api = await photosService.getPhoto('landscape')
      const photoRandom = api.results[this.randomNumber(api.results.length)].urls.small
      this.setState(
        {
          background: photoRandom,
          status: 'isLoaded',
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
    this.setState({ [name]: value })
  }

  render() {
    const { background, username, email, status } = this.state
    // CSS
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
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input onChange={this.handleInput} type="text" id="username" className="form-control" name="username" value={username} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={this.handleInput} type="email" id="email" className="form-control" name="email" value={email} />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
              </form>
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
