import {useNavigate} from "react-router";

interface propsID{
    id : number
}
export default function ModifyButton(props:propsID){

    let id = props.id
    const navigate = useNavigate();

    function modifyIngredient(){
        navigate('/modifIngredients', {
            state: {
                ingredientId : id,
            }
        })
    }


    return(
        <button onClick={modifyIngredient}>Modifier</button>
    )
}