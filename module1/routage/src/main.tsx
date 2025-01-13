import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HomePage,ContactPage,AboutPage,UserPage } from './App.tsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/About",
        element:<AboutPage/>
      },
      {
        path:"/Contact",
        element:<ContactPage/>
      },
      {
          path:"/users/:userId",
          element:<UserPage/>
      }]
    }
  ,
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
