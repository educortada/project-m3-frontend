import React, { Component } from 'react'
import photosService from '../lib/photos-service'
import moment from 'moment';

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
    const { cityTo, price, dTime, aTime, nightsInDest, route, routes } = this.props.data

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

              <div className="card-header">
                <h4 className="card-title">{cityTo}</h4>
                <p className="card-nights">{nightsInDest} nights</p>
                <div className="wrap-price-adults">
                  <p className="card-price"> {price}€</p>
                  <p className="card-adults">{adults} Adults</p>
                </div>
              </div>

              <div className="card-outband">
                <span className="route-code">{routes[0].map(route => route)}</span>
                <i className="fas fa-plane"></i>
                <div className="card-outband-schedule">{moment.unix(dTime).format("DD/MM LT")}</div>
                <div className="card-outband-schedule">{moment.unix(aTime).format("DD/MM LT")}</div>
              </div>

              <div className="card-return">
                <span className="route-code">{routes[1].map(route => route)}</span>
                <i className="fas fa-plane"></i>
                <div className="card-return-schedule">{moment.unix(route[1].dTime).format("DD/MM LT")}</div>
                <div className="card-return-schedule">{moment.unix(route[1].aTime).format("DD/MM LT")}</div>
              </div>

              <ButtonBuy flight={this.props.data} adults={adults} photoCity={photoCity} />

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
