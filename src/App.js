import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './NewTransactions/NewTransaction';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { Provider } from 'react-redux';
import paymentsStore from './store/store';

function App() {

  return (
    <Provider store={paymentsStore}>
    <BrowserRouter>
    <div className="App">
      
      <PageHeader/>
    
        <Routes>
        
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/find/:orderId" element = {<FindATransaction />} />
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/" element={<h1>Welcome to the application</h1>} />
          <Route path="*" element={<PageNotFound />} />  
        </Routes>
        
      </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
