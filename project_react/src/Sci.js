import { useRef } from "react";

function Sci() {
    //referencja wskazujaca na dany element
    const inputRef = useRef();

    const ButtonHandler = () => {
        console.log("ButtonHandler active")
        console.log(inputRef.current.value);
    }
    const InputHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <p>
                SCI
            </p>
            <input type="button" value="It's not a button" onClick={ButtonHandler}></input>
            <input ref={inputRef} type="text" onChange={InputHandler}></input>
        </div>
    )
}

export default Sci;