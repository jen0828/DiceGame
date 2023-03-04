import { useState } from 'react';
import Die from './Die';

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  }

  const diceElements = dice.map((die, index) => (
    <Die value={die.value} key={index} />
  ));

  function handleClick() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      {
        <button className="roll-dice" onClick={handleClick}>
          Roll
        </button>
      }
    </main>
  );
}
