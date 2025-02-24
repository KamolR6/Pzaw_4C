import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import EmployeeRow from "./TaskEmployeesRow";



function TaskEmployees() {
    //UseStatecik na itemki (czyli pracownikow bo sa oni przedmiotami pzdr)
    const [items, setItems] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [cashFilter, setCashFilter] = useState(1);
    const [isBigger, setIsBigger] = useState(true);
    const inputName = useRef();
    const inputCash = useRef();

    //UseEffect przypisujacy "ludzi" do tablicy a jako ze response to obiekt tablica obiektow to wezmiemy sb tylko tablice obiektow jak sigiemki
    useEffect(() => {
        //ten catch jest useless do zapamietania
        axios
            .get("http://localhost:8000/employees")
            .then(response => setItems(response.data.employees))
            .catch(error => console.error(error));
    }, [])
    //no wiadomo zwykla mapka do robienia rzedow z propami etc
    //ten dodatkowy component to doslownie tylko funkcja co ma przyjac each itemek czyli wypoychamy to co jest w mapie do innego komponentu
    //filtruje wszystko w itemkach I OCZYWISCIE WSZYSTKO LOWERCASE MUSI MIEC
    //i pozniej od sfiltrowanych rzeczyu mape bo filter wypierdala z arraya itemy ktory sa false
    return (
        <div>
            <div>
                <table>
                    {/* przez to ze trzeba odzielnie filtrowac to albo to
                    to najlepiej zwracac kazdy filtr i od tego mapowac bo jakos to dziala xd
                    */}
                    {
                        items
                            .filter(item => {
                                const NameMatch = item.first_name.toLowerCase().includes(nameFilter.toLowerCase()) ||
                                    item.last_name.toLowerCase().includes(nameFilter.toLowerCase())

                                const SalaryMatch = isBigger
                                    ? item.salary > Number(cashFilter)
                                    : item.salary < Number(cashFilter);
                                return NameMatch && SalaryMatch
                            }).map((item, index) => (
                                EmployeeRow(item)
                            ))
                    }
                </table>
            </div>
            <div>
                <input ref={inputName} type="text" placeholder="Search employee" onChange={() => { setNameFilter(inputName.current.value) }}></input>
            </div>
            <div>
                <div>
                    {/* wazny jest ten event jako parametr funkcji  */}
                    <select onChange={(e) => setIsBigger(e.target.value === "1")}>
                        <option value="1">Większe niż</option>
                        <option value="0">Mniejsze niż</option>
                    </select>
                </div>
                <div>
                    <input ref={inputCash} type="number" placeholder="00 000" onChange={() => { setCashFilter(inputCash.current.value) }}></input>
                </div>
            </div>

        </div>

    );
}





export default TaskEmployees;
