import { useState, useEffect } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    const solutionArr = [...solution];
    const formattedGuess = [...currentGuess].map((letter) => {
      return {
        key: letter,
        color: 'grey',
      };
    });

    formattedGuess.forEach((letter, index) => {
      const foundIndex = solutionArr.indexOf(letter.key);
      if (foundIndex !== -1) {
        if (index === foundIndex) {
          letter.color = 'green';
          return;
        }
        letter.color = 'yellow';
      }
    });

    return formattedGuess;
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

    if (
      key === 'Enter' &&
      currentGuess.length === 5 &&
      !history.includes(currentGuess)
    ) {
      const formatted = formatGuess();
      console.log(formatted);
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
