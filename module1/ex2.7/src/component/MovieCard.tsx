import {Movie} from "../../type"
import "./MovieCard.css"

interface MovieCardProps{
    movie:Movie
}


const MovieCard = ({movie}:MovieCardProps)=>{

    return(
        <div className="card">
            <div className="card-body">
                <h3 className="card-title"> {movie.title} </h3>
                {movie.imageUrl && (
                    <img src={movie.imageUrl} className="card-image-top" alt={movie.title} />
                )}
                <p className="card-text">
                    <strong>Realisateur : </strong> {movie.director}
                </p>
                <p className="card-text"> <strong> Duree : </strong> {movie.duration}
                </p>
            
                {movie.budget && (
                    <p className="card-text"> <strong>Budget : </strong> {movie.budget} millions de dollars </p>
                )}
                {movie.description && (
                    <p className="card-text"><strong>Description : </strong> {movie.description} </p>
                )}
            </div>
        </div>
    )

}

export default MovieCard;