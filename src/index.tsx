
// --- IMPORT ----

import React          from "react";
import ReactDOM       from "react-dom";
import { useState }   from "react";

import '../src/styles/style.css';

export type address = {

    nom   : string;
    mail  : string;

};
// ---------------



// --- LOGIQUE ---
const App: React.FC = () => {

    const [nom, setNom]            = useState('');
    const [mail, setMail]          = useState('');
    const [adresses, setAdresses]  = useState<address[]>([]);


    const submitFonction = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const newAddress : address = {
            nom,
            mail,
        };         

        setAdresses([...adresses, newAddress]);
        setNom('');
        setMail('');
    };


    return (
        <div>
            <h1> - C.R.M - </h1>
            <form 
                onSubmit={submitFonction}
                className='formulaire'
            >
                <p className="client">
                    Entrer les coordonnées de votre client :
                </p>

                <label htmlFor="nom">
                    Nom :
                </label>
                <input value={nom}
                       onChange={e => setNom(e.target.value)}
                       id="nom"
                />

                <br />
                <br />
                <br />

                <label htmlFor="email">
                    E-mail :
                </label>
                <input value={mail}
                       onChange={e => setMail(e.target.value)}
                       id="email"
                />

                <br />
                <br />

                <button type="submit">
                    Ajouter
                </button>
            </form>
            <hr />

            <p className="address">
                Mes adresses :
            </p>

            {adresses.length > 0 && (
            <ul>
                {adresses.map((el) => ( 
                    <li key={el.mail}>
                         {el.nom} : {el.mail}
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
