import { useEffect, useState} from "react";
import axios from "axios";
import DeleteButton from "./deleteButton";
import ModifyButton from "./ModifyButton";


export default function IngredientList(): JSX.Element | any{

    interface Ingredient {
        name: string;
        id: number;
    }

    const [ingredientList, setIngredientList] = useState([]);
    function getIngredientList(): void{
        axios.get('http://127.0.0.1:8000/api/ingredients')
            .then(function (response) {
                setIngredientList(response.data)
            });
    }

    useEffect(function(){
        getIngredientList();
    },[])

    function getList(){
        return (ingredientList.map((item: Ingredient) =>  <li key={item.id}><div>{item.name.toString()}</div><div><ModifyButton object={'Ingredients'} id={item.id}/><DeleteButton object={'Ingredient'} id={item.id}/></div></li>))
    }

    if(ingredientList) {
        return (
                <ul>
                    {getList()}
                </ul>
        )
    }

}