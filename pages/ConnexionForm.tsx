import Nav from "../components/nav";

export default function ConnexionForm(){


    return (
        <>
        <Nav/>

        <form>
            <label>Nom d'utilisateur</label>
            <input name="userId"/>
            <label>Mot de passe</label>
            <input name="password"/>
            <button>Valider</button>
        </form>
        </>
    )
}