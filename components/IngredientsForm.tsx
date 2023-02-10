import Nav from "./nav";
import axios from "axios";
import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";

interface propsForm {
    update : boolean
}
export default function IngredientsForm(props:propsForm){



    const [ingredient, setIngredient] = useState("")
    const [idToUpdate, setIdToUpdate] = useState()
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(function(){
        if(props.update){
            setIdToUpdate(location.state.ingredientId);
        }
    }, [])



    function newIngredient(){
        let url = 'http://127.0.0.1:8000/api/newIngredient/' +ingredient
       axios.post(url, [])
           .then(function (response){
               console.log(response.data);
           })
        navigate('/ingredients')
    }

    function modifyIngredient(){
        let url = 'http://127.0.0.1:8000/api/updateIngredient/'+idToUpdate+ "/" + ingredient
        axios.put(url, [])
            .then(function (response){
                console.log(response.data)
            })
        navigate('/ingredients')
    }

    function changeHandler(ev: any):void{
        setIngredient(ev.target.value);
    }

    return(
        <>
            <Nav/>
        <form>
            <label>{props.update?"Modifier un ingrédient": "Ajouter un ingrédient"}</label>
            <input onChange={changeHandler} />
            <button onClick={props.update?modifyIngredient:newIngredient}>Valider</button>
        </form>
        </>
    )
}