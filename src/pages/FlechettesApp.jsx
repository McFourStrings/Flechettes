import { useState } from 'react'
import '../style/style.css'






const Flechettes = () => {

    const [nbJoueurs, setNbJoueurs] = useState(2)
    const [noms, setNoms] = useState(["", "", "", ""])
    const [score, setScore] = useState(501)
    const [scorePerso, setScorePerso] = useState(false)
    const [mauvaisScore, setMauvaisScore] = useState(false)
    const [sortie, setSortie] = useState("Double")
    const [isStarted, setIsStarted] = useState(false)

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
        setIsStarted(true)


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
        <>
            <form onSubmit={handleSubmit}  style={isStarted ? { display: 'none' } : { display: 'flex' }} >

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
                    <input type="number" min="100" max="1000" required onChange={handleCustomScore} />
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


















            <div className="dartboard-container" style={isStarted ? { display: 'block' } : { display: 'none' }}>

                <div className="score-box">
                    <div className="header"> Fléchettes </div>

                    <div className="players">
                        <div className="player active">
                            <div>Joueur 1</div>
                            <div className="score">341 ★</div>
                            <div className="moyenne">Moy : 53</div>
                        </div>
                        <div className="player">
                            <div>Joueur 2</div>
                            <div className="score">501</div>
                            <div className="moyenne">Moy : 0</div>
                        </div>
                        <div className="player">
                            <div>Joueur 3</div>
                            <div className="score">425</div>
                            <div className="moyenne">Moy : 38</div>
                        </div>
                        <div className="player">
                            <div>Joueur 4</div>
                            <div className="score">425</div>
                            <div className="moyenne">Moy : 38</div>
                        </div>
                    </div>

                    <div className="suggestions">
                        Suggestions : T20 T19 D12
                    </div>

                    <div className="current-turn">
                        <div className="turn-title">Tour en cours :</div>
                        <div className="darts">
                            <div className="dart">[T20]</div>
                            <div className="dart">[19]</div>
                            <div className="dart">[ ? ]</div>
                        </div>
                        <div className="total-turn">Score du tour : 79</div>
                    </div>
                </div>


                <div className="keyboard">
                    <div className="row">
                        <div className="btn">1</div><div className="btn">2</div><div className="btn">3</div>
                        <div className="btn">4</div><div className="btn">5</div><div className="btn">6</div>
                        <div className="btn">7</div>
                    </div>
                    <div className="row">
                        <div className="btn">8</div><div className="btn">9</div><div className="btn">10</div>
                        <div className="btn">11</div><div className="btn">12</div><div className="btn">13</div>
                        <div className="btn">14</div>
                    </div>
                    <div className="row">
                        <div className="btn">15</div><div className="btn">16</div><div className="btn">17</div>
                        <div className="btn">18</div><div className="btn">19</div><div className="btn">20</div>
                        <div className="btn">25</div>
                    </div>
                    <div className="row">
                        <div className="btn double">Double</div>
                        <div className="btn triple">Triple</div>
                        <div className="btn miss">Miss</div>
                    </div>
                    <div className="row" style={{ marginTop: '12px' }}>
                        <div className="btn cancel">Annuler</div>
                        <div className="btn validate">Valider</div>
                    </div>
                </div>

                <div className="history">
                    <strong>Historique :</strong>
                    Tour 1 : T20 + 19 + D10 = 99
                    Tour 2 : 20 + T18 + 5 = 79
                </div>

            </div>

        </>
    )
}
export default Flechettes


