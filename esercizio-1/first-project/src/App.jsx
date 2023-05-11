import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

function App() {

  const [showCounter, setShowCounter] = useState(true);

    //funzione per eliminare o aggiungere il componente Counter alla pagina
    const handleShowCounter = () => {
      setShowCounter(counter => !counter);
    }


  return <div>
          <button onClick={handleShowCounter}>Elimina/Aggiungi Componente</button>
          {showCounter && <Counter showCounter={showCounter}/>}
        </div>
}

export default App;
