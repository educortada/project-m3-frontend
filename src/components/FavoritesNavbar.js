import React, { Component } from 'react'
import { Consumer } from '../App';

export class FavoritesNavbar extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-heart"></i> <span>{value.favorites.length}</span> Favorites
              </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul>
                    {
                      (value.favorites.length > 0)
                        ? value.favorites.map(trip => {
                          return <li key={trip.id} className="dropdown-item">{trip.cityTo}</li>
                        })
                        : <li className="dropdown-item">You don't have favorites yet!</li>
                    }
                  </ul>
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default FavoritesNavbar
