import Nav from "../components/nav";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {LoginContext} from "../main";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useNavigate} from "react-router";

interface responseLogin{
    user: userDetails,
    token : string

}

interface userDetails {
    username : string,
    id: number,
    roles: Array<string>
}
export default function ConnexionForm(){


    const navigate = useNavigate();
    const {setLogin, login, token, setToken} = useContext(LoginContext)
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const [response, setResponse] = useState<responseLogin>()
    async function verifyUser(ev:any){
        ev.preventDefault()
        await axios
            .post('http://localhost:8000/api/login', credentials)
            .then((response)=> {
                setResponse(response.data);
                console.log(response.headers)
                setLogin(response.data.user)
                setToken(response.data.token)
                // navigate("/")

            }).catch(function (error){
                setResponse(error.response.data)
        })

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
            <button type="button" onClick={verifyUser}>Valider</button>
        <div>
            {login? 'Connexion en tant que : '+login: ''}
        </div>
        </form>
        </>
    )
}