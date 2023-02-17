import { useEffect, useState} from "react";
import axios from "axios";
import DeleteButton from "./deleteButton";
import ModifyButton from "./ModifyButton";
import {useNavigate} from "react-router";


export default function RecipesList(): JSX.Element | any{

    const navigate = useNavigate();
    interface Ingredient {
        name: string;
        id: number;
    }
    interface Recipes {
        title: string;
        image?: string;
        prepTime: number;
        cookingTime: number;

        ingredientList: Ingredient;
        id: number;
    }

    const [recipesList, setRecipesList] = useState([]);
    function getRecipesList(): void{
        axios.get('http://127.0.0.1:8000/api/recipes')
            .then(function (response) {
                setRecipesList(response.data)
            });
    }

    useEffect(function(){
        getRecipesList();
    },[])

    function getList(){
        return (recipesList.map((item: Recipes) =>  <li className="recipes" key={item.id}><div onClick={() =>navigate('/recipeDetails/' + item.id)}>{item.title}<img alt='' src={item.image}/></div><div className='action'><ModifyButton object={'Recipe'} id={item.id}/><DeleteButton object={'Recipe'} id={item.id}/></div></li>))
    }
    console.log(recipesList)


        return (
            <ul className='recipesList'>
                {recipesList?getList(): "En cours de chargement"}
            </ul>
        )

}