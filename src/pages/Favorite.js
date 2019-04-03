import React, { Component } from 'react'
import favoriteService from '../lib/favorite-service'
import moment from 'moment';

class Favorite extends Component {

  state = {
    favoriteData: '',
    status: 'isLoading',
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params
    try {
      const detailFavorite = await favoriteService.getFavoriteById(id)
      this.setState({
        favoriteData: detailFavorite,
        status: 'isLoaded',
      })

    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error);
    }
  }

  render() {
    const { imgUrl, destination, price, adults, startFrom, startTo, returnFrom, returnTo } = this.state.favoriteData
    const backgroundImage = { backgroundImage: `url(${imgUrl})` }
    const { status } = this.state

    switch (status) {
      case 'isLoading':
        return (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      case 'isLoaded':
        return (
          <article className="card card-horizontal">
            <div style={backgroundImage} className="card-horizontal-img"></div>
            <div className="card-horizontal-content">

              <div className="card-horitzontal-header">
                <h5 className="card-horizontal-title">{destination}</h5>
                <p className="card-horizontal-adults">{adults} Adults</p>
                <p className="card-horizontal-price">{price}€</p>
              </div>

              <div className="card-horitzontal-body">
                <div className="card-outband">
                  <i className="fas fa-plane"></i>
                  <div className="card-outband-schedule">{moment.unix(startFrom).format("DD/MM LT")}</div>
                  <div className="card-outband-schedule">{moment.unix(startTo).format("DD/MM LT")}</div>
                </div>

                <div className="card-return">
                  <i className="fas fa-plane"></i>
                  <div className="card-return-schedule">{moment.unix(returnFrom).format("DD/MM LT")}</div>
                  <div className="card-return-schedule">{moment.unix(returnTo).format("DD/MM LT")}</div>
                </div>
              </div>

            </div>
          </article>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }
  }
}

export default Favorite
