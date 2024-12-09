import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskPokedex() {
  const [types, setTypes] = useState([]);
  const [language, setLanguage] = useState("english");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searched, setSearched] = useState("");
  const [shownPokemons, setShownPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 


  useEffect(() => {
    axios
      .get("http://localhost:8000/pokedex/type")
      .then(response => setTypes(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const typesParam = JSON.stringify(selectedTypes); 
    axios
      .get("http://localhost:8000/pokedex/pokemons", {
        params: { searched, types: typesParam },
      })
      .then(response => setShownPokemons(response.data))
      .catch(error => console.error(error));
  }, [selectedTypes, searched]);


  const fetchPokemonDetails = id => {
    axios
      .get(`http://localhost:8000/pokedex/${id}`)
      .then(response => {
        setSelectedPokemon(response.data); 
        setModalVisible(true); 
      })
      .catch(error => console.error(error));
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setModalVisible(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={e => setSearched(e.target.value)}
        />
      </div>

      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        onChange={e => setLanguage(e.target.value)}
        value={language}
      >
        <option value="english">English</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
      </select>

      <div>
        {types.length > 0 ? (
          types.map((type, index) => (
            <div key={index}>
              <label htmlFor={`type-${index}`}>{type[language]}</label>
              <input
                id={`type-${index}`}
                type="checkbox"
                value={type["english"]}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedTypes([...selectedTypes, e.target.value]);
                  } else {
                    setSelectedTypes(selectedTypes.filter(t => t !== e.target.value));
                  }
                }}
              />
            </div>
          ))
        ) : (
          <p>Loading types...</p>
        )}
      </div>

      <div>
        {shownPokemons.length > 0 ? (
          shownPokemons.map(pokemon => (
            <div key={pokemon.id} onClick={() => fetchPokemonDetails(pokemon.id)}>
              <p>{pokemon.name[language]}</p>
            </div>
          ))
        ) : (
          <p>No Pokémon found</p>
        )}
      </div>

      {modalVisible && selectedPokemon && (
        <div style={modalStyles}>
          <h2>{selectedPokemon.name[language]}</h2>
          <p>Type: {selectedPokemon.type.join(", ")}</p>
          <p>Base Stats:</p>
          <ul>
            {Object.entries(selectedPokemon.base).map(([stat, value]) => (
              <li key={stat}>
                {stat}: {value}
              </li>
            ))}
          </ul>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  zIndex: 1000,
};

export default TaskPokedex;
