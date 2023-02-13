import {useNavigate} from "react-router";

interface propsID{

    object : string
    id : number
}
export default function ModifyButton(props : propsID){

    let id = props.id
    let object = props.object
    const navigate = useNavigate();

    function modifyIngredient(){
        let url = "/modif" + object
        navigate(url, {
            state: {
                ingredientId : id,
            }
        })
    }


    return(
        <button className='modifyButton' onClick={modifyIngredient}>Modifier</button>
    )
}