import Nav from "../components/nav";
import {Link} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RecipesList from "../components/RecipesList";
import "../style/recipesList.css";
export default function Recipes(){


    return (
        <>
            <Nav/>
            <div id='recipes'>
                <SearchBar/>
                <h1>Les Recettes</h1>
                <RecipesList/>
                <Link to="/ajoutRecipes">Ajouter une recettes</Link>
            </div>
        </>
    )
}