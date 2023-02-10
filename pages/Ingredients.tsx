import IngredientList from "../components/ingredientList";
import Nav from "../components/nav";
import {Link} from "react-router-dom";
import "../style/ingredientsList.css"
export default function Ingredients(){


    return (
        <>
            <Nav/>
            <div id='ingredients'>
                <h1>Les Ingrédients</h1>
                <IngredientList />
                <Link to="/ajoutIngredients">Ajouter un ingrédients</Link>
            </div>
        </>
    )
}