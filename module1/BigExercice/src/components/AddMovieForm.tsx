import { SyntheticEvent,useState } from "react";
import { NewMovie } from "../../type";

interface AddMovieFormProps{
    onMovieAdded: (movie:NewMovie)=>void
}
const AddMovieForm = ({onMovieAdded}:AddMovieFormProps)=>{

    const [title,setTitle] = useState("")
    const [director,setDirector] = useState("")
    const [duration,setDuration] = useState(0)
    const [imageUrl,setImageUrl] = useState("")
    const [description,setDescription] = useState("")
    const [budget,setBudget] = useState(0)

    const handleSubmit = (e:SyntheticEvent)=>{
        e.preventDefault();
        onMovieAdded({title,director,duration,imageUrl,description,budget})
        setTitle("");
        setDirector("");
        setDuration(0);
        setImageUrl("");
        setDescription("");
        setBudget(0);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label >Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div>
                <label>Realisateur</label>
                <input type="text" value={director} onChange={(e)=>setDirector(e.target.value)}  required/>
            </div>
            <div>
                <label >Duration</label>
                <input type="number" value={duration} onChange={(e)=>setDuration(parseInt(e.target.value)) } required />
            </div>
            <div>
                <label >ImageUrl</label>
                <input type="text" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
            </div>
            <div>
                <label >Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div>
                <label >Budget</label>
                <input type="number" value={budget} onChange={(e)=>setBudget(parseInt(e.target.value))} />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddMovieForm;