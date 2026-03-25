import { useState } from 'react'
import '../style/style.css'
import Checkout from './checkout.json'






const Flechettes = () => {

  const [nbJoueurs, setNbJoueurs] = useState(2);
  const [noms, setNoms] = useState(["", "", "", ""]);
  const [score, setScore] = useState(501);
  const [scorePerso, setScorePerso] = useState(false);
  const [mauvaisScore, setMauvaisScore] = useState(false);
  const [sortie, setSortie] = useState("double");
  const [isStarted, setIsStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("Joueur1");
  const [pointsJ1, setPointsJ1] = useState(0);
  const [pointsJ2, setPointsJ2] = useState(0);
  const [pointsJ3, setPointsJ3] = useState(0);
  const [pointsJ4, setPointsJ4] = useState(0);
  const [click, setClick] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [histo, setHisto] = useState([]);
  const [scoreTour, setScoreTour] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [winner, setWinner] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [histoGlobal, setHistoGlobal] = useState({ Joueur1: [], Joueur2: [], Joueur3: [], Joueur4: [] })
  const [menu, setMenu] = useState(true);


  const handleChangeNom = (index, value) => {
    const newNoms = [...noms];
    newNoms[index] = value;
    setNoms(newNoms);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noms.slice(0, nbJoueurs).includes("")) {
      return alert("Veuillez renseigner le nom de tous les joueurs");
    }
    setIsStarted(true);
    setMenu(false);
  }

  const handleScoreChange = (e) => {
    const value = e.target.value;
    if (value === "perso") {
      setScorePerso(true);
      return;
    }
    setScorePerso(false);
    setScore(Number(value));
  }

  const handleSortieChange = (e) => {
    setSortie(e.target.value);
  }

  const handleCustomScore = (e) => {
    const value = Number(e.target.value);
    if (value < 100 || value > 1000) setMauvaisScore(true);
    else setMauvaisScore(false);
    setScore(value);
  }


  const handleClick = (value) => {
    if (click >= 3)
      return;
    setClick(prev => prev + 1)
    const finalValue = value * multiplier;
    setHisto([...histo, finalValue])

    if (multiplier === 3 && value === 25) {
      alert("25 ne peut pas être triple")
      setClick(prev => prev - 1)
      setHisto(prev => prev.slice(0, -1))
      return
    }

    if (click >= 3)
      return;

    setHistoGlobal(prev => ({
      ...prev,
      [currentPlayer]: [...prev[currentPlayer], finalValue]
    }));



    setScoreTour(prev => prev + finalValue)


  }


  const handleValider = () => {

    let reste = 0;
    if (currentPlayer === "Joueur1") reste = score - (pointsJ1 + scoreTour);
    else if (currentPlayer === "Joueur2") reste = score - (pointsJ2 + scoreTour);
    else if (currentPlayer === "Joueur3") reste = score - (pointsJ3 + scoreTour);
    else if (currentPlayer === "Joueur4") reste = score - (pointsJ4 + scoreTour);

    if (click < 3 && reste > 0) {
      alert("Votre tour n'est pas fini")
      return;
    }

    // Calcul du score restant

    let scoreRestant = 0;
    if (currentPlayer === "Joueur1") scoreRestant = score - (pointsJ1 + scoreTour);
    else if (currentPlayer === "Joueur2") scoreRestant = score - (pointsJ2 + scoreTour);
    else if (currentPlayer === "Joueur3") scoreRestant = score - (pointsJ3 + scoreTour);
    else if (currentPlayer === "Joueur4") scoreRestant = score - (pointsJ4 + scoreTour);

    // vérifie si le joueur est en mode double

    const isDouble = multiplier === 2;

    const bust =
      scoreRestant < 0 ||
      scoreRestant === 1 ||
      (scoreRestant === 0 && sortie === "double" && !isDouble);

    if (bust) {
      if (scoreRestant < 0) {
        alert("BUST ! Dépassement du score");
      } else {
        alert("BUST ! Vous devez finir sur un double");
      }
    } else {
      if (currentPlayer === "Joueur1") setPointsJ1(prev => prev + scoreTour);
      else if (currentPlayer === "Joueur2") setPointsJ2(prev => prev + scoreTour);
      else if (currentPlayer === "Joueur3") setPointsJ3(prev => prev + scoreTour);
      else if (currentPlayer === "Joueur4") setPointsJ4(prev => prev + scoreTour);
    }

    setClick(0);
    setHisto([])
    setScoreTour(0)


    const scoreRestantJ1 = score - (pointsJ1 + scoreTour);
    const scoreRestantJ2 = score - (pointsJ2 + scoreTour);
    const scoreRestantJ3 = score - (pointsJ3 + scoreTour);
    const scoreRestantJ4 = score - (pointsJ4 + scoreTour);

    const joueurFini =
      (currentPlayer === "Joueur1" && scoreRestantJ1 === 0) ||
      (currentPlayer === "Joueur2" && scoreRestantJ2 === 0) ||
      (currentPlayer === "Joueur3" && scoreRestantJ3 === 0) ||
      (currentPlayer === "Joueur4" && scoreRestantJ4 === 0);


    if (click < 3 && !joueurFini && !bust) {
      alert("Votre tour n'est pas fini");
      return;
    }

    if (currentPlayer === "Joueur1") setCurrentPlayer("Joueur2");
    else if (currentPlayer === "Joueur2") setCurrentPlayer(nbJoueurs === 2 ? "Joueur1" : "Joueur3");
    else if (currentPlayer === "Joueur3") setCurrentPlayer(nbJoueurs === 3 ? "Joueur1" : "Joueur4");
    else if (currentPlayer === "Joueur4") setCurrentPlayer("Joueur1");

    setClick(0);
    setHisto([]);
    setScoreTour(0);

    if (currentPlayer === "Joueur1" && score - (pointsJ1 + scoreTour) === 0 && (sortie === "simple" || (sortie === "double" && multiplier === 2))) {
      let newWinner = noms[0];
      setEndGame(true);
      setWinner(newWinner);
      setIsStarted(false);
      setMenu(false);
      return;

    } else if (currentPlayer === "Joueur2" && score - (pointsJ2 + scoreTour) === 0 && (sortie === "simple" || (sortie === "double" && multiplier === 2))) {
      let newWinner = noms[1];
      setEndGame(true);
      setWinner(newWinner);
      setIsStarted(false);
      setMenu(false);

      return;
    } else if (currentPlayer === "Joueur3" && score - (pointsJ3 + scoreTour) === 0 && (sortie === "simple" || (sortie === "double" && multiplier === 2))) {
      let newWinner = noms[2];
      setEndGame(true);
      setWinner(newWinner);
      setIsStarted(false);
      setMenu(false);


      return;
    } else if (currentPlayer === "Joueur4" && score - (pointsJ4 + scoreTour) === 0 && (sortie === "simple" || (sortie === "double" && multiplier === 2))) {
      let newWinner = noms[3];
      setEndGame(true);
      setWinner(newWinner);
      setIsStarted(false);
      setMenu(false);


      return;
    }


    const players = [
  { name: noms[0], score: pointsJ1 },
  { name: noms[1], score: pointsJ2 },
  { name: noms[2], score: pointsJ3 },
  { name: noms[3], score: pointsJ4 }
];

// On enlève le gagnant
const others = players.filter(p => p.name !== winner);

// Tri par score croissant (plus petit = meilleur)
others.sort((a, b) => a.score - b.score);

// Attribution
setSecond(others[0].name);
setThird(others[1].name);
setFourth(others[2].name);




    if (currentPlayer === "Joueur1") setCurrentPlayer("Joueur2");
    else if (currentPlayer === "Joueur2") setCurrentPlayer(nbJoueurs === 2 ? "Joueur1" : "Joueur3");
    else if (currentPlayer === "Joueur3") setCurrentPlayer(nbJoueurs === 3 ? "Joueur1" : "Joueur4");
    else if (currentPlayer === "Joueur4") setCurrentPlayer("Joueur1");

  }

  const handleAnnuler = () => {
    setHistoGlobal(prev => ({
      ...prev,
      [currentPlayer]: prev[currentPlayer].slice(0, -click)
    }))

    setClick(0)
    setHisto([])
    setScoreTour(0)
  }


  const getMoyenne = (joueur) => {
    const lancers = histoGlobal[joueur];
    if (lancers.length === 0) return 0;
    return Math.round(lancers.reduce((acc, val) => acc + val, 0) / lancers.length);
  }

  const handleRestart =() =>{
    setIsStarted(true);
    setEndGame(false);
    setMenu(false);
    setHistoGlobal({ Joueur1: [], Joueur2: [], Joueur3: [], Joueur4: [] });
    setHisto([]);
    setCurrentPlayer("Joueur1");
    setClick(0);
    setScoreTour(0);
    setWinner("");
    setSecond("");
    setThird("");
    setFourth("");
    setPointsJ1(0);
    setPointsJ2(0);
    setPointsJ3(0);
    setPointsJ4(0);

  }


  return (
    <>
      <form onSubmit={handleSubmit} style={menu ? { display: 'flex' } : { display: 'none' }} >
        <select onChange={(e) => setNbJoueurs(Number(e.target.value))}>
          <option value={2}>2 joueurs</option>
          <option value={3}>3 joueurs</option>
          <option value={4}>4 joueurs</option>
        </select>

        {Array.from({ length: nbJoueurs }).map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Joueur ${index + 1}`}
            value={noms[index]}
            onChange={(e) => handleChangeNom(index, e.target.value)}
          />
        ))}

        <select onChange={handleScoreChange} defaultValue="501">
          <option value="301">301</option>
          <option value="501">501</option>
          <option value="701">701</option>
          <option value="perso">Personnalisé</option>
        </select>

        {scorePerso && (
          <input type="number" min="100" max="1000" required onChange={handleCustomScore} />
        )}

        {mauvaisScore && <p>Le score doit être entre 100 et 1000</p>}

        <label htmlFor='Sortie' >Type de sortie</label>
        <select id="Sortie" onChange={handleSortieChange} defaultValue="double">
          <option value="simple">Simple</option>
          <option value="double">Double</option>
        </select>

        <button id="lancer" type="submit">Lancer</button>
      </form>

      <div className="dartboard-container" style={isStarted ? { display: 'block' } : { display: 'none' }}>
        <div className="score-box">
          <div className="header"> Fléchettes </div>

          <div className="players">
            <div className="player" style={currentPlayer == "Joueur1" ? { border: '2px solid #00aaff ' } : { border: '2px solid transparent' }}>
              <div>{noms[0]}</div>
              <div className="score">{score - pointsJ1}</div>
              <div className="moyenne">Moy : {getMoyenne("Joueur1")}</div>
            </div>
            <div className="player" style={currentPlayer == "Joueur2" ? { border: '2px solid #00aaff ' } : { border: '2px solid transparent' }}>
              <div>{noms[1]}</div>
              <div className="score">{score - pointsJ2}</div>
              <div className="moyenne">Moy : {getMoyenne("Joueur2")}</div>
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
              <div className="score">{score - pointsJ3}</div>
              <div className="moyenne">Moy : {getMoyenne("Joueur3")}</div>
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
              <div className="score">{score - pointsJ4}</div>
              <div className="moyenne">Moy : {getMoyenne("Joueur4")}</div>
            </div>
          </div>

          <div className="suggestions">
            <div className="suggestions">
              {currentPlayer === "Joueur1" && (Checkout[score - (pointsJ1 + scoreTour)] || "Pas de finish possible")}
              {currentPlayer === "Joueur2" && (Checkout[score - (pointsJ2 + scoreTour)] || "Pas de finish possible")}
              {currentPlayer === "Joueur3" && (Checkout[score - (pointsJ3 + scoreTour)] || "Pas de finish possible")}
              {currentPlayer === "Joueur4" && (Checkout[score - (pointsJ4 + scoreTour)] || "Pas de finish possible")}
            </div>
          </div>

          <div className="current-turn">
            <div className="turn-title">Tour en cours :</div>
            <div className="darts">
              {histo.slice(0, 3).map((element) => {
                return <li>{element}</li>
              })}
            </div>
            <div className="total-turn">Score du tour : {scoreTour}</div>
          </div>
        </div>

        <div className="keyboard">
          <div className="row">
            <div className="btn" onClick={() => handleClick(1)}>1</div>
            <div className="btn" onClick={() => handleClick(2)}>2</div>
            <div className="btn" onClick={() => handleClick(3)}>3</div>
            <div className="btn" onClick={() => handleClick(4)}>4</div>
            <div className="btn" onClick={() => handleClick(5)}>5</div>
            <div className="btn" onClick={() => handleClick(6)}>6</div>
            <div className="btn" onClick={() => handleClick(7)}>7</div>
          </div>
          <div className="row">
            <div className="btn" onClick={() => handleClick(8)}>8</div>
            <div className="btn" onClick={() => handleClick(9)}>9</div>
            <div className="btn" onClick={() => handleClick(10)}>10</div>
            <div className="btn" onClick={() => handleClick(11)}>11</div>
            <div className="btn" onClick={() => handleClick(12)}>12</div>
            <div className="btn" onClick={() => handleClick(13)}>13</div>
            <div className="btn" onClick={() => handleClick(14)}>14</div>
          </div>
          <div className="row">
            <div className="btn" onClick={() => handleClick(15)}>15</div>
            <div className="btn" onClick={() => handleClick(16)}>16</div>
            <div className="btn" onClick={() => handleClick(17)}>17</div>
            <div className="btn" onClick={() => handleClick(18)}>18</div>
            <div className="btn" onClick={() => handleClick(19)}>19</div>
            <div className="btn" onClick={() => handleClick(20)}>20</div>
            <div className="btn" onClick={() => handleClick(25)}>25</div>
          </div>

          <div className="row">
            <div className={`btn simple ${multiplier === 1 ? "active" : ""}`}
              onClick={() => setMultiplier(1)}>Simple</div>
            <div className={`btn double ${multiplier === 2 ? "active" : ""}`}
              onClick={() => setMultiplier(2)}>Double</div>
            <div className={`btn triple ${multiplier === 3 ? "active" : ""}`}
              onClick={() => setMultiplier(3)}>Triple</div>
            <div className="btn miss" onClick={() => handleClick(0)}>Miss</div>
          </div>
        </div>

        <div className='row boutons'>
          <button className='Annuler' onClick={() => handleAnnuler()}>Annuler</button>
          <button className='Valider' onClick={() => handleValider()}>Valider</button>
        </div>
      </div>


      <div className="results-container" style={endGame ? { display: 'flex' } : { display: "none" }}>

        {/* Gagnant */}
        <div className="winner-box">
          <h1>Gagnant : {winner}</h1>
        </div>

        {/* Classement */}
        <div className="ranking">

          <div className="player-result">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="rank">2e</span>
              <div className="player-info">
                <div className="player-name">{second}</div>
              </div>
            </div>
            <div className="player-score">Score : 80</div>
          </div>

          <div className="player-result" style={{ display: nbJoueurs === 2
                ? 'none'
                : 'block'
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="rank">3e</span>
              <div className="player-info">
                <div className="player-name">{third}</div>
              </div>
            </div>
            <div className="player-score">Score : 100</div>
          </div>

          <div className="player-result" style={{ display: nbJoueurs === 2 || nbJoueurs === 3
                ? 'none'
                : 'block'
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="rank">4e</span>
              <div className="player-info">
                <div className="player-name">{fourth}</div>
              </div>
            </div>
            <div className="player-score">Score : 170</div>
          </div>

        </div>

        {/* Boutons */}
        <div className="buttons">
          <div
            className="btn btn-restart"
            onClick={() => handleRestart()}
          >
            Recommencer
          </div>
          <div
            className="btn btn-new"
            onClick={() => window.location.reload()}
          >
            Nouvelle Partie
          </div>
        </div>

      </div>

    </>
  );
}

export default Flechettes;