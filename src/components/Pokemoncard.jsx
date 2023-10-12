function PokemonCard(props) {
  console.log(props);
  const { pokemon } = props;
  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img className="card-img" src={pokemon.imgSrc} />
      ) : (
        <p>????</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
  