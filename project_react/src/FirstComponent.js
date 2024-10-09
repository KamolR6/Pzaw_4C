import "./FirstCss.css"

function FirstComponent() {
    const myStyle = {
        color: "red",
        fontSize:"32px"
    }
    return (
        <div>
            <p className="petka">
                Testowy component.
            </p>
            <p style={myStyle}>
                Panie adminie proszę mi konto naprawic.
            </p>
        </div>
    )
}

export default FirstComponent