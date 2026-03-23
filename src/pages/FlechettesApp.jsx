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
    const [currentPlayer, setCurrentPlayer] = useState("Joueur1")
    const [pointsJ1, setPointsJ1] = useState(0)
    const [pointsJ2, setPointsJ2] = useState(0)
    const [pointsJ3, setPointsJ3] = useState(0)
    const [pointsJ4, setPointsJ4] = useState(0)


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

    let click = 0

    const handleClick = (e) => {
        click = click + 1

        if (click == 3 && currentPlayer == "Joueur1") {
            setCurrentPlayer("Joueur2")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur2" && nbJoueurs == 2) {
            setCurrentPlayer("Joueur1")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur2" && nbJoueurs == 3) {
            setCurrentPlayer("Joueur3")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur3" && nbJoueurs == 3) {
            setCurrentPlayer("Joueur1")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur2" && nbJoueurs == 4) {
            setCurrentPlayer("Joueur3")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur3" && nbJoueurs == 4) {
            setCurrentPlayer("Joueur4")
            click = 0
        } if (click == 3 && currentPlayer == "Joueur4" && nbJoueurs == 4) {
            setCurrentPlayer("Joueur1")
            click = 0
        }

        // if (currentPlayer=="Joueur1"){
        //     setPointsJ1({score} - Number(e.target.value))
        // }
        // if (currentPlayer=="Joueur2"){
        //     setPointsJ2({score} - Number(e.target.value))
        // }
        // if (currentPlayer=="Joueur3"){
        //     setPointsJ3({score} - Number(e.target.value))
        // }
        // if (currentPlayer=="Joueur4"){
        //     setPointsJ4({score} - Number(e.target.value))
        // }
    }


    return (
        <>
            <form onSubmit={handleSubmit} style={isStarted ? { display: 'none' } : { display: 'flex' }} >

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
                        <div className="player" style={currentPlayer == "Joueur1" ? { border: '2px solid #00aaff ' } : { border: '2px solid transparent' }}>
                            <div>{noms[0]}</div>
                            <div className="score">{score}</div>
                            <div className="moyenne">Moy : 53</div>
                        </div>
                        <div className="player" style={currentPlayer == "Joueur2" ? { border: '2px solid #00aaff ' } : { border: '2px solid transparent' }}>
                            <div>{noms[1]}</div>
                            <div className="score">{score}</div>
                            <div className="moyenne">Moy : 0</div>
                        </div>
                        <div className="player" style={{
                            border: currentPlayer === "Joueur3"
                                ? '2px solid #00aaff'
                                : '2px solid transparent',
                            display: nbJoueurs === 2
                                ? 'none'
                                : 'block'
                        }}>
                            <div>{noms[2]}</div>
                            <div className="score">{score}</div>
                            <div className="moyenne">Moy : 38</div>
                        </div>
                        <div className="player" style={{
                            border: currentPlayer === "Joueur4"
                                ? '2px solid #00aaff'
                                : '2px solid transparent',
                            display: nbJoueurs === 2 || nbJoueurs === 3
                                ? 'none'
                                : 'block'
                        }}>

                            <div>{noms[3]}</div>
                            <div className="score">{score}</div>
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
                        <div className="btn" onClick={handleClick}>1</div><div className="btn" onClick={handleClick}>2</div><div className="btn" onClick={handleClick}>3</div>
                        <div className="btn" onClick={handleClick}>4</div><div className="btn" onClick={handleClick}>5</div><div className="btn" onClick={handleClick}>6</div>
                        <div className="btn" onClick={handleClick}>7</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={handleClick}>8</div><div className="btn" onClick={handleClick}>9</div><div className="btn" onClick={handleClick}>10</div>
                        <div className="btn" onClick={handleClick}>11</div><div className="btn" onClick={handleClick}>12</div><div className="btn" onClick={handleClick}>13</div>
                        <div className="btn" onClick={handleClick}>14</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={handleClick}>15</div><div className="btn" onClick={handleClick}>16</div><div className="btn" onClick={handleClick}>17</div>
                        <div className="btn" onClick={handleClick}>18</div><div className="btn" onClick={handleClick}>19</div><div className="btn" onClick={handleClick}>20</div>
                        <div className="btn" onClick={handleClick}>25</div>
                    </div>
                    <div className="row">
                        <div className="btn double">Double</div>
                        <div className="btn triple">Triple</div>
                        <div className="btn miss" onClick={handleClick}>Miss</div>
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


