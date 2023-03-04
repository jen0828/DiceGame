import { useState } from 'react';
import Die from './Die';

export default function App() {
  const [newNumbers, setNewNumbers] = useState(allNewDice());
 
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <main>
      <div className="dice-container">
        {newNumbers.map((num, index) => {
          return <Die value={num} key={index} />;
        })}
      </div>
    </main>
  );
}
