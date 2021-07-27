import { request, singleRequest } from "./helpers";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c79ebc5a4bb0dc4a78ae7b9d9db9a8b5";
const LANGUAGE = "en-US";

export const getTrendingMovies = async () => {
    return request(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const getSearchMovies = async (query) => {
    return request(`${BASE_URL}search/movie?language=${LANGUAGE}&query=${query}&api_key=${API_KEY}`);
};


export const getMoviesInformation = (movieId) => {
    return singleRequest(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=reviews,credits`);
};