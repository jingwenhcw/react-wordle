import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, i) => (
        <Row key={i} guess={guess} />
      ))}
    </div>
  );
};
export default Grid;
