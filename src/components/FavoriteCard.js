import React, { Component } from 'react'
import favoriteService from '../lib/favorite-service'

// Context
import { Consumer } from '../App';

export class FavoriteCard extends Component {

  state = {
    idFavorite: '',
  }

  // Si el id de del trip està dins de l'array favorites --> isTripInsideFavorites: true
  handleIsTripInsideFavorite = (favoriteList) => {
    const isTripInsideFavorites = favoriteList.find(trip => (
      trip.id === this.props.trip.id
    ))
    return isTripInsideFavorites
  }

  handleRemoveFavorite = (removeFromFavorite, favoriteList) => {
    const updateFavorites = favoriteList.filter(trip => {
      return this.props.trip.id !== trip.id
    })
    removeFromFavorite(updateFavorites)
    favoriteService.deleteFavoriteById(this.state.idFavorite)
  }

  handleClickAddToFavorite = async (addFavorite, getFavoriteIdDetail) => {
    addFavorite(this.props.trip)
    try {
      const favorite = await favoriteService.createFavorite(this.props.trip, this.props.adults, this.props.photoCity)
      getFavoriteIdDetail(favorite.data._id)

      this.setState({
        idFavorite: favorite.data._id,
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <React.Fragment>
                {
                  (this.handleIsTripInsideFavorite(value.favorites))
                    ? <button onClick={() => this.handleRemoveFavorite(value.removeFromFavorite, value.favorites, value.getFavoriteIdDetail)} className="card-favorite">
                      <i className="fas fa-heart"></i>
                    </button>
                    : <button onClick={() => this.handleClickAddToFavorite(value.addToFavorite, value.getFavoriteIdDetail)} className="card-favorite">
                      <i className="far fa-heart"></i>
                    </button>
                }
              </React.Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}

export default FavoriteCard
