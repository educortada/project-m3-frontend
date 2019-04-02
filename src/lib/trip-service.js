import axios from 'axios'

class TripService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  createTrip = (flight, adults, photoCity) => {
    const trip = { flight, adults, photoCity }
    return this.api.post('/trip/create', trip)
      .then((data) => console.log(data))
  }

  getFlights = () => {
    return this.api.get('/trip/flights')
      .then(({ data }) => data)
  }
}

const tripService = new TripService()

export default tripService