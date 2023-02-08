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
    async function getIngredientList(): Promise<void>{
        await axios.get('http://127.0.0.1:8000/api/ingredients')
            .then(await function (response) {
                setIngredientList(response.data)
            });
    }
    getIngredientList()
    useEffect(function(){
        getList()
    },[])

    function getList(){
        return (ingredientList.map((item: Ingredient) =>  <li key={item.id}>{item.name.toString()}<ModifyButton id={item.id}/><DeleteButton id={item.id}/></li>))
    }

    if(ingredientList) {
        return (
                <ul>
                    {getList()}
                </ul>
        )
    }

}