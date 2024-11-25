import { useRef, useState } from "react";
import "./FirstCss.css"
function Form() {
    const input1Ref = useRef();
    const input2Ref = useRef();
    const selectRef = useRef();

    const radioRef1 = useRef()
    const radioRef2 = useRef()
    const radioRef3 = useRef()
    const radioRef4 = useRef()

    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")
    const messageStyle = {
        backgroundColor: color,
        width: "fit-content",
        height: "fit-content",
        margin: "auto"
    }
    const SendbuttonHandler = () => {
        console.log(input1Ref.current.value + input2Ref.current.value)
        setMessage(input1Ref.current.value + input2Ref.current.value + " " + selectRef.current.value)
        console.log(selectRef.current.value)
        if (radioRef1.current.checked) {
            setColor("red")
        }
        if (radioRef2.current.checked) {
            setColor("green")
        }
        if (radioRef3.current.checked) {
            setColor("blue")
        }
        if (radioRef4.current.checked) {
            setColor("pink")
        }
    }
    const ClearbuttonHandler = () => {
        input1Ref.current.value = ""
        input2Ref.current.value = ""
        selectRef.current.value = "cpu"
        setMessage("")
        setColor("")
    }
    return (
        <div>
            <div className="inputs">
                <input ref={input1Ref} ></input> <br></br>
                <input ref={input2Ref} ></input> <br></br>
            </div>
            <div className="flex">
                <div className="option">
                    <select ref={selectRef}>
                        <option value="cpu">cpu</option>
                        <option value="gpu">gpu</option>
                        <option value="ram">ram</option>
                    </select><br></br>
                </div>
                <div className="select">
                    <input type="radio" value="red" name="radioList" ref={radioRef1}></input> red <br></br>
                    <input type="radio" value="green" name="radioList" ref={radioRef2}></input> green <br></br>
                    <input type="radio" value="blue" name="radioList" ref={radioRef3}></input> blue <br></br>
                    <input type="radio" value="pink" name="radioList" ref={radioRef4}></input> pink <br></br>
                </div>
            </div>
            <div className="bttns">
                <input type="button" value="Send" onClick={SendbuttonHandler}></input>
                <input type="button" value="Clear" onClick={ClearbuttonHandler}></input>
            </div>
            <div style={messageStyle}>
                {message}
            </div>
        </div>
    )
}

export default Form