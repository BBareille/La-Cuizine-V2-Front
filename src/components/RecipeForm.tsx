import Nav from "./nav";
import axios from "axios";
import {useLocation, useNavigate} from "react-router";
import {useContext, useEffect, useState} from "react";
import "../../style/recipesForm.css"
import {LoginContext} from "../main";
import {Recipe} from "../interfaces/recipes_types";

interface propsForm {
    update : boolean
}
export default function RecipeForm(props :propsForm){

    let update = props.update
    let location = useLocation()
    let {token} = useContext(LoginContext)


    const navigate = useNavigate()
    const [recipeDetails, setRecipeDetails] = useState<Recipe>({
        title : "",
        image : "",
        description: "",
        prep_time: "",
        cooking_time: "",
        id : update ? location.state.ingredientId : ''
    });

    function changeHandler(ev: any):void{
        setRecipeDetails({
            ...recipeDetails,
            [ev.target.name] : ev.target.value});
    }
    function newRecipes(){
        let url = 'http://localhost:8000/api/newRecipes'
        axios.post(url, recipeDetails, {headers : {Authorization : "Bearer " + token}} )
            .then(function (response){
                console.log(response)
        }, (error) => {
                console.log(error)
            })
        navigate('/recipes')
    }

    function modifyRecipe(){
        let url = 'http://localhost:8000/api/modifyRecipe/' + recipeDetails.id
        axios.put(url, recipeDetails, {headers : {Authorization : "Bearer " + token}}).then(response => response.data)
        navigate('/recipes')
    }


    if(props.update) {

        useEffect(() => {
            function getRecipeDetails() {
                let url = 'http://localhost:8000/api/recipe/' + recipeDetails.id
                axios.get(url).then(function (response) {
                    console.log(response.data)
                    setRecipeDetails(response.data)
                })
            } getRecipeDetails()
        }, [])
    }


    return (
        <div>
            <Nav/>
            <h1>{!update?'Nouvelle recettes':'Modification de la recette'}</h1>
            <form>
                <label>Titre de la recette</label>
                <input name="title" value={recipeDetails.title} onChange={changeHandler}/>
                <label>Url de l'image</label>
                <input name='image' value={recipeDetails.image} onChange={changeHandler}/>
                <label>Temps de préparation</label>
                <input type='number' name='prep_time' value={recipeDetails.prep_time} onChange={changeHandler}/>
                <label>Temps de cuisson</label>
                <input type='number' name='cooking_time' value={recipeDetails.cooking_time} onChange={changeHandler}/>
                {/*<label>Description</label>*/}
                {/*<textarea name='description'/>*/}

                <button type="button" onClick={props.update?modifyRecipe:newRecipes}>Valider</button>
            </form>
        </div>
    )
}