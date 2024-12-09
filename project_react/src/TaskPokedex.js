//Task of data save into background

import axios from "axios";
import { useRef, useEffect, useState } from "react";

function TaskPokedex() {

  const [types, setTypes] = useState([])
  const [language, setLanguage] = useState("english");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searched, setSearched] = useState("")
  const [shownPokemons, setShownPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Selected Pokémon for modal
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility

  useEffect(() => {
    axios.get("http://localhost:8000/pokedex/type",).then((response) => {
      // console.log(Object.keys(response))
      // console.log(response.data)
      setTypes(response.data)
    }).catch((error) => {
      console.log(error)
    })
      .finally(() => {

      })
  }, []);
  useEffect(() => {
    console.log("selected types: ", selectedTypes)
    console.log("http://localhost:8000/pokedex/pokemons?searched=" + searched + "&types=[" + selectedTypes.map(type => `"${type}"`) + "]")
  })


  useEffect(() => {
    const typesParam = JSON.stringify(selectedTypes); // Convert to JSON string
    const url = `http://localhost:8000/pokedex/pokemons?searched=${searched}&types=${typesParam}`;
    console.log(url);

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setShownPokemons(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedTypes, searched]);
  // Fetch Pokémon details
  const fetchPokemonDetails = id => {
    axios
      .get(`http://localhost:8000/pokedex/${id}`)
      .then(response => {
        setSelectedPokemon(response.data);
        setModalVisible(true); // Show modal
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <input type="text" onChange={e => { setSearched(e.target.value) }}></input>
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
          types.map((type, index) => <> <label htmlFor={index} key={index}>{type[language]}</label> <input id={index} value={type["english"]} onChange={e => {
            if (e.target.checked) {
              setSelectedTypes([...selectedTypes, e.target.value])
            } else {
              setSelectedTypes(selectedTypes.filter(type => type !== e.target.value))
            }

          }} type="checkbox"></input></>)
        ) : (
          <p>Loading types...</p>
        )}
      </div>
      <div>
        {shownPokemons.length > 0 ? (
          shownPokemons.map((pokemon, index) => <>
            <div>
              <p>{pokemon.name[language]}</p>
            </div>
          </>
          )) : <><p>Loading</p></>}
      </div>
    </div>
  );
}


export default TaskPokedex;
