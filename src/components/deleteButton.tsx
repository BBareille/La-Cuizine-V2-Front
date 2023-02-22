import axios from "axios";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function DeleteButton(props:any){
    const navigate = useNavigate()
    let id = props.id
    let object = props.object
    let token = props.token

    console.log(object)

    function deleteIngredients(){
        let url = 'http://127.0.0.1:8000/api/delete'+object+ "/" +id
        axios({
            method : "DELETE",
            url : url,
            headers : {Authorization : `Bearer ${token}`},
        })
            .then(function(response){
                console.log(response.data)
        })
            .then(function(){
                window.location.reload()
        })


    }

    return(
        <button className='deleteButton' onClick={deleteIngredients}>Supprimer</button>
    )
}