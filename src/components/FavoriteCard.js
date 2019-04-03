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
    const isTripInsideFavorites = favoriteList.find(favorite => (
      favorite._id === this.state.idFavorite
    ))
    return isTripInsideFavorites
  }

  handleRemoveFavorite = async (removeFromFavorite) => {
    try {
      await favoriteService.deleteFavoriteById(this.state.idFavorite)
      removeFromFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  handleClickAddToFavorite = async (addFavorite) => {
    try {
      const favorite = await favoriteService.createFavorite(this.props.trip, this.props.adults, this.props.photoCity)
      addFavorite()
      this.setState({ idFavorite: favorite.data._id })
    } catch (error) {
      console.log(error)
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
                    ? <button onClick={() => this.handleRemoveFavorite(value.removeFromFavorite)} className="card-favorite">
                      <i className="fas fa-heart"></i>
                    </button>
                    : <button onClick={() => this.handleClickAddToFavorite(value.addToFavorite)} className="card-favorite">
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
