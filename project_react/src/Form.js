import { useRef, useState } from "react";

function Form() {
    const input1Ref = useRef();
    const input2Ref = useRef();
    const [message, setMessage] = useState("")

    const SendbuttonHandler = () => {
        console.log(input1Ref.current.value + input2Ref.current.value)
        setMessage(input1Ref.current.value + input2Ref.current.value)
    }
    const ClearbuttonHandler = () => {
        input1Ref.current.value = ""
        input2Ref.current.value = ""
        setMessage("")
    }
    return (
        <div>
            <div>
                <input ref={input1Ref} ></input> <br></br>
                <input ref={input2Ref} ></input> <br></br>
            </div>
            <div>
                <select>
                    <option value="cpu">cpu</option>
                    <option value="gpu">gpu</option>
                    <option value="ram">ram</option>
                </select><br></br>
            </div>
            <div>
                <input type="radio" value="radio1" name="radioList"></input>
                <input type="radio" value="radio2" name="radioList"></input>
                <input type="radio" value="radio3" name="radioList"></input>
                <input type="radio" value="radio4" name="radioList"></input>
            </div>
            <input type="button" value="Send" onClick={SendbuttonHandler}></input>
            <input type="button" value="Clear" onClick={ClearbuttonHandler}></input>
        <div>
            <p>
                {message}
            </p>
        </div>
        </div>
    )
}

export default Form