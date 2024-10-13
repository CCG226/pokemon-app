import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card/Card";
import SearchEngine from "./components/SearchEngine/SearchEngine";
import PokemonCard from "./Interfaces/PokemonCard";
function App() {
  const [pokemonCard, setPokemonCard] = useState<PokemonCard | null>(null);
  const generateNewCard = (data: any) => {
    var randomMove1Index = Math.floor(Math.random() * data.moves.length);
    var randomMove2Index = Math.floor(Math.random() * data.moves.length);
    const pokemon = new PokemonCard(
      data.name,
      0,
      data.types[0].type.name,
      "",
      data.sprites.front_default,
      data.height,
      data.weight,
      data.moves[randomMove1Index].move.name,
      0,
      data.moves[randomMove2Index].move.name,
      0
    );

    setPokemonCard(pokemon);
  };
  return (
    <div className="App">
      <h1>Pokemon Card Generator</h1>
      <div>
        <SearchEngine onGet={generateNewCard} />
      </div>
      <br />
      <br />
      <div className="container">
        {pokemonCard ? (
          <Card pokemonCard={pokemonCard} />
        ) : (
          <p>
            GUIDE: Please Enter A Valid Pokemon National Pokedex Id In the Input
            Above And Then Press The Black Search Button...
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
