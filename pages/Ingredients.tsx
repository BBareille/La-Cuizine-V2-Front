import IngredientList from "../components/ingredientList";
import Nav from "../components/nav";
import {Link} from "react-router-dom";

export default function Ingredients(){


    return (
        <>
            <Nav/>
            <div id='ingredients'>
                Les Ingrédients
                <IngredientList />
                <Link to="/ajoutIngredients">Ajouter un ingrédients</Link>
            </div>
        </>
    )
}