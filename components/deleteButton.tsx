import axios from "axios";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function DeleteButton(props:any){
    const navigate = useNavigate()
    let id = props.id

    function deleteIngredients(){
        let url = 'http://127.0.0.1:8000/api/deleteIngredient/' + id
        axios.delete(url).then(function(response){
            console.log(response.data)
        })

        navigate('/ingredients')
    }

    return(
        <button onClick={deleteIngredients}>Supprimer</button>
    )
}