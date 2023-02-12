import Nav from "./nav";
import axios, {get} from "axios";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";

interface propsForm {
    update : boolean
}

interface Recipe{
    title : string,
    image : string,
    description: string,
    prep_time: number,
    cooking_time: number,
    id: number,
}
export default function RecipeForm(props :propsForm){

    let update = props.update
    let location = useLocation()

    const navigate = useNavigate()
    const [recipeDetails, setRecipeDetails] = useState<Recipe>({
        title : "",
        image : "",
        description: "",
        prep_time: 0,
        cooking_time: 0,
        id : update ? location.state.update : ''
    });


    function changeHandler(ev: any):void{
        setRecipeDetails({
            ...recipeDetails,
            [ev.target.name] : ev.target.value});
    }
    function newRecipes(){
        let url = 'http://127.0.0.1:8000/api/newRecipes/'
        axios.post(url, recipeDetails)
            .then(function (response){
        }, (error) => {
            })
        navigate('/recipes')
    }

    function modifyRecipe(){
        let url = 'http://127.0.0.1:8000/api/modifyRecipe/' + recipeDetails.id
        axios.put(url, recipeDetails).then(response => response.data)
        navigate('/recipes')
    }


    if(props.update) {

        useEffect(() => {
            function getRecipeDetails() {
                let url = 'http://127.0.0.1:8000/api/recipe/' + recipeDetails.id
                axios.get(url).then(function (response) {
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
                <input type="number" name='prep_time' value={recipeDetails.prep_time} onChange={changeHandler}/>
                <label>Temps de cuisson</label>
                <input type="number" name='cooking_time' value={recipeDetails.cooking_time} onChange={changeHandler}/>

                <button onClick={props.update?modifyRecipe:newRecipes}>Valider</button>
            </form>
        </div>
    )
}