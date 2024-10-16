function FirstTable() {
    // zwykla tablica jednoelementowa
    const data = ["FAMAS", "P90"]
    // te fajne tablice
    // tablica obiektow i tyle
    const data2 = [
        {
            id:"e7f79212-96a6-4625-bd3c-3b333dce7082",
            k1: "Scar",
            k2: "5.56"
        },
        {
            id: "e90bf241-7aee-4ff1-ba70-efe2d10859de",
            k1: "Glock-19",
            k2: "9mm"
        },
        {
            id: "b4d37046-1696-4588-97e1-9d0502368523",
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
                        // data2.map zwraca kod HTML
                        data2.map((el, id) => {
                            return (
                                // to jest dobre ale w sumie useless
                                <tr key={el.id}>
                                    <td>
                                        {id + 1}:
                                    </td>

                                    <td>
                                        {el.k1} - {el.k2}
                                    </td>
                                </tr>
                            )
                        })


                    }
                </body>
            </table>
        </div>
    )
}

export default FirstTable