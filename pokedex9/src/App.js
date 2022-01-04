import React from "react";
import './App.css';
import {useState, useEffect} from "react"



function App() {
  const [pokemons, setPokemons] = useState([]);

  const [pegarPokemons, setPegarPokemons] = useState()

  useEffect (() => {
     alert("Não há nenhum pokemon");
  },[pokemons])
  return (

    <div>
      <h1>Lista de Pokémons</h1>
      <button onClick="ir para pokedex">Ir para Pokedex</button>
    </div>
  );
}

export default App;
