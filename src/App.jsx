import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	
	function pokeNext() {
		setPokemonIndex(pokemonIndex + 1);
	}


	const pokePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
		<>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			{pokemonIndex > 0 ? (
				<button onClick={pokePrev}>⬅️ Précédent</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonList.length - 1 ? (
				<button onClick={pokeNext}>Suivant ➡️</button>
			) : (
				""
			)}
			
		</>
	);
}

export default App;