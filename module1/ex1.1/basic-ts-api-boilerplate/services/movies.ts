import path from "node:path";
import { Movie, newMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultMovies: Movie[] = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      duration: 142,
      budget: 25000000,
      description: "Two imprisoned",
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      duration: 175,
      budget: 6000000,
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      budget: 185000000,
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      id: 4,
      title: "12 Angry",
      director: "Sidney Lumet",
      duration: 96,
      budget: 350000,
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    }
  ];

  function readAllMovies(): Movie[]{
    const movies = parse(jsonDbPath,defaultMovies);
        return movies;
    
  }

  function readAllMoviesWithMinDuration(dureeMin:number): Movie[]{
    const movies = parse(jsonDbPath,defaultMovies);
    if(!dureeMin){
        return movies;
    }

    const dureeMinNumber = Number(dureeMin);
    
    const filteredMovies = movies.filter((movie)=>{
        return (movie.duration >= dureeMinNumber);
    });
    return filteredMovies;
  }

  function readOneMovie(id:number):Movie|undefined{
    const movies = parse(jsonDbPath,defaultMovies);
    const movie = movies.find((movie)=> movie.id === id);
    if(!movie){
        return undefined;
    }
    return movie;
  }

  function createMovie(newMovie: newMovie):Movie{
    const movies = parse(jsonDbPath,defaultMovies);

    const nextID = movies.reduce((maxID,movie)=> (movie.id > maxID ? movie.id : maxID),0)+1;

    const createdMovie = {
        id:nextID,
        ...newMovie
    };

    movies.push(createdMovie);
    serialize(jsonDbPath,movies);
    return createdMovie;
  }

  function deleteMovie(id : number):Movie|undefined{
    const movies = parse(jsonDbPath,defaultMovies);
    const indexMovieToDelete = movies.findIndex((movie)=> movie.id === id);

    if(indexMovieToDelete < 0){
        return undefined;
    }

    const deletedMovie = movies.splice(indexMovieToDelete,1);
    serialize(jsonDbPath,movies);
    return deletedMovie[0];
  }

  function updateMovie(id : number, newMovie: Partial<newMovie>):Movie|undefined{

    const movies = parse(jsonDbPath,defaultMovies);
    const movie = movies.find((movie)=>{
        movie.id === id;
    });

    if(!movie){
        return undefined;
    }

    const updatedMovie = {...movie,...newMovie};
    movies[id] = updatedMovie;
    serialize(jsonDbPath,movies);
    return updatedMovie;
  }

  export {
    readAllMovies,
    readAllMoviesWithMinDuration,
    readOneMovie,
    createMovie,
    deleteMovie,
    updateMovie
  };