import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";



function App() {

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
  useEffect(function(){
    getIngredientList()
  },[])

  function getList(){
    for(let item in ingredientList){
     return (ingredientList.map((item: Ingredient) =>  <li>{item.name.toString()}</li>))
    }

  }

  if(ingredientList) {
    return (
        <div className="App">
          <ul>
          {getList()}
          </ul>
        </div>
    )
  }


}

export default App
