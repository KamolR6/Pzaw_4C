import axios from "axios";
import { useRef } from "react";


function TaskFormWithBackend() {
    const firstName = useRef()
    const surname = useRef()
    function handleButton(){
        const Name = firstName.current.value
        const Surname = surname.current.value
        // console.log(Name, Surname)
        axios.post("http://localhost:8000/abc", {Name, Surname})
    }
  return (
    <div >
        <input ref={firstName} type="text"></input>
        <input ref={surname} type="text"></input>
        <button onClick={handleButton} type="submit"></button>
    </div>
  );
}

export default TaskFormWithBackend;
