const TransactionRow = (props) => {

    return <tr id={props.id} ><td>{props.id}</td><td>{props.date}</td><td>{props.country}</td>
    <td>{props.currency}</td><td>{props.amount}</td></tr>

}

export default TransactionRow;