import { Movie } from "../../type";
import MovieCard from "./MovieCard";

interface MovieListViewProps{
    movies:Movie[]
}

const MovieListView = ({movies}:MovieListViewProps) =>{
    return(
        <div>
            <ul className="movie-list-view">
                {movies.map((movie)=>(
                    <MovieCard key={movie.title} movie={movie}/>
                ))}
            </ul>
        </div>
    )
}

export default MovieListView;