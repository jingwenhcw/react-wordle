const Row = ({ guess, currentGuess }) => {
  const maxLetters = 5;
  if (currentGuess) {
    const letters = [...currentGuess];

    return (
      <div className='row currentGuess'>
        {letters.map((l, i) => (
          <div key={i} className='filled'>
            {l}
          </div>
        ))}
        {[...Array(maxLetters - letters.length)].map((item, i) => (
          <div key={letters.length + i} />
        ))}
      </div>
    );
  }

  if (guess) {
    return (
      <div className='row past'>
        {guess.map((l, i) => (
          <div key={i} className={`${l.color}`}>
            {l.key}
          </div>
        ))}
        {}
      </div>
    );
  }

  return (
    <div className='row'>
      {[...Array(maxLetters)].map((item, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
};
export default Row;
