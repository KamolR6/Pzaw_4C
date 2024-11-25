//Task of data save into background

import axios from "axios";
import { useRef, useEffect, useState } from "react";

function TaskPokedex() {

  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/pokedex/type").then((response) => {
      console.log(Object.keys(response))
      setTypes(response.data)
    }).catch((error) => {
      console.log(error)
    })
      .finally(() => {

      })
  }, []);



console.log(types)

  return (
    <div>
      <h1>Types</h1>

      {types.map((el, id) => {
        return (
          <p>{el}</p>
        )
      })}
    </div>
  );
}


export default TaskPokedex;
