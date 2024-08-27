import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem movie={m.id} title={m.title} />)}
        </ul>
    </section>
)