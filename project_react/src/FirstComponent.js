import { useState } from "react"
import "./FirstCss.css"



function FirstComponent() {
    const [name, setName] = useState("Kamil")

    const ButtonHandler = () => {
        console.log("ButtonHandler active")
        setName("Adam")
    }

    const myStyle = {
        color: "red",
        fontSize: "32px"
    }
    return (
        <div>
            <p className="petka">
                Testowy component.
            </p>
            <p style={myStyle}>
                Panie adminie proszę mi konto naprawic. {name}
            </p>
            <input type="button" value="Change my name." onClick={ButtonHandler}></input>
        </div>
    )
}

export default FirstComponent