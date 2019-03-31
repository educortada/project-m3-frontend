import React, { Component } from 'react'
import photosService from '../lib/photos-service'

// Components
import FavoriteCard from '../components/FavoriteCard'
import ButtonBuy from '../components/ButtonBuy'

class Card extends Component {

  state = {
    status: 'isLoading',
    photoCity: ''
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
          photoCity: photoRandom,
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
    const { status, photoCity } = this.state
    const { adults } = this.props
    const { cityTo, price, fly_duration } = this.props.data

    switch (status) {
      case 'isLoading':
        return <p>Loading</p>
      case 'isLoaded':
        // CSS
        const cardPhoto = {
          backgroundImage: `url(${photoCity})`,
        }
        return (
          <div className="card">
            <div style={cardPhoto} className="card-img-top"></div>
            <div className="card-body">
              <FavoriteCard trip={this.props.data} />
              <h5 className="card-title">{cityTo}</h5>
              <p className="card-text"> Duration: {fly_duration}</p>
              <p className="card-text"> Price: {price}€ 
                <small className="text-muted">{adults} Adults</small>
              </p>
              <ButtonBuy flight={this.props.data} photoCity={photoCity} />

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
