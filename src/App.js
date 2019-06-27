import React from 'react';
import './App.css';

import Scoreboard from './components/Scoreboard'

const data = {
  teams:  {
    colombia: {
      james: 5,
      cuadrado: 0
    },
    argentina: {
      messi: 2,
      augero: 4
    }
 }
}

//- Mostrar listado de equipos
//- Tener un botón para desplegar cada equipo
//- Al desplegar mostrar los jugadores con la cantidad de goles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard data={data} />
      </header>
    </div>
  );
}

export default App;
