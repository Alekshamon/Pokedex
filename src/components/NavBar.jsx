/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const NavBar = ({ pokemonList, onPokemonClick }) => {
    return (
      <div>
{pokemonList.map((pokemon, i) =>(
<button key={i} onClick={() => onPokemonClick (i)}>{pokemon.name}
</button>
) )}
        
      </div>
    );
  };


export default NavBar