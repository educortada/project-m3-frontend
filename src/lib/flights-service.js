import axios from 'axios';

class FlightsService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.skypicker.com'
    });
  }

  getAllFlightsFrom(departureCity) {
    return this.api.get(`/flights?&fly_from=${departureCity}&fly_to=LGW,CDG,FCO,BER,AMS,MUC,OPO,ATH,JFK,HND,LAX&date_from=08/08/2019&date_to=08/09/2019&sort=quality&one_for_city=1`)
      .then(({ data }) => data)
  }
}

const flightsService = new FlightsService();
export default flightsService;