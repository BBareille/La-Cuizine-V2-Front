import '../../style/nav.css'
import {Link} from "react-router-dom";
import toque from '../assets/toque.png'
import {useContext, useEffect} from "react";
import {LoginContext} from "../main";
export default function Nav() : JSX.Element{


    const {login} = useContext(LoginContext)

    useEffect(()=> console.log(login), [])

    return (
        <nav>
            <img src={toque} />
            <div>
                <Link to={'/'}>Acceuil</Link>
                <Link to={'/ingredients'}>Les ingredients</Link>
                <Link to={'/recipes'}>Les recettes</Link>
                <Link to={'/connexion'}>{login? login: 'Se connecter'}</Link>
            </div>
        </nav>
    )
}