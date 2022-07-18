import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Search.css';

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(false);
    const [touched, setTouched] = useState(false);

    const navigate = useNavigate();

    const doSearch = (event) => {
        event.preventDefault();
        props.setSearchTerm(searchTerm.trim());
        navigate("/find/" + searchTerm.trim());
    }
    
    const handleChange = (event) => {
        const value = event.target.value;
        setTouched(true);
        setSearchTerm(value);
        setValid (value.trim().length > 0);
    }

    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor="orderId"  >Order Id:</label>
            <input onChange={handleChange} value={searchTerm} id="orderId" type="text" />
            <button type="submit" disabled={!valid} >Search</button>
            {touched && !valid && <p style={{color: "#f00", "font-size": "12px", "margin-top": 0}}>Please enter a valid order id</p>}
        </form>
    </div>

}

export default Search;