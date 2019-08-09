import React from "react";
import "./App.css";
import PokemonState from "./context/pokemon/PokemonState";
import Entry from './components/entry/Entry'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <PokemonState>
      <div className="App container">
        <Navbar />
        <Entry />
      </div>
    </PokemonState>
  );
}

export default App;
