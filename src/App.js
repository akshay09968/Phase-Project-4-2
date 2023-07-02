import React, { useState } from 'react';
import './App.css';


const pokemonData = [
  {
    name: "Pikachu",
    image: "/images/Pikachu.webp",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Electric"
  },
  {
    name: "Charizard",
    image: "/images/Charizard.webp",
    CP: 2000,
    attack: 75,
    defense: 50,
    type: "Fire"
  },
  {
    name: "Bulbasaur",
    image: "/images/bulbasaur.png",
    CP: 900,
    attack: 45,
    defense: 60,
    type: "Leaf"
  },
  {
    name: "squirtle",
    image: "/images/Squirtle.webp",
    CP: 950,
    attack: 50,
    defense: 50,
    type: "Water"
  },
  {
    name: "Raichu",
    image: "/images/Raichu.webp",
    CP: 3000,
    attack: 65,
    defense: 70,
    type: "Electric"
  },
  {
    name: "Dragonite",
    image: "/images/Dragonite.webp",
    CP: 2000,
    attack: 65,
    defense: 70,
    type: "Leaf"
  },
  {
    name: "Onyx",
    image: "/images/onyx.png",
    CP: 8000,
    attack: 65,
    defense: 40,
    type: "Rock"
  },
  {
    name: "Mankey",
    image: "/images/Mankey.webp",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Boxer"
  },
  {
    name: "Snorlax",
    image: "/images/Snorlax.png",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Sleepy"
  },
  {
    name: "Caterpie",
    image: "/images/Caterpie.webp",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Bee"
  },
  {
    name: "Geodude",
    image: "/images/Geodude.webp",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Rock"
  },
  {
    name: "Articuno",
    image: "/images/Articuno.png",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Legendary"
  },
  {
    name: "Cyndaquil",
    image: "/images/cyndaquil.png",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Fire"
  },
  {
    name: "Meowth",
    image: "/images/Meowth.webp",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Cat"
  },
  {
    name: "MewTwo",
    image: "/images/mewtwo.png",
    CP: 1000,
    attack: 55,
    defense: 40,
    type: "Mystic"
  }
  // Add more Pokémon data here...
];

const App = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePokemon = filteredPokemon.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Pokémon Search</h1>

      <div id="pagination">
        Page {currentPage} of {totalPages}
        <button
          id="previous"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          id="next"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div>
      <input id="search" type="text" placeholder="Search Pokémon"
        value={searchTerm} onChange={handleSearch}/>
      </div>

      <div id="pokemon-list">
        {visiblePokemon.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <br></br>
            <span id="name">{pokemon.name}</span>
            <p>CP: {pokemon.CP}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Type: {pokemon.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
