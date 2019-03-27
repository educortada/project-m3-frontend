import axios from 'axios';

class PhotosService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.unsplash.com/search/photos?page=1',
    });
  }

  getPhoto(city) {
    return this.api.get(`&query=${city}`, { headers: { 'Authorization': process.env.REACT_APP_API_KEY_UNSPLASH } })
      .then(({ data }) => data)
  }
}

const photosService = new PhotosService();
export default photosService;