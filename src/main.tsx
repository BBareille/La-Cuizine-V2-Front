import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import Ingredients from "../pages/Ingredients";
import IngredientsForm from "../components/IngredientsForm";

const router = createBrowserRouter([
        {path:'/', element:<App/> },
        {path:'/ingredients', element:<Ingredients/> },
        {path:'/ajoutIngredients', element:<IngredientsForm/> },
        {path:'/modifIngredients', element:<IngredientsForm update={true}/> },
    ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
      <RouterProvider router={router} />
  </div>,
)
