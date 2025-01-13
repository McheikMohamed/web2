import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import MovieListPage from './components/pages/MovieListPage'
import CinemaPage from './components/pages/CinemaPage'
import HomePage from './components/pages/HomePage'
import AddMoviePage from './components/pages/AddMoviePage'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/Cinema",
        element:<CinemaPage/>
      },
      {
        path:"/Movies",
        element:<MovieListPage/>
      },
      {
        path:"/AddMovie",
        element:<AddMoviePage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
