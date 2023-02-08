import '../style/nav.css'
import {Link} from "react-router-dom";
export default function Nav() : JSX.Element{


    return (
        <nav>
            <img src="../src/assets/toque.png" />
            <div>
                <Link to={'/'}>Acceuil</Link>
                <Link to={'/ingredients'}>Les ingredients</Link>
                <Link to={'/'}>Les recettes</Link>
                <Link to={'/'}>Se connecter</Link>
            </div>
        </nav>
    )
}