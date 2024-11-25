import axios from "axios"
import { useState } from "react"

function AxiosExample() {
    const [data, setData] = useState({})
    function ButtonClick() {
        axios.get("https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json")
            .then((response) => {
                //powodzenie
                console.log(Object.keys(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            })
    }
    return (

        <div>
            <p>
                zatanczylbys z tiktokiem na policji
            </p>
            <input type="button" onClick={ButtonClick} value="ale ze z tiktokiem na policji"></input>
        </div>
    )

}
export default AxiosExample