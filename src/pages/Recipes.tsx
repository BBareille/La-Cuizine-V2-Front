import Nav from "../components/nav";
import {Link} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RecipesList from "../components/RecipesList";
import "../../style/recipesList.css";
import {useContext} from "react";
import {LoginContext} from "../main";
export default function Recipes(){

    const {login, token} = useContext(LoginContext)
    console.log(login, token)

    return (
        <>
            <Nav/>
            <div id='recipes'>
                <SearchBar/>
                <h1>Les Recettes</h1>
                <RecipesList/>
                {login?<Link to="/ajoutRecipes">Ajouter une recettes</Link>:"Connectez vous pour" +
                    " ajoutez une nouvelle recettes"}
            </div>
        </>
    )
}