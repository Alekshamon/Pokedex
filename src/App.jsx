/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import PokemonCard  from "./components/PokemonCard"
import NavBar from './components/NavBar';

function App() {

  const pokemonList = [ 
    {
        name: "Bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
        name: "Mew",
    },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);
    const handleClickNext = () => {
      setPokemonIndex((precedentIndex) => Math.min(precedentIndex + 1, pokemonList.length - 1));
    };
  
    const handleClickPrev = () => {
      setPokemonIndex((precedentIndex) => Math.max(precedentIndex - 1, 0));
    };

  return (
    
      <div>
      <NavBar onPrevClick={handleClickPrev} onNextClick={handleClickNext} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      
      </div>
       
      
  );
}

export default App