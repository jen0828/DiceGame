import Die from './Die';

export default function App() {
  const maxNum = 6;

  function allNewDice() {
    return Math.floor(Math.random() * maxNum + 1);
  }

  return (
    <main>
      <div className="dice-container">
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
        <Die value={allNewDice()} />
      </div>
    </main>
  );
}
