import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img className="card-picture" src={pokemon.imgSrc}></img>
      ) : (
        <p className="card-name">???</p>
      )}
      <figcaption className="card-name">{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: "PropTypes.string.isRequired",
    imgSrc: "PropTypes.string",
  }).isRequired,
};

export default PokemonCard;

