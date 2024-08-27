import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { MoviesServices } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie , setMovie] = useState({});
    const fetchMovie = async () => {
        const { data } = await MoviesServices.getMovieByid();
        setMovie(data);
        console.log(data);
    }

    useEffect(() => {
        fetchMovies();
    },[]);

    return (
        <>
        <h1>{movie.title}</h1>
        <article>
            {movie.overview}
        </article>
        </>
    )

}