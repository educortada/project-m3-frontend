import axios from 'axios';

class FlightsService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.skypicker.com'
    });
    this.startFrom = ''
    this.startTo = ''
    this.returnFrom = ''
    this.returnTo = ''
    this.departureCity = ''
    this.adults = ''
  }

  getAllFlightsFrom = () => {
    return this.api.get(`/flights?&fly_from=${this.departureCity}&fly_to=LGW,CDG,FCO,BER,AMS,MUC,OPO&date_from=${this.startFrom}&date_to=${this.startTo}&return_from=${this.returnFrom}&return_to=${this.returnTo}&adults=${this.adults}&sort=quality&one_for_city=1&max_stopovers=0`)
      .then(({ data }) => data)
  }
}

const flightsService = new FlightsService();

export default flightsService;
