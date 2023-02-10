export default function SearchBar(){

    const style= {
        "height" : "30px",
        "borderRadius" : "35px",
        "border" : "2px solid grey",
        "width" : "400px",
        "padding" : "5px"
    }

    return (
        <form method="post">
            <input style={style} placeholder="Rechercher une recette"/>
        </form>
    )
}