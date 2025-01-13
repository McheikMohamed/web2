import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../../type";
import AddMovieForm from "../AddMovieForm";
import TitlePage from "../TitlePage";

const AddMoviePage = ()=>{
    const {onMovieAdded}: MovieContext = useOutletContext();

    return(
        <div>
            <TitlePage title="Add a movie"/>
            <AddMovieForm onMovieAdded={onMovieAdded}/>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default AddMoviePage;