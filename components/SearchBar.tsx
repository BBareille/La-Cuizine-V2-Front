import axios from "axios";
import {useState} from "react";

export default function SearchBar(){

    const [recipeToSearch, setRecipeToSearch] = useState('');
    const [list, setList] = useState([])

    const style= {
        "height" : "30px",
        "borderRadius" : "35px",
        "border" : "2px solid grey",
        "width" : "400px",
        "padding" : "5px"
    }

    function searchRecipes(){
        //let url = '127.0.0.1:8000/api/searchRecipe/'
        axios.get('http://127.0.0.1:8000/api/searchRecipe/'  + recipeToSearch)
            .then(function (response){
            setList(response.data)
                console.log(list)
        })

    }

    function changeHandler(ev: any){
        // console.log(ev.target.value)
        setRecipeToSearch((search) => {
            setRecipeToSearch(ev.target.value)
            searchRecipes()
            return ev.target.value;
        });
    }

    //useEffect(() => searchRecipes(),[])

    return (
        <form method="post">
            <input value={recipeToSearch} onChange={changeHandler} style={style} placeholder="Rechercher une recette"/>
            <ul>
                {list?
                    list.map(item => {
                    return <li>{item}</li>
                }):""}

            </ul>
        </form>
    )
}