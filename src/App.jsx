import { useState } from 'react';
import AppView from './AppView';

import { options } from './const';

let resultado = null;

function App() {
  const [userSelection, setUserSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  // const [winPC, setWinner] = useState('');

  const handleSelection = (opt) => {
    return () => {
      setUserSelection(opt);

      const computerOption = Math.floor(Math.random() * options.length);
      setComputerSelection(options[computerOption]);
    };
  };

  const winOrLose =
    (userSelection.value === 0 && computerSelection.value === 2) ||
    (userSelection.value === 1 && computerSelection.value === 0) ||
    (userSelection.value === 2 && computerSelection.value === 1);

  resultado =
    userSelection.value === computerSelection.value
      ? resultado !== null
        ? 'Empate'
        : 'VS'
      : winOrLose
      ? 'Ganaste'
      : 'Perdiste';

  return (
    <AppView
      options={options}
      handleSelection={handleSelection}
      resultado={resultado}
      userSelection={userSelection}
      computerSelection={computerSelection}
    />
  );
}

export default App;
