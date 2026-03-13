import { useState } from 'react'
import '../style/style.css'





const Flechettes = () => {

    const [form, setForm] = useState({
        nombreJoueurs: "",
        nomJoueur1: "",
        nomJoueur2: "",
        nomJoueur3: "",
        nomJoueur4: "",
        score: "",
        sortie: ""
    })

    const [troisJoueurs, setTroisJoueurs] = useState(false)
    const [quatreJoueurs, setQuatreJoueurs] = useState(false)
    const [scorePerso, setScorePerso] = useState(false)
    const [mauvaisScore, setMauvaisScore] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        if (troisJoueurs == true && nomJoueur2 == "" && nomJoueur1 == "" && nomJoueur3 == "") {
            alert("Les noms de tous les joueurs doivent être renseignés")
        }
        if (quatreJoueurs == true && nomJoueur2 == "" && nomJoueur1 == "" && nomJoueur3 == "" && nomJoueur4 == "") {
            alert("Les noms de tous les joueurs doivent être renseignés")
        }
        if (quatreJoueurs == false && troisJoueurs == false && nomJoueur2 == "" && nomJoueur1 == "") {
            alert("Les noms de tous les joueurs doivent être renseignés")

        }

        





    }

    const handleChangeJoueurs = (e) => {
        if (e.target.value === "3") {
            setTroisJoueurs(true)
            setQuatreJoueurs(false)
        }
        if (e.target.value === "4") {
            setTroisJoueurs(true)
            setQuatreJoueurs(true)
        }
        if (e.target.value === "2") {
            setQuatreJoueurs(false)
            setTroisJoueurs(false)
        }


    }

    const handleChangeScore = (e) => {

        if (e.target.value === "Saisie-Perso") {
            setScorePerso(true)
        } else {
            setScorePerso(false)
            setMauvaisScore(false)
        }
    }


    const limiteScore = (e) => {

        if (e.target.value < 100 || e.target.value > 1000) {
            setMauvaisScore(true)

        } else {
            setMauvaisScore(false)
        }
        if (e.target.value == "") {
            setMauvaisScore(false)

        }


    }

    return <>


        <form onSubmit={handleSubmit}>
            <label htmlFor='NbJoueurs' >Nombre de Joueurs</label>
            <select id="NbJoueurs" onChange={handleChangeJoueurs} >
                <option selected value="2" >2 Joueurs</option>
                <option value="3"> 3 Joueurs</option>
                <option value="4">4 Joueurs</option>
            </select>

            <input type='text' placeholder='Nom du Joueur 1' value={form.nomJoueur1} name='nomJoueur1' />
            <input type='text' placeholder='Nom du Joueur 2' />
            <input type='text' placeholder='Nom du Joueur 3' style={{ display: troisJoueurs == false && "none" }} />
            <input type='text' placeholder='Nom du Joueur 4' style={{ display: quatreJoueurs == false && "none" }} />

            <label htmlFor='Score' >Score de départ</label>

            <select id="Score" onChange={handleChangeScore}>
                <option value="301">301</option>
                <option selected value="501">501</option>
                <option value="701">701</option>
                <option value="Saisie-Perso">Personnalisé</option>
            </select>
            <input type="number" style={{ display: scorePerso == false && "none" }} onChange={limiteScore} />
            <span style={{ display: mauvaisScore == false && "none", fontSize: "0.6rem", padding: "0", margin: "0" }}>Le score doit être compris entre 100 et 1000</span>

            <label htmlFor='Sortie' >Type de sortie</label>

            <select id="Sortie">
                <option value="simple">Simple</option>
                <option selected value="double">Double</option>

            </select>
            <input type="submit" value="Lancer la partie" />
        </form>
    </>
}

export default Flechettes;