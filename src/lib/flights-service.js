import axios from 'axios';

class FlightsService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.skypicker.com/flights?fly_from=BCN&to=LON&date_from=08/08/2019&date_to=08/09/2019&price_to=300&sort=quality&one_for_city=1&',
    });
  }

  getAll() {
    return this.api.get('')
      .then(({ data }) => data)
  }

  // singleBeer(id) {
  //   return this.api.get(`/single/${id}`)
  //     .then(({ data }) => data)
  // }

  // randomBeer() {
  //   return this.api.get('/random')
  //     .then(({ data }) => data)
  // }
  // searchBeers(query){
  //   return this.api.get(`/search?q=${query}`)
  //   .then(({ data }) => data)
  // }
}

const flightsService = new FlightsService();
export default flightsService;