import { useState } from 'react';
import './Search.css';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(false);

    const doSearch = (event) => {
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setValid (value.trim().length > 0);
    }

    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor="orderId"  >Order Id:</label>
            <input onChange={handleChange} value={searchTerm} id="orderId" type="text" />
            <button type="submit" disabled={!valid} >Search</button>
        </form>
    </div>

}

export default Search;