function EmployeeRow(props) {
    return (
        <tbody>
            <tr>
                <td>
                    {props.first_name}
                </td>
                <td>
                    {props.last_name} 
                </td>
                <td>
                    {props.salary}
                </td>
            </tr>
        </tbody>
    )
}
export default EmployeeRow