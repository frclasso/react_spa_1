import {useEffect, useState} from "react";
import { MoviesServices } from "../api/MoviesService";
import { MovieList } from "../components/MoviesList";
import {MoviesContainer} from "../styles/MoviesContainer";

export const Home = () => {
    const [movies , setMovies] = useState([]);
    const fetchMovies = async () => {
        const { data } = await MoviesServices.getMovies();
        setMovies(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchMovies();
    },[]);
    return (
        <MoviesContainer>
            <MovieList movies={movies} />
        </MoviesContainer>
    )
}