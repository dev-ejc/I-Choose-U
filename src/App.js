import React from "react";
import "./App.css";
import PokemonState from "./context/pokemon/PokemonState";
import Entry from './components/pages/Entry'
import Navbar from './components/layout/Navbar'
import Copyright from "./components/layout/Copyright"
function App() {
  //prod
  return (
    <PokemonState>
      <div className="App bg-primary">
        <Navbar />
        <Entry />
        <Copyright />
      </div>
    </PokemonState>
  );
}

export default App;
