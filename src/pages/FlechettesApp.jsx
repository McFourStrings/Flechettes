import { useState } from 'react'
import '../style/style.css'

const ecran =()=>{




return





}


// const Flechettes = () => {

//     const [nbJoueurs, setNbJoueurs] = useState(2)
//     const [noms, setNoms] = useState(["", "", "", ""])
//     const [score, setScore] = useState(501)
//     const [scorePerso, setScorePerso] = useState(false)
//     const [mauvaisScore, setMauvaisScore] = useState(false)
//     const [sortie,setSortie]= useState ("Double")

//     const handleChangeNom = (index, value) => {
//         const newNoms = [...noms]
//         newNoms[index] = value
//         setNoms(newNoms)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (noms.slice(0, nbJoueurs).includes("")) {
//         return alert("Veuillez renseigner le nom de tous les joueurs");
//     }
    
    

//         const joueurs = noms.slice(0, nbJoueurs).map(nom => ({
//             name: nom,
//             score: Number(score)

            
//         }))
        

//         console.log(joueurs)
//         console.log(sortie);
        
//     }

//     const handleScoreChange = (e) => {
//         const value = e.target.value

//         if (value === "perso") {
//             setScorePerso(true)
//             return
//         }

//         setScorePerso(false)
//         setScore(value)
//     }

//     const handleSortieChange = (e) => {
//         setSortie(e.target.value)
//     }

//     const handleCustomScore = (e) => {
//         const value = e.target.value

//         if (value < 100 || value > 1000) {
//             setMauvaisScore(true)
//         } else {
//             setMauvaisScore(false)
//         }

//         setScore(value)
//     }

//     return (
//         <form onSubmit={handleSubmit}>

//             {/* Nombre de joueurs */}
//             <select onChange={(e) => setNbJoueurs(Number(e.target.value))}>
//                 <option value={2}>2 joueurs</option>
//                 <option value={3}>3 joueurs</option>
//                 <option value={4}>4 joueurs</option>
//             </select>

//             {/* Inputs dynamiques */}
//             {Array.from({ length: nbJoueurs }).map((_, index) => (
//                 <input
//                     key={index}
//                     type="text"
//                     placeholder={`Joueur ${index + 1}`}
//                     value={noms[index]}
//                     onChange={(e) => handleChangeNom(index, e.target.value)}
//                 />
//             ))}

//             {/* Score */}
//             <select onChange={handleScoreChange} defaultValue="501">
//                 <option value="301">301</option>
//                 <option value="501">501</option>
//                 <option value="701">701</option>
//                 <option value="perso">Personnalisé</option>
//             </select>

//             {scorePerso && (
//                 <input type="number" min="100" max="1000" required onChange={handleCustomScore} />
//             )}

//             {mauvaisScore && (
//                 <p>Le score doit être entre 100 et 1000</p>
//             )}


//  <label htmlFor='Sortie' >Type de sortie</label>

//             <select id="Sortie" onChange={handleSortieChange} defaultValue="double">
//                 <option value="simple">Simple</option>
//                 <option selected value="double">Double</option>

//             </select>
//             <button type="submit">Lancer</button>
//         </form>
//     )
// }

// export default Flechettes


