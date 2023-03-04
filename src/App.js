import { useState } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} isHeld={die.isHeld} />
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
