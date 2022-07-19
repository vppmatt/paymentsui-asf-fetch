import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { getAllPaymentsAxiosVersion } from '../data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = (props) => {

    const [transactions, setTransactions] = useState([]);

    const dispatch = useDispatch();
    const transactionsInRedux = useSelector( state => state.transactions);
    const lastFetchInRedux = useSelector( state => state.lastFetch);
    
    const getTransactionsDataFromServer = () => {

        let timedifference = 999999;
        if (lastFetchInRedux != null) {
            const now = new Date();
            timedifference = now.getTime() - lastFetchInRedux;
        }
        console.log("timedifference", timedifference)

        if (transactionsInRedux.length > 0  && timedifference < 60000) {
            setTransactions(transactionsInRedux);
            console.log("got the transactions from redux");
        }
        else {
            const paymentsPromise = getAllPaymentsAxiosVersion();
            console.log("getting the transactions from redux");
            paymentsPromise.then (
                (response) => {
                    console.log(response)
                    if(response.status === 200) {
                        setTransactions(response.data);    
                        dispatch ( { type : "save-transactions" , value :response.data } );
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
        }
    };

    useEffect( () => {
        getTransactionsDataFromServer();
    } , [] );
    
    
    const allCountries = transactions.map( transaction => transaction.country);
    const uniqueCountries = allCountries.filter ( (country,index) =>  
        allCountries.indexOf(country) === index
    );

    const [selectedCountry, setSelectedCountry] = useState("none");

    const [searchParams, setSearchParams] = useSearchParams();
    const targetCountry = searchParams.get("country");
    if (targetCountry != null && targetCountry !== selectedCountry) {
        setSelectedCountry(targetCountry);
    }

    const countryOptions = uniqueCountries.map
     ( country => <option key={country} value={country}>{country}</option> );
    
     
    // const displayTransactions = transactions.map ( trans => 
    //     (trans.country === selectedCountry) && 
    //     <TransactionRow key={trans.id} id={trans.id} date ={trans.date} country={trans.country} 
    //         currency={trans.currency} amount={trans.amount} orderId={trans.orderId} />
    //   );

      const displayTransactions = transactions
        .filter(trans => props.searchTerm=== "" || props.searchTerm === trans.orderId)
        .map ( trans => 
        (trans.country === selectedCountry) && 
        <TransactionRow key={trans.id} id={trans.id} date ={trans.date} country={trans.country} 
            currency={trans.currency} amount={trans.amount} orderId={trans.orderId} />
      );

      const navigate = useNavigate();

    const changeCountry = (event) => {
        const selectedCountryIndex =event.target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[selectedCountryIndex-1]);
        setSearchParams({country : uniqueCountries[selectedCountryIndex-1]});
        //navigate("/find?country=" + uniqueCountries[selectedCountryIndex-1]);
    }

    return <Fragment>
        
        <p >{ countryOptions.length > 0 &&
            <select onChange={changeCountry} defaultValue="none" >
                <option disabled value ="none"> Please select a country </option>
                {countryOptions}
            </select>
            }
        </p>

        <table id="transactionsTable" style= {{background: "#ccc"}} className="transactionsTable">
            <thead>
            <tr><th>Id</th><th>Order Id</th><th>Date</th><th>Country</th><th>Currency</th><th>amount</th></tr>
            </thead>
            <tbody>
            {displayTransactions}
            </tbody>
        </table>

        {transactions.length === 0 && <p>Please wait... loading data</p>}
        </Fragment>
}

export default Transactions;