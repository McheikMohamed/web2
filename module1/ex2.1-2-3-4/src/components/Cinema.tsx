import { Movie } from "../../types.ts"
import MovieItem from "./MovieItem.tsx"

interface CinemaProps{
    name:string,
    movies:Movie[]
}



const Cinema = (props : CinemaProps) =>{
    return(
      <div>
        <h2>{props.name}</h2>
          <ul>
           {props.movies.map((movie)=>(
            <MovieItem key={movie.title} movie={movie}/>
           ))}
          </ul>
      </div>
    )
  }

  export default Cinema;
