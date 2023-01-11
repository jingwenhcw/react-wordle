import { useState, useEffect } from 'react';
import './App.css';
import data from './data.json';
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.solutions.length);
    setSolution(data.solutions[randomIndex]);
  }, [setSolution]);

  return (
    <div className='App'>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
