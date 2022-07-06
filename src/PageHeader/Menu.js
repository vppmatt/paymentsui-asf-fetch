const Menu = (props) => {
    return <ul className="nav">
        <li style={{cursor: "pointer"}}   onClick={ () => props.setSelectedPage("find")} >Find a transaction</li>
        <li style={{cursor: "pointer"}} onClick={ () => props.setSelectedPage("new")} >New Transaction</li>
    </ul>
}

export default Menu;