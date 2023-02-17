import axios from "axios";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import Nav from "./nav";

export default function RecipeDetails(){

    const params = useParams()
    const [details, setDetails] = useState()
    function getOneRecipe(){
        axios.get('http://localhost:8000/api/recipe/' + params.id)
            .then((response)=>
                setDetails(response.data))

    }

    useEffect(()=>getOneRecipe(), [])

    console.log(details)
    return(
        <div>
        <Nav/>
            {details ?
                <div>
                    <h1>{details.title}</h1>
                    <img src={details.image}/>
                    <p>Temps de préparation: {details.prepTime} mn</p>
                    <p>Temps de cuisson: {details.cookingTime} mn</p>
                </div> : <h1>En cours de chargement</h1>}
                </div>
    )
}