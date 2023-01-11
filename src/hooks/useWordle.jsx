import { useState, useEffect } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = (word) => {
    const letters = word.split('');
  };

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (key === 'Backspace') {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevGuess) => prevGuess + key);
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
  };
};

export default useWordle;
