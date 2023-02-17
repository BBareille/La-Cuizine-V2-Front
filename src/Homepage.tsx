import './App.css'
import Nav from "./components/nav";
import IngredientList from "./components/ingredientList";
import SearchBar from "./components/SearchBar";


function Homepage() {

  return(
      <div>
        <Nav />
        <SearchBar/>
      </div>
  )


}

export default Homepage
