import { Link } from "react-router-dom";

const Menu = (props) => {
    return <ul className="nav">
        <li style={{cursor: "pointer"}} ><Link to="/find"> Find a transaction</Link></li>
        <li style={{cursor: "pointer"}} ><Link to="/new">New Transaction</Link></li>
    </ul>
}

export default Menu;