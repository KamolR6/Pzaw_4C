// komponent do generowania
function FirstRow(props) {
    return (
        <tr>
            <td>
                {props.index}.
            </td>
            <td>
                {props.key1} - 
            </td>
            <td>
                {props.key2}.
            </td>
        </tr>
    )
}
export default FirstRow