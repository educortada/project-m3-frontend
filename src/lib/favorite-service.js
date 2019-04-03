import axios from 'axios'

class FavoritesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  createFavorite = (flight, adults, photoCity) => {
    const favorite = { flight, adults, photoCity }
    return this.api.post('/favorite/create', favorite)
      .then((data) => data)
  }

  getFavorites = () => {
    return this.api.get('/favorite/get')
      .then(({ data }) => data)
  }

  getFavoriteById = (id) => {
    return this.api.get(`favorite/detail/${id}`)
      .then(({ data }) => data)
  }

  deleteFavoriteById = (id) => {
    return this.api.delete(`favorite/detail/${id}`)
    .then(({ data }) => data)
  }
}

const favoritesService = new FavoritesService()

export default favoritesService