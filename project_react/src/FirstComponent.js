import { useEffect, useState } from "react"
import "./FirstCss.css"



function FirstComponent() {

    const [name, setName] = useState("Kamil")
    const [message, setMessage] = useState("")
    const NameSetter = () => {
        console.log("ButtonHandler active")
        if (name == "Kamil") {
            setName("Adam")
        }else{
            setName("Kamil")
        }
    }
    const SayNameHandler = () =>{
        setMessage("You're godamn right.")
    }
    //Nasluchuje na wszystkie stany useState w komponencie, 2 arg [] = wykonuje sie raz, [name] = nasluchuje tylko na zmiane name
    useEffect(() => {
        console.log("Effect is called.")
    }, [name])
    
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
            <input type="button" value="Change my name." onClick={NameSetter}></input>

            <p>
                Say my name.
            </p>
            <input type="button" value={name} onClick={SayNameHandler}></input>
            <p>
                {message}
            </p>
        </div>
    )
}

export default FirstComponent