import PropTypes from 'prop-types';

function PokemonCard ({ pokemon }) {
console.log (pokemon)

  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} className="Image" />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired
}

export default PokemonCard;