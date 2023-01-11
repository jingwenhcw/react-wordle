import { useEffect, useState } from 'react';
import useWordle from './../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

const Wordle = ({ solution }) => {
  const { currentGuess, guesses, isCorrect, turn, usedKeys, handleKeyup } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup, isCorrect, turn]);
  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal>
          {isCorrect ? (
            <div>
              <h1>You Win!</h1>
              <p className='solution'>{solution}</p>
              <p>You found the solution in {turn} guesses </p>
            </div>
          ) : (
            <div>
              <h1>Nevermind!</h1>
              <p className='solution'>{solution}</p>
              <p>Better luck next time </p>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
export default Wordle;
