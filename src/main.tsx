import React, {createContext, useContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage'
import './index.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import IngredientsForm from "./components/IngredientsForm";
import Recipes from "./pages/Recipes";
import ConnexionForm from "./pages/ConnexionForm";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";

export const LoginContext = createContext<any>("")


export function Login(){

    const [login, setLogin] = useState()
    const [token, setToken] = useState()

    return (
        <LoginContext.Provider value={{login, setLogin, token, setToken}}>
            <RouterProvider router={router} />
        </LoginContext.Provider>
    )

}

const router = createBrowserRouter([
        {path:'/', element:<Homepage/> },
        {path:'/ingredients', element:<Ingredients/> },
        {path:'/ajoutIngredients', element:<IngredientsForm update={false}/> },
        {path:'/modifIngredients', element:<IngredientsForm update={true}/> },
        {path:'/recipes', element:<Recipes/> },
        {path:'/ajoutRecipes', element:<RecipeForm update={false}/> },
        {path:'/modifRecipe', element:<RecipeForm update={true}/> },
        {path:'/connexion', element:<ConnexionForm/> },
        {path:'/recipeDetails/:id', element:<RecipeDetails/>}
    ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
      <Login/>
  </div>,
)
