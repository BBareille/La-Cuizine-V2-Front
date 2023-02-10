import { useEffect, useState} from "react";
import axios from "axios";
import DeleteButton from "./deleteButton";
import ModifyButton from "./ModifyButton";


export default function RecipesList(): JSX.Element | any{
    interface Ingredient {
        name: string;
        id: number;
    }
    interface Recipes {
        title: string;
        image?: HTMLImageElement;
        prepTime: number;
        cookingTime: number;

        ingredientList: Ingredient;
        id: number;
    }

    const [recipesList, setRecipesList] = useState([]);
    function getRecipesList(): void{
        axios.get('http://127.0.0.1:8000/api/recipes')
            .then(function (response) {
                console.log(response)
            });
    }

    useEffect(function(){
        getRecipesList();
    },[])

    function getList(){
        return (recipesList.map((item: Recipes) =>  <li key={item.id}><div>{item.title.toString()}</div><div><ModifyButton id={item.id}/><DeleteButton id={item.id}/></div></li>))
    }
    console.log(recipesList)


        return (
            <ul>
                {recipesList?getList(): "En cours de chargement"}
            </ul>
        )

}