import Nav from "../components/nav";
import {useContext, useState} from "react";
import axios from "axios";
import {LoginContext} from "../main";

interface responseLogin{
    message : string,
    user: string
}
export default function ConnexionForm(){

    const {setLogin, login} =useContext(LoginContext)
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const [response, setResponse] = useState<responseLogin>()
    function verifyUser(ev:any){
        ev.preventDefault()
        axios.post('http://localhost:8000/api/login', credentials)
            .then((response)=> {
                setResponse(response.data);

            })
        if(response) {
            setLogin(response.user)
        }
    }

    function changeHandler(ev: any):void{

        setCredentials({
            ...credentials,
            [ev.target.name] : ev.target.value});

    }

    return (
        <>
        <Nav/>

        <form>
            <label>Nom d'utilisateur</label>
            <input name="username" onChange={changeHandler}/>
            <label>Mot de passe</label>
            <input type="password" name="password" onChange={changeHandler}/>
            <button onClick={verifyUser}>Valider</button>
            <div>
            {response?response.message: ""}
            </div>
        <div>
            {response? 'Connexion en tant que : '+response.user: ''}
        </div>
        </form>
        </>
    )
}