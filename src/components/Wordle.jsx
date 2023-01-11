import { useEffect } from 'react';
import useWordle from './../hooks/useWordle';
import Grid from './Grid';

const Wordle = ({ solution }) => {
  const { currentGuess, guesses, isCorrect, turn, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      current guess: {currentGuess}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
};
export default Wordle;
