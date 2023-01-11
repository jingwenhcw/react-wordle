import { useState } from 'react';

const generateAlphabets = () => {
  const start = 97;
  const end = 122;
  const letters = [];
  for (let i = start; i <= end; i++) {
    letters.push({ key: String.fromCharCode(i) });
  }
  return letters;
};

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(generateAlphabets());

  return (
    <div className='keypad'>
      {letters.map((l) => {
        return (
          <div key={l.key} className={`${usedKeys[l.key]}`}>
            {l.key}
          </div>
        );
      })}
    </div>
  );
};
export default Keypad;
