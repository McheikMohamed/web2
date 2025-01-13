import { useEffect, useState } from 'react'
import './App.css'

interface Joke{
  joke:string,
  categorie:string
}

function App() {
const [joke,setJoke] = useState<Joke|undefined>(undefined);

const fetchJoke = () =>{
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    setJoke({
      joke:data.joke ?? "No joke found",
      categorie:data.category ?? "Unknown"
    })
  })
}


useEffect(()=>{
  const interval = setInterval(()=>{
    fetchJoke();
  },10000)

  return () => clearInterval(interval);
},[])


if(!joke){
  return <p>Loading...</p>
}
  
  return (
    <>
      <h2>Random Joke</h2>  
      <h3>{joke.categorie}</h3>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>{joke.joke}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </>
  )
}

export default App
