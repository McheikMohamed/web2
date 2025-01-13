import MovieListView from "../MovieListView";
import TitlePage from "../TitlePage";
import { MovieContext } from "../../../type";
import { useOutletContext } from "react-router-dom";

const MovieListPage = ()=>{
    const {movies}:MovieContext = useOutletContext();

    return(
        <div>
            <TitlePage title="My fav Movies"/>
            <MovieListView movies={movies}/>
            
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default MovieListPage;