import axios from "axios"
import { useEffect, useRef, useState } from "react";

function TaskPhotos() {
    const [photosArray, setPhotosArray] = useState([])
    const [gridSize, SetGridSize] = useState(3)
    const [filterByText, SetFilterByText] = useState("")
    const [itemTypes, SetItemTypes] = useState([])
    const [toggledTypes, SetToggledTypes] = useState({})
    const slider = useRef()
    const filteredText = useRef()
    useEffect(() => {
        axios.get('http://localhost:8000/photos')
            .then((response) => {
                setPhotosArray(response.data)
                response.data.map((el, id) => {
                    //jakby te sety to robia tak ze sie nie powtarza pozdro
                    const newItemTypes = new Set();
                    response.data.forEach((el) => {
                        const match = el.filename.match(/^[^_]+/);
                        if (match) {
                            newItemTypes.add(match[0]);
                        }
                    })
                    SetItemTypes(Array.from(newItemTypes));
                })
            })
    }, [])
    useEffect(() => {
        console.log("Updated itemTypes:", itemTypes);
    }, [itemTypes]);
    const handleCheckboxChange = (type) => {
        SetToggledTypes((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    return (
        <div>
            <div>
                <input type="range" ref={slider} class="form-range" min="1" max="5" id="customRange2" onChange={(e) => {
                    SetGridSize(Number(e.currentTarget.value))
                }}></input>
            </div>
            <div>
                <input type="text" ref={filteredText} onChange={() => {
                    SetFilterByText(filteredText.current.value)
                }}></input>
            </div>
            <div>
                {itemTypes.map((type, id) => (
                    <div key={id}>
                        <input 
                            type="checkbox" 
                            className="btn-check" 
                            id={`btn-check-${id}`}
                            checked={toggledTypes[type] || false} 
                            onChange={() => handleCheckboxChange(type)} 
                            autoComplete="off" 
                        />
                        <label 
                            className="btn btn-primary" 
                            htmlFor={`btn-check-${id}`}
                        >
                            {type}
                        </label>
                    </div>
                ))}
            </div>
            <div class="container text-center">
                <div class={"row row-cols-" + gridSize}>
                    {
                        photosArray
                            .filter(el => {
                                if (!filterByText) return true;
                                return el.text.toLowerCase().includes(filterByText.toLowerCase());
                            }).map((el, id) => (
                                <div class="col">
                                    <div class="card">
                                        <img src={"./sci_images/" + el.filename + "." + el.extension} class="card-img-top" alt={el.Text}></img>
                                        <div class="card-body">
                                            {el.text}
                                        </div>
                                    </div>
                                    {/* {"" + el.filename + el.extension} */}
                                </div>

                            ))
                    }
                </div>
            </div>
            <div>
            </div>

        </div>

    );
}

export default TaskPhotos;
