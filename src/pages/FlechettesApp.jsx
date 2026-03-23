import { useState } from 'react'
import '../style/style.css'


const Flechettes = () => {

    const [nbJoueurs, setNbJoueurs] = useState(2)
    const [noms, setNoms] = useState(["", "", "", ""])
    const [score, setScore] = useState(501)
    const [scorePerso, setScorePerso] = useState(false)
    const [mauvaisScore, setMauvaisScore] = useState(false)
    const [sortie,setSortie]= useState ("Double")

    const handleChangeNom = (index, value) => {
        const newNoms = [...noms]
        newNoms[index] = value
        setNoms(newNoms)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (noms.slice(0, nbJoueurs).includes("")) {
        return alert("Veuillez renseigner le nom de tous les joueurs");
    }

        const joueurs = noms.slice(0, nbJoueurs).map(nom => ({
            name: nom,
            score: Number(score)

            
        }))
        

        console.log(joueurs)
        console.log(sortie);
        
    }

    const handleScoreChange = (e) => {
        const value = e.target.value

        if (value === "perso") {
            setScorePerso(true)
            return
        }

        setScorePerso(false)
        setScore(value)
    }

    const handleSortieChange = (e) => {
        setSortie(e.target.value)
    }

    const handleCustomScore = (e) => {
        const value = e.target.value

        if (value < 100 || value > 1000) {
            setMauvaisScore(true)
        } else {
            setMauvaisScore(false)
        }

        setScore(value)
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* Nombre de joueurs */}
            <select onChange={(e) => setNbJoueurs(Number(e.target.value))}>
                <option value={2}>2 joueurs</option>
                <option value={3}>3 joueurs</option>
                <option value={4}>4 joueurs</option>
            </select>

            {/* Inputs dynamiques */}
            {Array.from({ length: nbJoueurs }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Joueur ${index + 1}`}
                    value={noms[index]}
                    onChange={(e) => handleChangeNom(index, e.target.value)}
                />
            ))}

            {/* Score */}
            <select onChange={handleScoreChange} defaultValue="501">
                <option value="301">301</option>
                <option value="501">501</option>
                <option value="701">701</option>
                <option value="perso">Personnalisé</option>
            </select>

            {scorePerso && (
                <input type="number" onChange={handleCustomScore} />
            )}

            {mauvaisScore && (
                <p>Le score doit être entre 100 et 1000</p>
            )}


 <label htmlFor='Sortie' >Type de sortie</label>

            <select id="Sortie" onChange={handleSortieChange} defaultValue="double">
                <option value="simple">Simple</option>
                <option selected value="double">Double</option>

            </select>
            <button type="submit">Lancer</button>
        </form>
    )
}

export default Flechettes


// const Flechettes = () => {

//     // const [form, setForm] = useState({
//     //     nombreJoueurs: "",
//     //     nomJoueur1: "",
//     //     nomJoueur2: "",
//     //     nomJoueur3: "",
//     //     nomJoueur4: "",
//     //     score: "",
//     //     sortie: ""
//     // })

//     // Etat tableau vide (users) 
//     // Etat type de sortie
//     const [sortie,setSortie]= useState ("Double")
//     // etat score de depart, le choix s'attribut à chaque objet de users
//     const [score,setScore]= useState ("")
//     // formulaire pour les noms , quand je l'envoie ça enregistre un nouvel objet avec comme clefs nom,score 
//     // On le stock dans users
//     const  [users,setUsers]= useState ([{name:"", score:{score}}])

//     const [troisJoueurs, setTroisJoueurs] = useState(false)
//     const [quatreJoueurs, setQuatreJoueurs] = useState(false)
//     const [scorePerso, setScorePerso] = useState(false)
//     const [mauvaisScore, setMauvaisScore] = useState(false)


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(users);
//         console.log(score);
        
//         // if (troisJoueurs == true &&(form.nomJoueur2 == "" || form.nomJoueur1 == "" || form.nomJoueur3 == "")) {
//         //     alert("Les noms de tous les joueurs doivent être renseignés")
//         // }
//         // if (quatreJoueurs == true && (form.nomJoueur2 == "" || form.nomJoueur1 == "" || form.nomJoueur3 == "" || form.nomJoueur4 == "")) {
//         //     alert("Les noms de tous les joueurs doivent être renseignés")
//         // }
//         // if (quatreJoueurs == false && (troisJoueurs == false && form.nomJoueur2 == "" || form.nomJoueur1 == "")) {
//         //     alert("Les noms de tous les joueurs doivent être renseignés")

//         // }







//     }

//     const handleChangeJoueurs = (e) => {
//         if (e.target.value === "3") {
//             setTroisJoueurs(true)
//             setQuatreJoueurs(false)
//         }
//         if (e.target.value === "4") {
//             setTroisJoueurs(true)
//             setQuatreJoueurs(true)
//         }
//         if (e.target.value === "2") {
//             setQuatreJoueurs(false)
//             setTroisJoueurs(false)
//         }


//     }

//     const handleChangeScore = (e) => {

//         if (e.target.value === "scorePerso") {
//             setScorePerso(true)
//         } else {
//             setScorePerso(false)
//             setMauvaisScore(false)
//         }
//             setScore(e.target.value)
//     }

//     const handleChange = (e) => {

//         setUsers({ ...users, [e.target.name]: e.target.value })

//     }


//     const limiteScore = (e) => {

//         if (e.target.value < 100 || e.target.value > 1000) {
//             setMauvaisScore(true)

//         } else {
//             setMauvaisScore(false)
//         }
//         if (e.target.value == "") {
//             setMauvaisScore(false)

//         }


//     }

//     return <>


//         <form onSubmit={handleSubmit}>
//             <label htmlFor='NbJoueurs' >Nombre de Joueurs</label>
//              <select id="NbJoueurs" name="nombreJoueurs" onChange = { (e) => {  limiteScore (e); handleChange (e) }}> 
//                 <option selected   >2 Joueurs</option>
//                 <option  > 3 Joueurs</option>
//                 <option  >4 Joueurs</option>
//             </select>

//             <input type='text' placeholder='Nom du Joueur 1' value={users.name} name='nomJoueur1' onChange={handleChange} />
//             <input type='text' placeholder='Nom du Joueur 2' value={users.name} name="nomJoueur2" onChange={handleChange} />
//             <input type='text' placeholder='Nom du Joueur 3' style={{ display: troisJoueurs == false && "none" }}
//                 value={users.name} name="nomJoueur3" onChange={handleChange} />
//             <input type='text' placeholder='Nom du Joueur 4' style={{ display: quatreJoueurs == false && "none" }}
//                 value={users.name} name="nomJoueur4" onChange={handleChange} />

//             <label htmlFor='Score' >Score de départ</label>

//             <select id="Score" onChange={handleChangeScore}>
//                 <option value="301">301</option>
//                 <option selected value="501">501</option>
//                 <option value="701">701</option>
//                 <option value="scorePerso">Personnalisé</option>
//             </select>
//             <input type="number" style={{ display: scorePerso == false && "none" }} onChange = { (e) => {  limiteScore (e); handleChange (e) }} value={`${score} ${users.score}`} name='score' />
//             <span style={{ display: mauvaisScore == false && "none", fontSize: "0.6rem", padding: "0", margin: "0" }}>Le score doit être compris entre 100 et 1000</span>

//             <label htmlFor='Sortie' >Type de sortie</label>

//             <select id="Sortie">
//                 <option value="simple">Simple</option>
//                 <option selected value="double">Double</option>

//             </select>
//             <input type="submit" value="Lancer la partie" />
//         </form>
//     </>
// }

// export default Flechettes;