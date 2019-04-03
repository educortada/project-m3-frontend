import React, { Component } from 'react'
import { Consumer } from '../App';
import { Link } from 'react-router-dom';

export class FavoritesNavbar extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <React.Fragment>
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-heart"></i> <span>{value.favorites.length}</span> Favorites
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul>
                    {
                      (value.favorites.length > 0)
                        ? value.favorites.map(favorite => {
                          return (
                            <li key={favorite._id}>
                              <Link
                                to={`/favorite/${favorite._id}`}
                                className="dropdown-item favorite-dropdown-item"
                              >
                                <img src={favorite.imgUrl} alt={favorite.destination} />
                                {favorite.destination}
                              </Link>
                            </li>
                          )
                        })
                        : <li className="dropdown-item">You don't have favorites yet!</li>
                    }
                  </ul>
                </div>
              </React.Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}

export default FavoritesNavbar
