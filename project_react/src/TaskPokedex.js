//Task of data save into background

import axios from "axios";
import { useRef, useEffect, useState } from "react";

function TaskPokedex() {

  const [types, setTypes] = useState([])
  const [language, setLanguage] = useState("english");
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/pokedex/type", ).then((response) => {
      console.log(Object.keys(response))
      console.log(response.data)
      setTypes(response.data)
    }).catch((error) => {
      console.log(error)
    })
      .finally(() => {
        
      })
  }, []);
  useEffect(()=>{
      console.log("selected types: ", selectedTypes)
  },[selectedTypes])


console.log(types)

  return (
    <div>
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
          types.map((type, index) =><> <label htmlFor={index} key={index}>{type[language]}</label> <input id={index} value={type["english"]} onChange={e =>{
            if(e.target.checked){
              setSelectedTypes([...selectedTypes, e.target.value])
            }else{
              setSelectedTypes(selectedTypes.filter(type => type !== e.target.value))
            }

          }} type="checkbox"></input></>)
        ) : (
          <p>Loading types...</p>
        )}
      </div>
    </div>
  );
}


export default TaskPokedex;
