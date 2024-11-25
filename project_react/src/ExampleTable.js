//Example of using components to unify data read

import ExampleRow from "./ExampleRow"

function FirstTable() {
    // zwykla tablica jednoelementowa
    const data = ["FAMAS", "P90"]
    // te fajne tablice
    // tablica obiektow i tyle
    const data2 = [
        {
            k1: "Scar",
            k2: "5.56"
        },
        {
            k1: "Glock-19",
            k2: "9mm"
        },
        {
            k1: "Colt 1911",
            k2: "45 ACP"
        }
    ]
    return (
        <div>
            <table>
                <tr>
                    <th>lp.</th>
                    <th>Dane 1</th>
                    <th>Dane 2</th>
                </tr>
                <body>
                    {/* tworzenie dynamiczne tablicy nazwa.map((el, index, array) => {}) */}
                    {
                        data.map((el, id) => {
                            return (
                                // key=id to bledne rozwiazanie
                                <tr key={id}>
                                    <td>
                                        {id + 1}
                                    </td>
                                    <td>
                                        {el}
                                    </td>
                                    <td>
                                        {/* puste dane do formatu */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        data2.map((el, id)=><ExampleRow index={id} key1={el.k1} key2={el.k2}/>)

                        // data2.map zwraca kod HTML
                        // data2.map((el, id) => {
                        //     return (
                        //         // to jest dobre ale w sumie useless
                        //         <tr key={el.id}>
                        //             <td>
                        //                 {id + 1}:
                        //             </td>

                        //             <td>
                        //                 {el.k1} - {el.k2}
                        //             </td>
                        //         </tr>
                        //     )
                        // })
                        
                    }
                </body>
            </table>
        </div>
    )
}

export default FirstTable