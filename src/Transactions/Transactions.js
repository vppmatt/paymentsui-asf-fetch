import { Fragment, useState, useEffect } from 'react';
import { getAllPayments, getAllPaymentsRestVersion } from '../data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);
    
    const getTransactionsDataFromServer = () => {
        const paymentsPromise = getAllPaymentsRestVersion();
        paymentsPromise.then (
            (response) => {
                if(response.ok) {
                    response.json().then (
                        data => {
                            console.log("got the data")
                            setTransactions(data);
                        }
                    )
                }
                else {
                    console.log("Something went wrong", response.status);
                }
            }
        )
        .catch (
            (error) => {
                console.log("Server error", error);
            }
        );
    };

    useEffect( () => {
        getTransactionsDataFromServer();
    } , [] );
    
    debugger;
    const allCountries = transactions.map( transaction => transaction.country);
    const uniqueCountries = allCountries.filter ( (country,index) =>  
        allCountries.indexOf(country) === index
    );

    const [selectedCountry, setSelectedCountry] = useState(uniqueCountries[0]);

    

    const countryOptions = uniqueCountries.map
     ( country => <option key={country} value={country}>{country}</option> );

    const displayTransactions = transactions.map ( trans => 
        (selectedCountry == null || trans.country === selectedCountry) && 
        <TransactionRow key={trans.id} id={trans.id} date ={trans.date} country={trans.country} 
            currency={trans.currency} amount={trans.amount} />
      );

    const changeCountry = (event) => {
        const selectedCountryIndex =event.target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[selectedCountryIndex-1]);
    }

    return <Fragment>
        <p >Select country: <select onChange={changeCountry} >
                <option disabled selected> all </option>
                {countryOptions}
            </select>
        </p>

        <table id="transactionsTable" style= {{background: "#ccc"}} className="transactionsTable">
            <thead>
            <tr><th>Id</th><th>Date</th><th>Country</th><th>Currency</th><th>amount</th></tr>
            </thead>
            <tbody>
            {displayTransactions}
            </tbody>
        </table>

        {transactions.length === 0 && <p>Please wait... loading data</p>}
        </Fragment>
}

export default Transactions;