interface Movie {
  id : number;
  title : string;
  director : string;
  duration : number;
  budget ?: number;
  description ?: string;
  imageUrl ?: string;
}

type newMovie = Omit<Movie,"id">;

interface Text {
  id:string;
  content:string;
  level:string;
}

type newText = Omit<Text,"id">;

export type { Movie,newMovie,Text,newText };