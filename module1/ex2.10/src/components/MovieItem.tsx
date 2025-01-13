import {Movie} from "../../type"
import { useState } from "react"

interface MovieItemProps{
    movie:Movie
}

const MovieItem = ({movie}: MovieItemProps) =>{
    const [descriptionVisible,setDescriptionVisible]= useState(false);
    return(
        <li onClick={()=> setDescriptionVisible(!descriptionVisible)}>
            <p>
                <strong> {movie.title} </strong> - Realisateur : {movie.director}
            </p>
            <p> {descriptionVisible ? <i>{movie.description}</i>:null} </p>
        </li>
    )
}

export default MovieItem;