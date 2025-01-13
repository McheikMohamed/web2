import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from "./components/pages/HomePage"
import CinemaPage from "./components/pages/CinemaPage"
import MovieListPage from "./components/pages/MovieListPage"
import AddMoviePage from "./components/pages/AddMoviePage"
import MoviePage from './components/pages/MoviePage'
import App from './components/App'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    
  {
    path:"",
    element:<HomePage/>
  },
  {
    path:"Cinema",
    element:<CinemaPage/>
  },
  {
    path:"MovieList",
    element:<MovieListPage/>
  },
  {
    path:"AddMovie",
    element:<AddMoviePage/>
  },
  {
    path:"movies/:id",
    element:<MoviePage/>
  }
  ]}
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
