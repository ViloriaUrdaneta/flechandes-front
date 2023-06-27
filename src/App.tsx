import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/pure/Form';
import List from './components/pure/List';
import { Flete } from './types';
import { getAllFletes } from './services/getAllFletes';

interface AppState {
  flete: Array<Flete>
}


function App(): JSX.Element {

  const [fletes, setFletes] = useState<AppState["flete"]>([])

  useEffect(() => {
    getAllFletes()
      .then(setFletes)
  }, [])

  const handleNewFlete = (newFlete: Flete): void => {
    setFletes(fletes => [...fletes, newFlete])
  }

  return (
    <div className="App">
        <p>
          Holi
        </p>
        <Form onNewFlete={handleNewFlete}/>
        <List fletes={fletes}/>
    </div>
  );
}

export default App;
