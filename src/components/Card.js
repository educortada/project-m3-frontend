import React, { Component } from 'react'
import photosService from '../lib/photos-service'

// Components
import Button from '../components/Button'
class Card extends Component {

  state = {
    status: 'isLoading',
    photoUrl: ''
  }

  randomNumber(Arraylength) {
    return Math.floor(Math.random() * Arraylength)
  }

  componentDidMount = async () => {
    try {
      const { cityTo } = this.props.data
      const api = await photosService.getPhoto(cityTo)
      const photoRandom = api.results[this.randomNumber(api.results.length)].urls.small
      this.setState(
        {
          photoUrl: photoRandom,
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

  render() {
    const { status, photoUrl } = this.state
    const { cityTo, price, fly_duration } = this.props.data

    switch (status) {
      case 'isLoading':
        return <p>Loading</p>
      case 'isLoaded':
        // CSS
        const cardPhoto = {
          backgroundImage: `url(${photoUrl})`,
        }
        return (
          <div className="card">
            <div style={cardPhoto} className="card-img-top"></div>
            <div className="card-body">
              <h5 className="card-title">{cityTo}</h5>
              <p className="card-text"> Duration: {fly_duration}</p>
              <p className="card-text"> Price: {price}€</p>
              <Button>See more about {cityTo}</Button>
            </div>
          </div>
        )
      case 'hasError':
        return 'Error!'
      default:
        break;
    }
  }
}

export default Card
