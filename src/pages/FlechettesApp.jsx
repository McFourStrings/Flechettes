import { useState } from 'react'
import '../style/style.css'

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
//             {Array.from({ length: nbJoueurs }).map((_) => (
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
//             {Array.from({ length: nbJoueurs }).map((_) => (
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
//             {Array.from({ length: nbJoueurs }).map((_) => (
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






const Ecran =()=>{


return
<div class="dartboard-container">

  <div class="score-box">
    <div classname="header">🪵 Fléchettes X01</div>

    <div classname="players">
      <div classname="player active">
        <div>Joueur 1</div>
        <div classname="score">341 ★</div>
        <div classname="moyenne">Moy : 53</div>
      </div>
      <div classname="player">
        <div>Joueur 2</div>
        <div classname="score">501</div>
        <div classname="moyenne">Moy : 0</div>
      </div>
      <div classname="player">
        <div>Joueur 3</div>
        <div classname="score">425</div>
        <div classname="moyenne">Moy : 38</div>
      </div>
    </div>

    <div classname="suggestions">
      Suggestions : T20 T19 D12
    </div>

    <div classname="current-turn">
      <div classname="turn-title">Tour en cours :</div>
      <div classname="darts">
        <div classname="dart">[T20]</div>
        <div classname="dart">[19]</div>
        <div classname="dart">[ ? ]</div>
      </div>
      <div classname="total-turn">Score du tour : 79</div>
    </div>
  </div>

  
  <div classname="keyboard">
    <div classname="row">
      <div classname="btn">1</div><div classname="btn">2</div><div classname="btn">3</div>
      <div classname="btn">4</div><div classname="btn">5</div><div classname="btn">6</div>
      <div classname="btn">7</div>
    </div>
    <div classname="row">
      <div classname="btn">8</div><div classname="btn">9</div><div classname="btn">10</div>
      <div classname="btn">11</div><div classname="btn">12</div><div classname="btn">13</div>
      <div classname="btn">14</div>
    </div>
    <div classname="row">
      <div classname="btn">15</div><div classname="btn">16</div><div classname="btn">17</div>
      <div classname="btn">18</div><div classname="btn">19</div><div classname="btn">20</div>
      <div classname="btn">25</div>
    </div>
    <div classname="row">
      <div classname="btn double">Double</div>
      <div classname="btn triple">Triple</div>
      <div classname="btn miss">Miss</div>
    </div>
    <div classname="row" style="margin-top: 12px;">
      <div classname="btn cancel">Annuler</div>
      <div classname="btn validate">Valider</div>
    </div>
  </div>

  <div classname="history">
    <strong>Historique :</strong>
    Tour 1 : T20 + 19 + D10 = 99
    Tour 2 : 20 + T18 + 5 = 79
  </div>

</div>}
export default Ecran


