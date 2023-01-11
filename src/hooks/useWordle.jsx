import { useState, useEffect } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
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

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setTurn((prev) => prev + 1);
    setHistory((prev) => [...prev, currentGuess]);
    setCurrentGuess('');
  };

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
      addNewGuess(formatted);
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
