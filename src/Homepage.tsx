import './App.css'
import Nav from "./components/nav";
import IngredientList from "./components/ingredientList";
import SearchBar from "./components/SearchBar";

function testToken(){
    let tokenA = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzY5OTI3NzcsImV4cCI6MTY3Njk5NjM3Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJvb3QxMCJ9.CJYGlfWMK3gfOQOBzTdaPCJp5DbTOPaZObyl--mYuyfwmTSQPiXHBu2zsMGIpw78jtwyQgOOQyEeUUg_PtIyJFYSlW3gCQAIoHz-w9WIbbAsbjNZ3EkodMHcOkrxkD6gLygQS5aUk4xehrJkAy-qkXzibdEOqR-ze4UJrRiHxR08IiihqwF5jbsBNJPtaeMF3thAbOH9qq5MXsgbGY4ZrJXnBUbeS_q5ZrsK7bbg8yo05FXP3QnywJ2rOZYEt5lT4ofLTwhnBowN41sHpkQpK9N7fX0lUR_oejRaSZF-K5633uYg5S-VXGltFpqFG6h4rONqhvuhnF7QBo2b5zukMg"
    let tokenB = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzY5OTI3NzcsImV4cCI6MTY3Njk5NjM3Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJvb3QxMCJ9.CJYGlfWMK3gfOQOBzTdaPCJp5DbTOPaZObyl--mYuyfwmTSQPiXHBu2zsMGIpw78jtwyQgOOQyEeUUg_PtIyJFYSlW3gCQAIoHz-w9WIbbAsbjNZ3EkodMHcOkrxkD6gLygQS5aUk4xehrJkAy-qkXzibdEOqR-ze4UJrRiHxR08IiihqwF5jbsBNJPtaeMF3thAbOH9qq5MXsgbGY4ZrJXnBUbeS_q5ZrsK7bbg8yo05FXP3QnywJ2rOZYEt5lT4ofLTwhnBowN41sHpkQpK9N7fX0lUR_oejRaSZF-K5633uYg5S-VXGltFpqFG6h4rONqhvuhnF7QBo2b5zukMg"

    if(tokenA == tokenB){
        return true
    }
    return false

}

console.log(testToken())
function Homepage() {
  return(
      <div>
        <Nav />
        <SearchBar/>
      </div>
  )


}

export default Homepage
