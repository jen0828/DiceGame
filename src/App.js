import { useState, useEffect } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [isWinner, setIsWinner] = useState(false);
  const [numOfRolls, setNumOfRolls] = useState(0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setIsWinner(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function handleClick() {
    if (!isWinner) {
      setNumOfRolls((prev) => prev + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setIsWinner(false);
      setDice(allNewDice());
      setNumOfRolls(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {isWinner && <Confetti />}
      <h1 className="title">Roll the dice! 🎲</h1>
      <p className="instructions">Roll until all dice are the same</p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={handleClick}>
        {isWinner ? 'New Game' : ' Roll'}
      </button>
      <h3>Total: {numOfRolls}</h3>
    </main>
  );
}
