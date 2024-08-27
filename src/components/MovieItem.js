import { Link } from "react-router-dom";

export const MovieItem = ({ title, id }) => (
    <li>
        <Link to={`movie/$movie.id`}>{movie.title}</Link>
    </li>
);