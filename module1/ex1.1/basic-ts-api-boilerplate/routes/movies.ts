import { Router } from "express";
import {newMovie} from "../types";
import {readAllMovies,readAllMoviesWithMinDuration,readOneMovie,createMovie,deleteMovie,updateMovie} from "../services/movies";

const router = Router();

router.get("/", (req, res) =>{
  const minDuration = Number(req.query["min-duration"]);
  const movies = readAllMoviesWithMinDuration(minDuration);
  return res.json(movies);
});

router.get("/:id", (req,res)=>{

  const id = Number(req.params.id);
  const movie = readOneMovie(id);
  if(!movie)
    return res.sendStatus(404);
  return res.json(movie);
});

router.post("/", (req,res)=>{

  const body: unknown = req.body;
  if(
    !body||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body)||
    !("duration" in body)||
    (("budget" in body) && ((typeof body.budget !== "number") || (Number(body.budget) <= 0)))||
    (("description" in body)&& ((typeof body.description !== "string") || !(String(body.description).trim()))) ||
    (("imageUrl" in body) && ((typeof body.imageUrl !== "string") || !(String(body.imageUrl).trim()))) ||
    typeof body.title !== "string"||
    typeof body.director !== "string"||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 
  ){
    return res.sendStatus(400);
  }

  const { title,director,duration,budget,description,imageUrl } = body as newMovie;
  
  const newMovie = createMovie({title,director,duration,budget,description,imageUrl});
  return res.json(newMovie);
  });

router.delete("/:id",(req,res)=>{
  const id = Number(req.params.id);
  const movie = deleteMovie(id);
  if(!movie){
    return res.sendStatus(404);
  }
  return res.json(movie);
  
});

router.patch("/:id",(req,res)=>{

  const id = Number(req.params.id);

  const body: unknown = req.body;

  if(
    !body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim()) ) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim()))||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ){
    return res.sendStatus(400);
  }

  const {title,director,duration,budget,description,imageUrl}:Partial<newMovie> = body;
  const updatedmovie = updateMovie(id,{title,director,duration,budget,description,imageUrl});

  if(!updatedmovie){
    res.sendStatus(404);
  }
  return res.json(updatedmovie);
});

router.put("/:id",(req,res)=>{
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);
  const movie = readOneMovie(id);
  

  if (!movie){
    const newMovie = body as newMovie;
    const movies = readAllMovies();

    const existingMovie = movies.find((movie)=>
    movie.title.toLowerCase() === newMovie.title.toLowerCase() && 
    movie.director.toLowerCase() === newMovie.director.toLowerCase());

    if (existingMovie){
      res.sendStatus(409);
    }

  const addedMovie = createMovie(newMovie);
  return res.json(addedMovie);
}

const {title,director,duration,budget,description,imageUrl} = body as Partial<newMovie>;
const updatedmovie = updateMovie(id,{title,director,duration,budget,description,imageUrl});

if(!updatedmovie){
  res.sendStatus(404);
}
return res.json(updatedmovie);
});


export default router;
