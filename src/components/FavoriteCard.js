import React, { Component } from 'react'

// Context
import { Consumer } from '../App';

export class FavoriteCard extends Component {

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
                    ? <button onClick={() => this.handleRemoveFavorite(value.removeFromFavorite, value.favorites)} className="card-favorite">
                      <i className="fas fa-heart"></i>
                    </button>
                    : <button onClick={() => value.addToFavorite(this.props.trip)} className="card-favorite">
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
