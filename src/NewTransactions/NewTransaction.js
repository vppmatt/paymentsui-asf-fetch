import { useReducer } from "react";

const NewTransaction = () => {


    const emptyTransaction = { orderId: "", date : new Date().toISOString().slice(0,10) , country: "",
        amount : "", currency: "", taxCode : "", taxRate : "", type : ""}

    const newTransactionReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newTransaction, dispatch] = useReducer(newTransactionReducer , emptyTransaction);

    const handleChange = (event) => {
        const dataToChange = { field : event.target.id, value : event.target.value };
        dispatch(dataToChange);
    }
    
    const {orderId, date, country, amount, currency, taxCode, taxRate, type} = newTransaction;

const submitForm = (e) => {
    e.preventDefault();
    console.log(newTransaction);
}

    return (
    <form className="addTransactionsForm" onSubmit={submitForm} >
    <h2>New transaction</h2>
    <label htmlFor="orderId">Order Id</label>
    <input type="text" id="orderId" onChange={handleChange} value={orderId} />
    <br/>
    <label htmlFor="date">Date</label>
    <input type="date" id="date" onChange={handleChange} value={date}/>
    <br/>
    <label htmlFor="country">Country</label>
    <input type="text"  id="country" onChange={handleChange} value={country} />
    <br/>
    <label htmlFor="currency">Currency</label>
    <input type="text"  id="currency" onChange={handleChange} value = {currency} />
    <br/>
    <label htmlFor="amount">Amount</label>
    <input type="text"  id="amount" onChange={handleChange} value={amount} />
    <br/>
    <label htmlFor="taxCode">Tax Code</label>
    <input type="text"  id="taxCode" onChange={handleChange} value ={taxCode} />
    <br/>
    <label htmlFor="amount">Tax Rate</label>
    <input type="text"  id="taxRate" onChange={handleChange} value={taxRate} />
    <br/>
    <label htmlFor="type">Type</label>
    <input type="text"  id="type" onChange={handleChange} value={type}  />
    <br/>
    <button type="submit">Save</button>
</form>)
}

export default NewTransaction;