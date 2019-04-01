import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import photosService from '../lib/photos-service'
import tripService from '../lib/trip-service'

import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

export class Profile extends Component {

  state = {
    status: 'isLoading',
    background: '',
    username: this.props.user.username,
    email: this.props.user.email,
    isUpdated: false,
    flights: [],
    avatar: '',
    isUploading: false,
    progress: 100,
    avatarURL: this.props.user.avatarURL
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
    event.preventDefault()
    const { username, email, avatarURL } = this.state
    this.props.update({ username, email, avatarURL })
    this.setState({
      isUpdated: true,
    })
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })

  handleProgress = (progress) => this.setState({ progress })

  handleUploadError = (error) => {
    this.setState({ isUploading: false })
    console.error(error)
  }

  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploading: false })
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({ avatarURL: url }))
  }

  renderList = () => {
    return this.state.flights.map(flight => {
      const backgroundImage = { backgroundImage: `url(${flight.imgUrl})` }
      return (
        <article key={flight._id} className="card card-horizontal">
          <div style={backgroundImage} className="card-horizontal-img"></div>
          <div className="card-body">
            <h5 className="card-title">{flight.destination}</h5>
            <p className="card-text">Price: {flight.price} €</p>
          </div>
        </article>
      )
    })
  }

  render() {
    const { background, username, email, status, avatarURL } = this.state
    const backgroundImage = { backgroundImage: `url(${background})` }
    const backgroundAvatar = { backgroundImage: `url(${avatarURL})` }

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
              <div className="avatar" style={backgroundAvatar}></div>
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

                {this.state.isUploading && <p>Loading...</p>}

                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref('images')}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
                {
                  (this.state.progress === 100) ?
                    (this.state.isUpdated) ?
                    <button type="submit" className="btn btn-primary btn-is-success">Great!</button>
                    :
                    <button type="submit" className="btn btn-primary">Update</button>
                  : false
                }
              </form>
            </section>
            <section className="profile-trips">
              {
                (this.state.flights.length) ?
                  <React.Fragment>
                    <h5>Your flights</h5>
                    {this.renderList()}
                  </React.Fragment>
                : <h5>You don't have flights yet!</h5>
              }
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
