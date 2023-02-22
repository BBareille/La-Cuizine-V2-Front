import {useContext, useEffect, useState} from "react";
import axios from "axios";
import DeleteButton from "./deleteButton";
import ModifyButton from "./ModifyButton";
import {useNavigate} from "react-router";
import {LoginContext} from "../main";
import {Recipes} from "../interfaces/recipes_types";
export default function RecipesList(): JSX.Element | any{

    const navigate = useNavigate();


    const [recipesList, setRecipesList] = useState([]);
    const {login, token} = useContext(LoginContext)
    function getRecipesList(): void{
        axios.get('http://localhost:8000/api/recipes')
            .then(function (response) {
                setRecipesList(response.data)
            });
    }

    useEffect(function(){
        getRecipesList();
    },[])

    function getList(){
        return (recipesList.map((item: Recipes) =>  <li className="recipes" key={item.id}>
            <div onClick={() =>navigate('/recipeDetails/' + item.id)}>
                {item.title}
                <img alt='' src={item.image}/>
            </div>
            {login?<div className='action'>
                <ModifyButton object={'Recipe'} id={item.id} token={token}/>
                <DeleteButton object={'Recipe'} id={item.id} token={token}/></div>: <div></div>}
        </li>))
    }


        return (
            <ul className='recipesList'>
                {recipesList?getList(): "En cours de chargement"}
            </ul>
        )

}