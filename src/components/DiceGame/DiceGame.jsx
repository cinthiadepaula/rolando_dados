import { useState } from "react";
import Dice from './../Dice/Dice'
import "./DiceGame.css";


const DiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="page">
      <h1 className="">Rolagem de Dados</h1>
      <div className="dice">
        <Dice value={dice1} />
      </div>
      <div className="dice">
        <Dice value={dice2} />
      </div>
      <button
        onClick={rollDice}
        className="button_dice"
      >
        Mova os Dados 🎲
      </button>
    </div>
  );
};

export default DiceGame;
