import { useState } from 'react'
import '../style/style.css'





const Flechettes = () => {

    const [form, setForm] = useState({
        nombreJoueurs: "",
        score: "",
        sortie: ""
    })

    const  [troisJoueurs,setTroisJoueurs] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);


        // if (form.nombreJoueurs == 2)

    }

    const handleChange = (e) => {
        setTroisJoueurs(true)

    }

    return <>


        <form onSubmit={handleSubmit}>
            <label htmlFor='NbJoueurs' >Nombre de Joueurs</label>
            <select id="NbJoueurs" >
                <option value="2" >2 Joueur</option>
                <option value="3" onSelect={handleChange}> 3 Joueur</option>
                <option value="4">4 Joueur</option>
            </select>

            <input type='text' placeholder='Nom du Joueur 1' />
            <input type='text' placeholder='Nom du Joueur 2' />
            <input type='text' placeholder='Nom du Joueur 3' style={{display: troisJoueurs==false && "none"}}/>


            <label htmlFor='Score' >Score de départ</label>

            <select id="Score">
                <option value="301">301</option>
                <option value="501">501</option>
                <option value="701">701</option>
                <option value="Saisie-Perso">Personnalisé</option>
            </select>

            <label htmlFor='Sortie' >Type de sortie</label>

            <select id="Sortie">
                <option value="simple">Simple</option>
                <option value="double">Double</option>

            </select>
            <input type="submit" value="Lancer la partie" />
        </form>
    </>
}

export default Flechettes;