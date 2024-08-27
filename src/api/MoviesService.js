import axios from 'axios';

const API_KEY = '8aeba2e87c0fce98045cf2ef645a31ce';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesServices {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    static getMovieById(id){
        return axios(withBaseUrl(`movies/$(id)`));
    }
}