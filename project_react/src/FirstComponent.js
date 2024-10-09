

function FirstComponent() {
    const myStyle = { 
        "color": "red"
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